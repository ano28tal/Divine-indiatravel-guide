import { Link } from "react-router-dom";
import { Button } from "@/shared/components/ui/button";
import heroImage from "@/shared/assets/main page/hero-varanasi.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto animate-fade-in">
        <div className="inline-block mb-6 px-6 py-2 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30">
          <span className="text-accent-foreground font-medium">
            ✨ Journey Through Divine India
          </span>
        </div>
        <h1
          className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
          style={{ textShadow: "2px 4px 8px rgba(0, 0, 0, 0.5)" }}
        >
          Discover Sacred India
        </h1>
        <p
          className="text-xl md:text-2xl text-primary-foreground/95 mb-10 max-w-3xl mx-auto leading-relaxed"
          style={{ textShadow: "1px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Explore divine destinations, ancient temples, and spiritual heritage
          across all Indian states.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-accent hover:shadow-glow text-primary-foreground shadow-hover transition-all duration-300 hover:scale-105 font-semibold px-8"
            asChild
          >
            <Link to="/destinations">Explore Destinations</Link>
          </Button>
        </div>
        <div className="mt-8">
          <Button
            variant="ghost"
            className="text-primary-foreground/80 hover:text-primary-foreground"
            onClick={() => scrollToSection("about")}
          >
            Learn More About Us ↓
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float z-10">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
