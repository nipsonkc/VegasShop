/**
 * Contact Page
 * 
 * Displays contact information and a contact form
 * Features:
 * - Hero section with animated background
 * - Two store locations with full contact details
 * - Contact form for inquiries
 * - Social media links
 * - Fully responsive design
 */

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SocialMediaLinks from "@/components/layout/SocialMediaLinks";
import { MapPin, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Gradient Background */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50 text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-foreground mb-6">
            Get in touch with us - we're here to help!
          </p>
          
          {/* Social Media Links */}
          <SocialMediaLinks className="justify-center" />
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">
                  Our Locations
                </h2>

                {/* Tropicana Location */}
                <div className="premium-card bg-card rounded-xl p-6 mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Tropicana Location
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-card-foreground">
                          1801 East Tropicana Avenue
                        </p>
                        <p className="text-muted-foreground">
                          Las Vegas, NV 89119
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href="tel:7028881498"
                        className="text-card-foreground hover:text-primary"
                      >
                        (702) 888-1498
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">
                        Mon-Sun: 10:00 AM - 10:00 PM
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desert Inn Location */}
                <div className="premium-card bg-card rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Desert Inn Location
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-card-foreground">
                          3730 East Desert Inn Street
                        </p>
                        <p className="text-muted-foreground">
                          Las Vegas, NV 89121
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a
                        href="tel:7024634481"
                        className="text-card-foreground hover:text-primary"
                      >
                        (702) 463-4481
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-card-foreground">
                        Mon-Sun: 10:00 AM - 10:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="premium-card bg-card rounded-xl p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Phone (Optional)
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(702) 000-0000"
                    className="w-full"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-card-foreground mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
