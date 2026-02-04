import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { MapPin, ChevronRight, Heart } from "lucide-react";
import type { Deity, SacredPlace } from "../types";
import { getDivinePlaceTempleRoute } from "@/constants/browserRoutes";

interface DeityTemplesGridProps {
  deity: Deity;
}

export const DeityTemplesGrid = ({ deity }: DeityTemplesGridProps) => {
  const navigate = useNavigate();

  const handleTempleClick = (temple: SacredPlace) => {
    const route = getDivinePlaceTempleRoute(deity.name, temple.name);
    navigate(route);
  };

  return (
    <div className="animate-fade-in">
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="text-5xl mb-4 block">{deity.icon}</span>
        <h3 className="text-3xl font-bold text-foreground mb-2">
          {deity.name} Temples
        </h3>
        <p className="text-muted-foreground">
          Sacred destinations dedicated to {deity.name}
        </p>
      </div>

      {/* Divine Names Section */}
      <div className="mb-8 p-4 bg-muted/30 rounded-lg border border-border">
        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
          <span className="text-lg">🙏</span>
          Divine Names of {deity.name}
        </h4>
        <div className="flex flex-wrap gap-2">
          {deity.names.map((name, idx) => (
            <Badge
              key={idx}
              variant="secondary"
              className="text-sm py-1 px-3"
            >
              {name.name}
              {name.meaning && (
                <span className="text-muted-foreground ml-1">
                  ({name.meaning})
                </span>
              )}
            </Badge>
          ))}
        </div>
      </div>

      {/* Temples Grid */}
      {deity.sacredPlaces.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No temples listed for {deity.name} yet.
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deity.sacredPlaces.map((temple, idx) => (
            <Card
              key={idx}
              className="bg-gradient-card border-border shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 group cursor-pointer"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => handleTempleClick(temple)}
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
                    Sacred Temple
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
                  <span>{temple.name}</span>
                  <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>{temple.location}, {temple.state}</span>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border">
                  <CardDescription className="text-sm leading-relaxed line-clamp-3">
                    {temple.description}
                  </CardDescription>
                </div>
                <div className="flex items-center justify-center pt-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View Details</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
