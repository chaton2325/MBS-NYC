import requests
import sys
from datetime import datetime

class MBSNYCAPITester:
    def __init__(self, base_url="https://consulting-hub-nyc.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=30)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=30)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=30)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=30)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    if response.content:
                        return True, response.json()
                    else:
                        return True, {}
                except:
                    return True, response.text
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text[:200]}...")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text[:200]
                })
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            return False, {}

    def test_api_root(self):
        """Test API root endpoint"""
        success, response = self.run_test(
            "API Root",
            "GET",
            "",
            200
        )
        return success

    def test_contact_form_submission(self):
        """Test contact form submission"""
        test_data = {
            "name": "Test User",
            "email": "test@example.com",
            "company": "Test Company",
            "message": "This is a test message from automated testing."
        }
        
        success, response = self.run_test(
            "Contact Form Submission",
            "POST",
            "contact",
            200,
            data=test_data
        )
        
        if success and response:
            print(f"   ✓ Contact submission created with ID: {response.get('id', 'N/A')}")
            return response.get('id')
        return None

    def test_get_contact_submissions(self):
        """Test retrieving contact submissions"""
        success, response = self.run_test(
            "Get Contact Submissions",
            "GET", 
            "contact",
            200
        )
        
        if success and isinstance(response, list):
            print(f"   ✓ Retrieved {len(response)} contact submissions")
            return len(response) > 0
        return False

    def test_contact_form_validation(self):
        """Test contact form validation with missing fields"""
        invalid_data = {
            "name": "",  # Missing name
            "email": "invalid-email",  # Invalid email
            "company": "",  # Missing company
            "message": ""  # Missing message
        }
        
        success, response = self.run_test(
            "Contact Form Validation (Invalid Data)",
            "POST",
            "contact",
            422,  # Expecting validation error
            data=invalid_data
        )
        return success

def main():
    print("🚀 Starting MBS NYC API Tests...")
    print("=" * 50)
    
    # Setup
    tester = MBSNYCAPITester()
    
    # Test API root
    print("\n📍 Testing API Connectivity...")
    if not tester.test_api_root():
        print("❌ API root failed, stopping tests")
        return 1

    # Test contact form functionality
    print("\n📝 Testing Contact Form...")
    contact_id = tester.test_contact_form_submission()
    if not contact_id:
        print("⚠️  Contact form submission failed")
    
    # Test getting contact submissions
    print("\n📋 Testing Contact Retrieval...")
    if not tester.test_get_contact_submissions():
        print("⚠️  Contact retrieval failed")
        
    # Test form validation
    print("\n🔍 Testing Form Validation...")
    if not tester.test_contact_form_validation():
        print("⚠️  Form validation test failed")

    # Print final results
    print("\n" + "=" * 50)
    print(f"📊 Final Results: {tester.tests_passed}/{tester.tests_run} tests passed")
    
    if tester.failed_tests:
        print("\n❌ Failed Tests:")
        for test in tester.failed_tests:
            print(f"   • {test['name']}")
            if 'error' in test:
                print(f"     Error: {test['error']}")
            else:
                print(f"     Expected: {test['expected']}, Got: {test['actual']}")
    
    success_rate = (tester.tests_passed / tester.tests_run) * 100
    print(f"\n✨ Success Rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())