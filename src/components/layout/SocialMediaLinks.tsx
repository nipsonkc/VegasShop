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
  className?: string;
}

const SocialMediaLinks = ({ className = "" }: SocialMediaLinksProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>

      {/* Facebook */}
      <a
        href="https://www.facebook.com/KushSmokeShopLV"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-[#F5EAC6]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
        aria-label="Visit our Facebook page"
      >
        <Facebook className="w-6 h-6 text-[#F5EAC6]" />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/kushsmokeshoplv"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-[#F5EAC6]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
        aria-label="Visit our Instagram page"
      >
        <Instagram className="w-6 h-6 text-[#F5EAC6]" />
      </a>

      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@kushsmokeshoplv"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-[#F5EAC6]/40 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20"
        aria-label="Visit our TikTok page"
      >
        <FaTiktok className="w-6 h-6 text-[#F5EAC6]" />
      </a>

    </div>
  );
};

export default SocialMediaLinks;
