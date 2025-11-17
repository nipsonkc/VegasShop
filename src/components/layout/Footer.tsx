/**
 * Footer Component
 * 
 * Footer section displayed at the bottom of all pages
 * Features:
 * - Brand information and description
 * - Social media links (Facebook, Instagram, TikTok)
 * - Two store locations with contact details
 * - Quick navigation links
 * - Copyright information
 * 
 * Responsive Design: Stacks vertically on mobile, 3 columns on desktop
 */

/**
 * Footer Component
 */

import { Link } from "react-router-dom";
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-nav-bg text-foreground border-t border-border/20">
      
      {/* CENTER WRAPPER */}
      <div className="w-full px-4 py-12 flex justify-center">
        <div className="max-w-6xl w-full">

          {/* 3-COLUMN GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">

            {/* Brand Section */}
            <div className="flex flex-col items-center md:items-start">
              <h3 className="text-primary font-bold text-2xl mb-4">
                Kush Smoke Shop
              </h3>
              <p className="text-nav-text leading-relaxed mb-6">
                Your premier destination for quality smoke shop products in Las
                Vegas. Serving the community with excellence since our
                establishment.
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="https://www.facebook.com/KushSmokeShopLV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Visit our Facebook page"
                >
                  <Facebook className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/kushsmokeshoplv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Visit our Instagram page"
                >
                  <Instagram className="w-5 h-5" />
                </a>

                <a
                  href="https://www.tiktok.com/@kushsmokeshoplv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label="Visit our TikTok page"
                >
                  <FaTiktok className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Our Locations */}
            <div>
              <h4 className="text-primary font-semibold text-lg mb-4">
                Our Locations
              </h4>

              <div className="space-y-6">

                {/* Tropicana */}
                <div className="space-y-2">
                  <h5 className="font-semibold text-foreground">Tropicana Location</h5>
                  <div className="space-y-1 text-nav-text text-sm">
                    <div className="flex items-start gap-2 justify-center md:justify-start">
                      <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>
                        1801 East Tropicana Avenue<br />
                        Las Vegas, NV 89119
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="tel:7028881498" className="hover:text-primary transition-colors">
                        (702) 888-1498
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Desert Inn */}
                <div className="space-y-2">
                  <h5 className="font-semibold text-foreground">Desert Inn Location</h5>
                  <div className="space-y-1 text-nav-text text-sm">
                    <div className="flex items-start gap-2 justify-center md:justify-start">
                      <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                      <span>
                        3730 East Desert Inn Street<br />
                        Las Vegas, NV 89121
                      </span>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                      <a href="tel:7024634481" className="hover:text-primary transition-colors">
                        (702) 463-4481
                      </a>
                    </div>
                    <div className="flex items-center gap-2 justify-center md:justify-start">
                      <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-primary font-semibold text-lg mb-4">
                Quick Links
              </h4>

              <ul className="space-y-2 text-nav-text">
                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                <li><Link to="/products" className="hover:text-primary transition-colors">Products</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

          </div>

          {/* COPYRIGHT ROW */}
          <div className="mt-12 pt-8 border-t border-border/20 text-center text-nav-text text-sm">
            <p>© 2025 Kush Smoke Shop. All rights reserved. | Las Vegas, Nevada</p>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
