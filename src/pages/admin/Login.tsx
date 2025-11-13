/**
 * Admin Login Page
 * 
 * Authentication page for admin panel access
 * Features:
 * - Simple username/password form
 * - Form validation
 * - Session-based authentication
 * - Animated gradient background
 * - Redirects to product management on success
 * 
 * Current Credentials (DEMO ONLY):
 * - Username: admin
 * - Password: admin123
 * 
 * TODO: Replace with proper authentication when backend is connected
 * When Lovable Cloud is enabled:
 * - Implement proper user authentication
 * - Use secure password hashing
 * - Add session management
 * - Implement role-based access control
 */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Lock } from "lucide-react";

const AdminLogin = () => {
  const navigate = useNavigate();
  
  // Form state
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // DEMO AUTHENTICATION - Replace with real authentication when backend is ready
    if (username === "admin" && password === "admin123") {
      // Store authentication status temporarily in sessionStorage
      sessionStorage.setItem("adminAuthenticated", "true");
      
      // Show success notification
      toast.success("Login successful! Welcome to admin panel.");
      
      // Redirect to product management page
      navigate("/admin/products");
    } else {
      // Show error notification
      toast.error("Invalid credentials! Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary via-background to-secondary/50 flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      {/* Login Card */}
      <div className="premium-card bg-card rounded-xl p-8 md:p-12 w-full max-w-md relative z-10 border-2 border-primary/20">
        {/* Header Section */}
        <div className="text-center mb-8">
          {/* Lock Icon */}
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Lock className="w-8 h-8 text-primary" />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-2">
            Admin Login
          </h1>
          <p className="text-sm md:text-base text-muted-foreground">
            Enter your credentials to access the admin panel
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-card-foreground mb-2"
            >
              Username
            </label>
            <Input
              id="username"
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Password Input */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-card-foreground mb-2"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            size="lg"
          >
            Sign In
          </Button>
        </form>

        {/* Demo Credentials Display (Remove in production) */}
        <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Demo Credentials:</strong><br />
            Username: admin | Password: admin123
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
