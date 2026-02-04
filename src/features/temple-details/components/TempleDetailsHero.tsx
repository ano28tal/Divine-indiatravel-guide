import { Clock, Ticket, Calendar, Shirt } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import type { TempleDetails } from "../types/templeDetails";

interface TempleDetailsHeroProps {
  temple: TempleDetails;
}

const TempleDetailsHero = ({ temple }: TempleDetailsHeroProps) => {
  const mainImage = temple.images[0];

  return (
    <div className="relative">
      {/* Hero Image */}
      <div className="relative h-[750px] md:h-[850px]">
        <img
          src={mainImage?.url}
          alt={mainImage?.alt || temple.name}
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

        {/* Temple Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <Badge className="mb-3 bg-primary/90">Sacred Temple</Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2">
            {temple.name}
          </h1>
          <p className="text-white/80 text-lg">
            {temple.address.district}, {temple.address.state}
          </p>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-gradient-card border-b border-border">
        <div className="max-w-[1400px] mx-auto px-4 py-4">
          <div className="flex flex-wrap gap-4 md:gap-8 justify-center md:justify-start">
            {temple.timings && (
              <div className="flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Timings:</span>
                <span className="font-medium">{temple.timings}</span>
              </div>
            )}
            {temple.entryFee && (
              <div className="flex items-center gap-2 text-sm">
                <Ticket className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Entry:</span>
                <span className="font-medium">{temple.entryFee}</span>
              </div>
            )}
            {temple.bestTimeToVisit && (
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Best Time:</span>
                <span className="font-medium">{temple.bestTimeToVisit}</span>
              </div>
            )}
            {temple.dressCode && (
              <div className="flex items-center gap-2 text-sm">
                <Shirt className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">Dress Code:</span>
                <span className="font-medium truncate max-w-[200px]">
                  {temple.dressCode}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempleDetailsHero;
