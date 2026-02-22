from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone
import asyncio
import resend


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Resend configuration
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
RECIPIENT_EMAIL = os.environ.get('RECIPIENT_EMAIL', 'notifine2025@gmail.com')
resend.api_key = RESEND_API_KEY

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# Define Models
class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    company: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    company: str
    message: str


# Routes
@api_router.get("/")
async def root():
    return {"message": "MBS NYC API"}

@api_router.post("/contact", response_model=ContactSubmission)
async def submit_contact_form(input: ContactSubmissionCreate):
    """Handle contact form submission - save to DB and send email"""
    try:
        # Create contact submission object
        contact_dict = input.model_dump()
        contact_obj = ContactSubmission(**contact_dict)
        
        # Convert to dict and serialize datetime to ISO string for MongoDB
        doc = contact_obj.model_dump()
        doc['timestamp'] = doc['timestamp'].isoformat()
        
        # Save to database
        _ = await db.contact_submissions.insert_one(doc)
        logger.info(f"Contact submission saved: {contact_obj.id}")
        
        # Send email notification if API key is configured
        if RESEND_API_KEY and RESEND_API_KEY != 'your_resend_api_key_here':
            try:
                email_params = {
                    "from": SENDER_EMAIL,
                    "to": [RECIPIENT_EMAIL],
                    "subject": f"New Contact Form Submission - {input.company}",
                    "html": f"""
                    <html>
                        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                            <div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc; border-radius: 8px;">
                                <h2 style="color: #0F172A; border-bottom: 2px solid #3B82F6; padding-bottom: 10px;">New Contact Form Submission</h2>
                                
                                <div style="background-color: white; padding: 20px; border-radius: 6px; margin-top: 20px;">
                                    <p><strong style="color: #0F172A;">Name:</strong> {input.name}</p>
                                    <p><strong style="color: #0F172A;">Email:</strong> {input.email}</p>
                                    <p><strong style="color: #0F172A;">Company:</strong> {input.company}</p>
                                    <p><strong style="color: #0F172A;">Message:</strong></p>
                                    <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #3B82F6; margin-top: 10px;">
                                        {input.message}
                                    </div>
                                </div>
                                
                                <p style="margin-top: 20px; color: #64748B; font-size: 12px;">Submitted via MBS NYC Contact Form</p>
                            </div>
                        </body>
                    </html>
                    """
                }
                
                # Run sync SDK in thread to keep FastAPI non-blocking
                email_result = await asyncio.to_thread(resend.Emails.send, email_params)
                logger.info(f"Email sent successfully: {email_result.get('id')}")
            except Exception as e:
                logger.error(f"Failed to send email: {str(e)}")
                # Don't fail the request if email fails
        
        return contact_obj
        
    except Exception as e:
        logger.error(f"Error submitting contact form: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Failed to submit form: {str(e)}")

@api_router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """Get all contact submissions"""
    submissions = await db.contact_submissions.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for submission in submissions:
        if isinstance(submission['timestamp'], str):
            submission['timestamp'] = datetime.fromisoformat(submission['timestamp'])
    
    return submissions

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
