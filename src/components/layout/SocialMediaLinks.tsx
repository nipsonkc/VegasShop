/**
 * Social Media Links Component
 * 
 * Reusable component for displaying social media icons
 * Used in Footer and Contact page
 * 
 * Features:
 * - Facebook, Instagram, and TikTok links
 * - Hover animations
 * - Accessible with aria-labels
 */

import { Facebook, Instagram } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

interface SocialMediaLinksProps {
  /** Optional CSS classes for custom styling */
  className?: string;
}

const SocialMediaLinks = ({ className = "" }: SocialMediaLinksProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      {/* Facebook Link */}
      <a
        href="https://www.facebook.com/KushSmokeShopLV"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        aria-label="Visit our Facebook page"
      >
        <Facebook className="w-6 h-6" />
      </a>
      
      {/* Instagram Link */}
      <a
        href="https://www.instagram.com/kushsmokeshoplv"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        aria-label="Visit our Instagram page"
      >
        <Instagram className="w-6 h-6" />
      </a>
      
      {/* TikTok Link */}
      <a
        href="https://www.tiktok.com/@kushsmokeshoplv"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
        aria-label="Visit our TikTok page"
      >
        <FaTiktok className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
