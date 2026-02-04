import { Link, useLocation } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import { MapPin, Sparkles, Home, Mail, Flame } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Sacred India
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2">
            <Button
              variant={isActive("/") ? "default" : "ghost"}
              asChild
              className={
                isActive("/")
                  ? "bg-gradient-accent text-primary-foreground"
                  : ""
              }
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button
              variant={isActive("/destinations") ? "default" : "ghost"}
              asChild
              className={
                isActive("/destinations")
                  ? "bg-gradient-accent text-primary-foreground"
                  : ""
              }
            >
              <Link to="/destinations">
                <MapPin className="w-4 h-4 mr-2" />
                Destinations
              </Link>
            </Button>
            <Button
              variant={isActive("/divine-places") ? "default" : "ghost"}
              asChild
              className={
                isActive("/divine-places")
                  ? "bg-gradient-accent text-primary-foreground"
                  : ""
              }
            >
              <Link to="/divine-places">
                <Flame className="w-4 h-4 mr-2" />
                Divine Places
              </Link>
            </Button>
            <Button
              variant={isActive("/contact") ? "default" : "ghost"}
              asChild
              className={
                isActive("/contact")
                  ? "bg-gradient-accent text-primary-foreground"
                  : ""
              }
            >
              <Link to="/contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
