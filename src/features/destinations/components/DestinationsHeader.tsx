import { Badge } from "@/shared/components/ui/badge";
import { MapPin } from "lucide-react";

const DestinationsHeader = () => {
  return (
    <div className="text-center mb-16 animate-fade-in">
      <Badge className="mb-4 bg-secondary text-secondary-foreground shadow-soft">
        <MapPin className="w-3 h-3 mr-1" />
        Sacred Destinations
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
        Explore Divine India
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
        Journey through India's most revered spiritual destinations across all
        states
      </p>
    </div>
  );
};

export default DestinationsHeader;
