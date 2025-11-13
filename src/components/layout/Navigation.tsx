/**
 * Navigation Component
 * 
 * Main navigation bar displayed at the top of all pages
 * Features:
 * - Fixed position navigation that stays visible while scrolling
 * - Logo with hover animation
 * - Active page highlighting
 * - Responsive design for mobile and desktop
 * 
 * Styling: Uses semantic tokens from design system (primary, nav-bg, etc.)
 */

import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  // Get current page location to highlight active nav item
  const location = useLocation();
  
  // Define all navigation menu items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav-bg/95 backdrop-blur-sm border-b border-border/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section - Links back to home page */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center font-bold text-xl transition-transform group-hover:scale-110">
              K
            </div>
            <span className="text-primary font-bold text-xl hidden md:block">
              Kush Smoke Shop
            </span>
          </Link>

          {/* Navigation Menu Links */}
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              // Check if this nav item is the current page
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "px-4 md:px-6 py-2 rounded-full font-medium transition-all duration-300 text-sm md:text-base",
                    isActive
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                      : "text-nav-text hover:text-foreground hover:bg-secondary"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
