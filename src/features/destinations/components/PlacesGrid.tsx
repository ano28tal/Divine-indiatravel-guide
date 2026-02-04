import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Clock, Heart, ChevronRight } from "lucide-react";
import type { District, State } from "@/features/destinations/types/destinations";
import { getTempleRoute } from "@/constants/browserRoutes";

interface PlacesGridProps {
  selectedDistrict: District;
  selectedState?: State | null;
}

const PlacesGrid = ({ selectedDistrict, selectedState }: PlacesGridProps) => {
  const navigate = useNavigate();

  const handleTempleClick = (templeName: string) => {
    if (selectedState) {
      const route = getTempleRoute(
        selectedState.name,
        selectedDistrict.name,
        templeName
      );
      navigate(route);
    }
  };

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold text-foreground mb-2">
          {selectedDistrict.name}
        </h3>
        <p className="text-muted-foreground">
          Sacred destinations and their divine stories
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedDistrict.places.map((place, placeIdx) => (
          <Card
            key={placeIdx}
            className="bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
            style={{ animationDelay: `${placeIdx * 0.1}s` }}
            onClick={() => handleTempleClick(place.name)}
          >
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="p-2 rounded-lg bg-gradient-accent group-hover:scale-110 transition-transform">
                  <Heart className="w-5 h-5 text-primary-foreground" />
                </div>
                <Badge
                  variant="outline"
                  className="text-xs border-primary text-primary"
                >
                  Sacred Site
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
                <span>{place.name}</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 rounded-lg bg-muted/50 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <h4 className="font-semibold text-sm text-secondary">
                    Historical Background
                  </h4>
                </div>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {place.history}
                </CardDescription>
              </div>
              <div className="p-4 rounded-lg bg-gradient-accent/10 border border-accent/20">
                <h4 className="font-semibold text-sm text-accent mb-2 flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
                  Spiritual Significance
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {place.significance}
                </p>
              </div>
              <div className="flex items-center justify-center pt-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>View Details</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PlacesGrid;
