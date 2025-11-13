/**
 * Product Management Page (Admin Panel)
 * 
 * Admin interface for managing website products
 * Features:
 * - Authentication check (redirects to login if not authenticated)
 * - View all products in a responsive table
 * - Add new products with form modal
 * - Edit existing products
 * - Delete products with confirmation
 * - Logout functionality
 * 
 * Current Implementation:
 * - Uses React state (data is not persisted after page refresh)
 * - Simple session-based authentication
 * 
 * TODO: Connect to Lovable Cloud for persistence
 * When backend is enabled:
 * - Replace useState with database queries
 * - Implement proper CRUD API operations
 * - Add image upload functionality
 * - Implement pagination for large datasets
 * - Add search and filter capabilities
 * - Sync with main Products page
 */

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil, Trash2, Plus, LogOut, Package } from "lucide-react";

// Product type definition for TypeScript
interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
}

const ProductManagement = () => {
  const navigate = useNavigate();
  
  // Check authentication on component mount
  useEffect(() => {
    const isAuthenticated = sessionStorage.getItem("adminAuthenticated");
    if (!isAuthenticated) {
      toast.error("Please login to access admin panel");
      navigate("/admin/login");
    }
  }, [navigate]);

  // Initial demo products (will be replaced by database)
  const initialProducts: Product[] = [
    {
      id: 1,
      name: "Premium Water Pipe",
      description: "High-quality borosilicate glass with percolator",
      category: "Glassware",
    },
    {
      id: 2,
      name: "Hand Pipe Collection",
      description: "Artistic hand-blown glass pipes in various designs",
      category: "Glassware",
    },
    {
      id: 3,
      name: "Vaporizers",
      description: "Latest vaping devices and accessories",
      category: "Electronics",
    },
  ];

  // Component state management
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
  });

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("adminAuthenticated");
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  // Open dialog for adding new product
  const handleAddNew = () => {
    setEditingProduct(null);
    setFormData({ name: "", description: "", category: "" });
    setIsDialogOpen(true);
  };

  // Open dialog for editing existing product
  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      description: product.description,
      category: product.category,
    });
    setIsDialogOpen(true);
  };

  // Delete product
  const handleDelete = (id: number) => {
    // TODO: Replace with database delete when backend is connected
    setProducts(products.filter((p) => p.id !== id));
    toast.success("Product deleted successfully");
  };

  // Save product (add new or update existing)
  const handleSave = () => {
    // Validate form data
    if (!formData.name || !formData.description || !formData.category) {
      toast.error("Please fill in all fields");
      return;
    }

    if (editingProduct) {
      // Update existing product
      // TODO: Replace with database update when backend is connected
      setProducts(
        products.map((p) =>
          p.id === editingProduct.id ? { ...p, ...formData } : p
        )
      );
      toast.success("Product updated successfully");
    } else {
      // Add new product
      // TODO: Replace with database insert when backend is connected
      const newProduct: Product = {
        id: Math.max(...products.map((p) => p.id), 0) + 1,
        ...formData,
      };
      setProducts([...products, newProduct]);
      toast.success("Product added successfully");
    }

    // Close dialog and reset form
    setIsDialogOpen(false);
    setFormData({ name: "", description: "", category: "" });
    setEditingProduct(null);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header Bar - Sticky */}
      <div className="bg-nav-bg/95 backdrop-blur-sm border-b border-border/20 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Title with Icon */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Package className="w-6 h-6 text-primary-foreground" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Product Management
              </h1>
            </div>

            {/* Logout Button */}
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="premium-card bg-card rounded-xl p-4 md:p-8 border-2 border-primary/20">
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-card-foreground">
              Products List ({products.length})
            </h2>

            {/* Add Product Dialog */}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  onClick={handleAddNew}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Product
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold text-primary">
                    {editingProduct ? "Edit Product" : "Add New Product"}
                  </DialogTitle>
                </DialogHeader>
                
                {/* Product Form */}
                <div className="space-y-4 py-4">
                  {/* Product Name Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                      Product Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g., Premium Glass Pipe"
                      required
                    />
                  </div>

                  {/* Category Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                      Category *
                    </label>
                    <Input
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      placeholder="e.g., Glassware, Vaporizers"
                      required
                    />
                  </div>

                  {/* Description Field */}
                  <div>
                    <label className="block text-sm font-medium mb-2 text-card-foreground">
                      Description *
                    </label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          description: e.target.value,
                        })
                      }
                      placeholder="Enter product description..."
                      rows={4}
                      required
                    />
                  </div>

                  {/* Save Button */}
                  <Button
                    onClick={handleSave}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {editingProduct ? "Update Product" : "Add Product"}
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Products Table - Responsive */}
          <div className="overflow-x-auto rounded-lg border border-border/20">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead className="text-primary font-bold">Name</TableHead>
                  <TableHead className="text-primary font-bold hidden md:table-cell">
                    Category
                  </TableHead>
                  <TableHead className="text-primary font-bold hidden lg:table-cell">
                    Description
                  </TableHead>
                  <TableHead className="text-primary font-bold text-right">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id} className="hover:bg-secondary/20">
                    <TableCell className="font-medium">
                      {product.name}
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-muted-foreground">
                      {product.category}
                    </TableCell>
                    <TableCell className="hidden lg:table-cell max-w-xs truncate text-muted-foreground">
                      {product.description}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        {/* Edit Button */}
                        <Button
                          onClick={() => handleEdit(product)}
                          variant="outline"
                          size="sm"
                          className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground"
                          title="Edit product"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        
                        {/* Delete Button */}
                        <Button
                          onClick={() => handleDelete(product.id)}
                          variant="outline"
                          size="sm"
                          className="border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                          title="Delete product"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Empty State */}
          {products.length === 0 && (
            <div className="text-center py-12">
              <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <p className="text-lg text-muted-foreground mb-2">
                No products yet
              </p>
              <p className="text-sm text-muted-foreground">
                Add your first product to get started!
              </p>
            </div>
          )}

          {/* Backend Connection Notice */}
          <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
            <p className="text-xs md:text-sm text-muted-foreground text-center">
              💡 <strong>Note:</strong> Changes are currently stored in browser session only.
              Enable Lovable Cloud to persist data across sessions and sync with the main website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductManagement;
