import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { MapPin } from "lucide-react";
import { indianStates } from "@/features/destinations/types/destinations";
import { getStateRoute } from "@/constants/browserRoutes";

const StatesGrid = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
      {indianStates.map((state, idx) => (
        <Link
          key={state.name}
          to={getStateRoute(state.name)}
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          <Card className="h-full bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <MapPin className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <Badge variant="outline" className="text-xs">
                  {state.districts.length} District
                  {state.districts.length > 1 ? "s" : ""}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors">
                {state.name}
              </CardTitle>
              <CardDescription>
                Click to explore sacred destinations
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default StatesGrid;
