/**
 * Products Page
 * 
 * Displays all available product categories with filtering
 * Features:
 * - Animated gradient hero section
 * - Category filter tabs
 * - Product grid with badges
 * - Premium card designs with hover effects
 * - Fully responsive layout
 */

import { useState } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const categories = ["Glassware", "Vaporizers", "Accessories", "CBD Products"];

const products = [
  {
    id: 1,
    name: "Premium Water Pipe",
    category: "Glassware",
    description: "High-quality borosilicate glass with percolator",
    badge: "Popular",
    badgeColor: "bg-pink-500",
  },
  {
    id: 2,
    name: "Hand Pipe Collection",
    category: "Glassware",
    description: "Artistic hand-blown glass pipes in various designs",
    badge: "New",
    badgeColor: "bg-pink-500",
  },
  {
    id: 3,
    name: "Bubblers",
    category: "Glassware",
    description: "Compact design with smooth filtration",
    badge: "",
  },
  {
    id: 4,
    name: "Dab Rigs",
    category: "Glassware",
    description: "Professional-grade concentrate rigs",
    badge: "",
  },
];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState("Glassware");

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Animated Gradient Background */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary via-background to-secondary/50 text-center relative overflow-hidden">
        {/* Floating Animated Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)]">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-foreground">
            Explore our extensive collection of premium smoke shop products
          </p>
        </div>
      </section>

      {/* Category Tabs and Products Grid */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30 scale-105"
                    : "bg-secondary text-secondary-foreground hover:bg-muted"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Category Description */}
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium glass pieces and accessories
            </p>
          </div>

          {/* Products Grid - Responsive design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="premium-card bg-card rounded-xl p-6 relative group hover:scale-105 transition-all duration-300 border-2 border-primary/20 hover:border-primary/50"
              >
                {/* Product Badge (if available) */}
                {product.badge && (
                  <Badge
                    className={`absolute top-4 right-4 ${product.badgeColor} text-white`}
                  >
                    {product.badge}
                  </Badge>
                )}
                
                {/* Product Image Placeholder */}
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-primary/20 rounded-full flex items-center justify-center group-hover:border-primary/40 transition-colors">
                    <span className="text-primary text-3xl">🔥</span>
                  </div>
                </div>
                
                {/* Product Name */}
                <h3 className="text-lg md:text-xl font-bold text-card-foreground mb-2">
                  {product.name}
                </h3>
                
                {/* Product Description */}
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                
                {/* Call to Action */}
                <p className="text-sm text-primary font-semibold">
                  Visit our store for pricing and availability
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
