import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Button } from "@/shared/components/ui/button";
import { MapPin, Navigation, Copy, ExternalLink } from "lucide-react";
import type { TempleDetails } from "../types/templeDetails";

interface TempleAddressProps {
  temple: TempleDetails;
}

const TempleAddress = ({ temple }: TempleAddressProps) => {
  const { address, coordinates } = temple;

  const fullAddress = [
    address.street,
    address.landmark,
    address.city,
    address.district,
    address.state,
    address.pincode,
  ]
    .filter(Boolean)
    .join(", ");

  const googleMapsUrl = `https://www.google.com/maps?q=${coordinates.latitude},${coordinates.longitude}`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${coordinates.latitude},${coordinates.longitude}`;

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(fullAddress);
  };

  return (
    <Card className="bg-gradient-card border-border shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          <MapPin className="w-5 h-5 text-primary" />
          Temple Address
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Address Details */}
        <div className="p-4 bg-muted/50 rounded-lg">
          <p className="text-foreground font-medium mb-1">{address.street}</p>
          {address.landmark && (
            <p className="text-muted-foreground text-sm mb-1">
              Landmark: {address.landmark}
            </p>
          )}
          <p className="text-muted-foreground text-sm">
            {address.city}, {address.district}
          </p>
          <p className="text-muted-foreground text-sm">
            {address.state} - {address.pincode}
          </p>
        </div>

        {/* Coordinates */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Navigation className="w-4 h-4" />
          <span>
            Coordinates: {coordinates.latitude.toFixed(4)},{" "}
            {coordinates.longitude.toFixed(4)}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopyAddress}
            className="flex items-center gap-2"
          >
            <Copy className="w-4 h-4" />
            Copy Address
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex items-center gap-2"
          >
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              View on Maps
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="flex items-center gap-2"
          >
            <a href={directionsUrl} target="_blank" rel="noopener noreferrer">
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TempleAddress;
