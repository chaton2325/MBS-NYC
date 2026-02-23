import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer data-testid="main-footer" className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/MBS.jpg" alt="MBS NYC Logo" className="h-14 w-auto rounded-sm" />
              <h3 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>MBS NYC</h3>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Mekinda Business Solutions LLC - Empowering businesses through strategic consulting and innovative digital solutions.
            </p>
            <div className="flex items-start space-x-2 text-slate-400 mb-2">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span className="text-sm">New York City, NY</span>
            </div>
            <div className="flex items-start space-x-2 text-slate-400 mb-2">
              <Mail size={18} className="mt-1 flex-shrink-0" />
              <span className="text-sm">mekinda@mbsnyc.com</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" data-testid="footer-link-about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" data-testid="footer-link-services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/products" data-testid="footer-link-products" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/partners" data-testid="footer-link-partners" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>Business Development</li>
              <li>Marketing Strategy</li>
              <li>Mobile Apps & Websites</li>
              <li>Custom Printing</li>
              <li>Multimedia Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mekinda Business Solutions LLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link to="/contact" data-testid="footer-link-privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/contact" data-testid="footer-link-terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
