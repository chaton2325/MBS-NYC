import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(`${API}/contact`, formData);
      
      if (response.status === 200) {
        toast.success('Thank you for contacting us! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page" className="pt-20">
      {/* Hero Section */}
      <section data-testid="contact-hero-section" className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="text-sm uppercase tracking-widest text-slate-500 font-semibold">Get in Touch</span>
            <h1
              data-testid="contact-title"
              className="text-5xl md:text-7xl font-bold tracking-tight leading-none mt-4 mb-6"
              style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}
            >
              Let's Start a Conversation
            </h1>
            <p data-testid="contact-description" className="text-lg md:text-xl leading-relaxed text-slate-600">
              Ready to transform your business? Reach out to MBS NYC and discover how our expertise can help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section data-testid="contact-form-section" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              data-testid="contact-form"
            >
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2" style={{ color: '#0F172A' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    data-testid="contact-input-name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-white border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 rounded-sm px-4 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: '#0F172A' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    data-testid="contact-input-email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-white border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 rounded-sm px-4 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold mb-2" style={{ color: '#0F172A' }}>
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    data-testid="contact-input-company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-white border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 rounded-sm px-4 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: '#0F172A' }}>
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    data-testid="contact-input-message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white border border-slate-200 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 rounded-sm px-4 py-3 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  data-testid="contact-submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed rounded-sm px-8 py-4 text-sm font-semibold tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              data-testid="contact-info"
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-8" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                  Contact Information
                </h2>
                <p className="text-base leading-relaxed text-slate-600 mb-8">
                  Located in the heart of New York City, we're here to help you achieve your business goals. Reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4" data-testid="contact-location">
                  <div className="p-3 bg-slate-50 rounded-sm">
                    <MapPin size={24} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#0F172A' }}>Location</h3>
                    <p className="text-base text-slate-600">New York City, NY</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4" data-testid="contact-email">
                  <div className="p-3 bg-slate-50 rounded-sm">
                    <Mail size={24} className="text-slate-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1" style={{ color: '#0F172A' }}>Email</h3>
                    <p className="text-base text-slate-600">notifine2025@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 border border-slate-200">
                <h3 className="text-2xl font-medium mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#0F172A' }}>
                  Business Hours
                </h3>
                <div className="space-y-2 text-base text-slate-600">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
