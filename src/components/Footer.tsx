import { Link } from "react-router-dom";
import { Fish, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Fish className="h-8 w-8" />
              <span className="text-xl font-bold">RS Fisheries</span>
            </div>
            <p className="text-sm text-primary-foreground/80">
              Your trusted partner for quality seafood supply. Serving markets with fresh, reliable, and sustainable products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/catalog" className="hover:text-accent transition-colors">Fish Catalog</Link>
              </li>
              <li>
                <Link to="/buyers" className="hover:text-accent transition-colors">For Buyers</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/enquiry" className="hover:text-accent transition-colors">Request a Quote</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-accent transition-colors">Staff Login</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>contact@rsfisheries.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>123 Harbor Way, Coastal City, CC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; {currentYear} RS Fisheries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
