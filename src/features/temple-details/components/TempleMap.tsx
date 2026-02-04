import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Map } from "lucide-react";
import type { TempleDetails } from "../types/templeDetails";

interface TempleMapProps {
  temple: TempleDetails;
}

const TempleMap = ({ temple }: TempleMapProps) => {
  const { coordinates, name } = temple;

  // Google Maps embed URL
  const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${coordinates.latitude},${coordinates.longitude}&zoom=15`;

  // Fallback to OpenStreetMap if Google Maps key is not available
  const osmEmbedUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${coordinates.longitude - 0.01},${coordinates.latitude - 0.01},${coordinates.longitude + 0.01},${coordinates.latitude + 0.01}&layer=mapnik&marker=${coordinates.latitude},${coordinates.longitude}`;

  return (
    <Card className="bg-gradient-card border-border shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <Map className="w-5 h-5 text-primary" />
          Road Map & Location
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden border border-border">
          <iframe
            title={`Map of ${name}`}
            src={osmEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">
          Click on the map to interact. Use the "Get Directions" button above for navigation.
        </p>
      </CardContent>
    </Card>
  );
};

export default TempleMap;
