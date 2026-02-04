import { Badge } from "@/shared/components/ui/badge";
import { MapPin, Star, Phone } from "lucide-react";
import type { RecommendedPlace } from "../../types/templeDetails";

interface RecommendedPlaceCardProps {
  place: RecommendedPlace;
}

const RecommendedPlaceCard = ({ place }: RecommendedPlaceCardProps) => {
  return (
    <div className="p-4 bg-muted/30 rounded-lg border border-border hover:border-primary/50 transition-colors">
      <div className="flex items-start justify-between mb-2">
        <h4 className="font-semibold text-foreground">{place.name}</h4>
        {place.rating && (
          <Badge variant="secondary" className="flex items-center gap-1">
            <Star className="w-3 h-3 fill-yellow-500 text-yellow-500" />
            {place.rating}
          </Badge>
        )}
      </div>
      <div className="space-y-1 text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="w-3 h-3" />
          <span>{place.address}</span>
        </div>
        <p className="text-muted-foreground">Distance: {place.distance}</p>
        {place.contact && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-3 h-3" />
            <span>{place.contact}</span>
          </div>
        )}
        {place.description && (
          <p className="text-muted-foreground mt-2">{place.description}</p>
        )}
      </div>
    </div>
  );
};

export default RecommendedPlaceCard;
