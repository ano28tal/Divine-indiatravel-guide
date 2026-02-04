import { Link } from "react-router-dom";
import { Heart, MapPin, Sparkles, Mail, Phone, MapPinned, Flame, Flower2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              Sacred India
            </h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Your trusted guide to exploring India's sacred destinations and
              spiritual heritage.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/destinations"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/divine-places"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Divine Places
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                28 States Covered
              </li>
              <li className="flex items-center gap-2">
                <MapPinned className="w-4 h-4" />
                100+ Destinations
              </li>
              <li className="flex items-center gap-2">
                <Flame className="w-4 h-4" />
                12 Jyotirlingas
              </li>
              <li className="flex items-center gap-2">
                <Flower2 className="w-4 h-4" />
                51 Shakti Peethas
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                info@sacredindia.com
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +91 XXX XXX XXXX
              </li>
              <li className="flex items-center gap-2">
                <MapPinned className="w-4 h-4" />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-background/70 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-primary fill-primary" />
              <span>for spiritual explorers</span>
            </div>
            <p className="text-sm text-background/60">
              © 2025 Sacred India. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-background/70">
              <Link
                to="/privacy"
                className="hover:text-background transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="hover:text-background transition-colors"
              >
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
