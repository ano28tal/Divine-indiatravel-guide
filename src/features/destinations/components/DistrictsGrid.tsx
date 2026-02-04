import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { Heart } from "lucide-react";
import type { State } from "@/features/destinations/types/destinations";
import { getDistrictRoute } from "@/constants/browserRoutes";

interface DistrictsGridProps {
  selectedState: State;
}

const DistrictsGrid = ({ selectedState }: DistrictsGridProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-bold text-foreground mb-2">
          {selectedState.name}
        </h3>
        <p className="text-muted-foreground">
          Select a district to explore devotional places
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedState.districts.map((district, idx) => (
          <Link
            key={district.name}
            to={getDistrictRoute(selectedState.name, district.name)}
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <Card className="h-full bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Heart className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                  <Badge variant="outline" className="text-xs">
                    {district.places.length} Place
                    {district.places.length > 1 ? "s" : ""}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-secondary transition-colors">
                  {district.name}
                </CardTitle>
                <CardDescription>
                  Discover sacred sites and temples
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DistrictsGrid;
