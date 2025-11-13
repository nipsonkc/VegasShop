import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Animated Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <img
            src={heroBackground}
            alt="Las Vegas Smoke Shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-hero-overlay/80 via-hero-overlay/60 to-hero-overlay/90" />
          
          {/* Floating Light Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-primary drop-shadow-[0_0_30px_rgba(234,179,8,0.5)] animate-pulse">
            Kush Smoke Shop
          </h1>
          <p className="text-2xl md:text-3xl text-foreground mb-12 drop-shadow-lg">
            Premium Smoke Shop in Las Vegas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30"
            >
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Find Our Stores
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">
              Visit Our Locations
            </h2>
            <p className="text-xl text-muted-foreground">
              Two convenient locations across Las Vegas to serve you better
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Tropicana Location */}
            <div className="premium-card bg-card rounded-xl p-8">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Tropicana Location
              </h3>
              <div className="space-y-4 text-card-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">1801 East Tropicana Avenue</p>
                    <p className="text-muted-foreground">Las Vegas, NV 89119</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">📞</span>
                  <span>(702) 888-1498</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">🕐</span>
                  <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Desert Inn Location */}
            <div className="premium-card bg-card rounded-xl p-8">
              <h3 className="text-3xl font-bold text-primary mb-6">
                Desert Inn Location
              </h3>
              <div className="space-y-4 text-card-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">3730 East Desert Inn Street</p>
                    <p className="text-muted-foreground">Las Vegas, NV 89121</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">📞</span>
                  <span>(702) 463-4481</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-primary font-semibold">🕐</span>
                  <span>Mon-Sun: 10:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
