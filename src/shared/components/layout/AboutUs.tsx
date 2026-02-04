import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { MapPin, Heart, Sparkles, Target, Users, Globe } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 bg-primary text-primary-foreground shadow-soft">
            <Heart className="w-3 h-3 mr-1" />
            About Us
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Your Guide to Sacred India
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are dedicated to helping you discover the spiritual and cultural
            richness of India through comprehensive information about sacred
            destinations.
          </p>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-6 h-6 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide authentic and comprehensive information about India's
                sacred destinations, making spiritual exploration accessible to
                everyone. We believe in preserving and sharing the rich cultural
                heritage and devotional significance of India's temples and holy
                places.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-6 h-6 text-secondary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To become the most trusted platform for spiritual travelers,
                combining ancient wisdom with modern technology. We aim to guide
                travelers to India's most divine destinations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            What We Offer
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="p-3 rounded-lg bg-gradient-accent w-fit mb-2">
                  <MapPin className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Sacred Destinations</CardTitle>
                <CardDescription>
                  Explore temples and holy places across all Indian states with
                  detailed historical backgrounds and spiritual significance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary w-fit mb-2">
                  <Heart className="w-6 h-6 text-primary-foreground" />
                </div>
                <CardTitle>Cultural Heritage</CardTitle>
                <CardDescription>
                  Learn about the rich traditions, rituals, and cultural
                  significance of India's spiritual sites and practices.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* Values */}
        <Card className="bg-muted/50 border-border">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-6 h-6 text-accent" />
              <CardTitle className="text-2xl">Our Values</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Authenticity
                </h4>
                <p className="text-sm text-muted-foreground">
                  We provide accurate, well-researched information about sacred
                  sites and spiritual practices.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary" />
                  Respect
                </h4>
                <p className="text-sm text-muted-foreground">
                  We honor all spiritual traditions and cultural practices with
                  deep reverence.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Guidance
                </h4>
                <p className="text-sm text-muted-foreground">
                  We offer comprehensive travel guidance rooted in deep cultural
                  knowledge.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  Accessibility
                </h4>
                <p className="text-sm text-muted-foreground">
                  We make spiritual exploration easy and accessible for
                  everyone.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutUs;
