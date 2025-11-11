import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Fish } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Fish Catalog", path: "/catalog" },
    { name: "For Buyers", path: "/buyers" },
    { name: "Enquiry", path: "/enquiry" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Fish className="h-8 w-8 text-primary group-hover:text-secondary transition-colors" />
            <span className="text-xl font-bold text-foreground">RS Fisheries</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive(link.path)
                    ? "text-primary bg-muted"
                    : "text-foreground hover:text-primary hover:bg-muted/50"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/login">
              <Button variant="outline" size="sm" className="ml-4">
                Staff Login
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive(link.path)
                      ? "text-primary bg-muted"
                      : "text-foreground hover:text-primary hover:bg-muted/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/login" onClick={() => setIsOpen(false)}>
                <Button variant="outline" size="sm" className="w-full">
                  Staff Login
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
