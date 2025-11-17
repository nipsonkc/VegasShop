/**
 * About Us Page
 * 
 * Displays company information, mission, story, and values
 * Features:
 * - Animated gradient hero section
 * - Mission and story sections with premium cards
 * - Core values grid with icons
 * - "Why Choose Us" section
 * - Fully responsive design
 */

import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Shield, Heart, Users, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Quality First",
    description:
      "We carefully curate our product selection to ensure only the highest quality items make it to our shelves.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    description:
      "Your satisfaction is our priority. We're here to help, advise, and ensure you find exactly what you need.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "We believe in building strong relationships with our customers and being an active part of the Las Vegas community.",
  },
  {
    icon: Award,
    title: "Expertise",
    description:
      "Our knowledgeable staff is always ready to share insights and help you make informed decisions.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Animated Gradient Background */}
     <section className="pt-32 pb-16 bg-gradient-to-b from-[#0A0A0A] via-[#1A1A1A] to-[#3A2F1A] text-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
       

        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            About Kush Smoke Shop
          </h1>
          <p className="text-lg md:text-xl text-[#F5EAC6] max-w-4xl mx-auto leading-relaxed">

            Welcome to Kush Smoke Shop, your premier destination for quality
            smoke shop products in Las Vegas. Since our establishment, we've
            been committed to providing our community with top-tier products,
            exceptional service, and expert knowledge.
          </p>
        </div>
      </section>

      

      {/* Mission Section */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Our Mission</h2>
            <div className="premium-card bg-card rounded-xl p-6 md:p-8 text-center border-2 border-primary/20">
            
              <p className="text-base md:text-lg text-card-foreground leading-relaxed">
                Our mission is to create a welcoming environment where customers
                can find premium smoke shop products, receive knowledgeable
                guidance, and feel part of a community that values quality and
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-primary">Our Story</h2>
          <div className="max-w-4xl mx-auto premium-card bg-card rounded-xl p-6 md:p-8 border-2 border-primary/20">
            <p className="text-base md:text-lg text-card-foreground leading-relaxed mb-4">
              Founded with a passion for quality and customer service, Kush
              Smoke Shop has grown from a single location to two thriving stores
              across Las Vegas. Our journey has been driven by our commitment to
              offering only the best products and creating lasting relationships
              with our customers.
            </p>
            <p className="text-base md:text-lg text-card-foreground leading-relaxed">
              Today, we're proud to serve the Las Vegas community with two
              convenient locations, each stocked with an extensive selection of
              premium products and staffed by knowledgeable team members who are
              passionate about what we do.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-base md:text-xl text-muted-foreground">
              These principles guide everything we do at Kush Smoke Shop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="premium-card bg-card rounded-xl p-6 md:p-8 text-center group hover:scale-105 transition-transform duration-300 border-2 border-primary/20 hover:border-primary/50"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4 md:mb-6 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-7 h-7 md:w-8 md:h-8 text-primary" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-3 md:mb-4">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-primary">
            Why Choose Kush Smoke Shop?
          </h2>
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6">
            <div className="premium-card bg-card rounded-xl p-5 md:p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                Premium Product Selection
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                We stock only the finest products from trusted manufacturers and
                artisans.
              </p>
            </div>
            <div className="premium-card bg-card rounded-xl p-5 md:p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                Expert Staff
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Our team members are knowledgeable enthusiasts ready to assist
                you.
              </p>
            </div>
            <div className="premium-card bg-card rounded-xl p-5 md:p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                Convenient Locations
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Two locations in Las Vegas for your shopping convenience.
              </p>
            </div>
            <div className="premium-card bg-card rounded-xl p-5 md:p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <h3 className="text-lg md:text-xl font-bold text-primary mb-2">
                Community Focused
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                We're more than a shop—we're part of the Las Vegas community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
