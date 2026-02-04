import { Link } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { Badge } from "@/shared/components/ui/badge";
import { ChevronRight } from "lucide-react";
import type { Deity } from "../types";
import { getDeityRoute } from "@/constants/browserRoutes";

interface DeitiesGridProps {
  deities: Deity[];
}

export const DeitiesGrid = ({ deities }: DeitiesGridProps) => {
  if (deities.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No deities found matching your search.</p>
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
      {deities.map((deity, idx) => (
        <Link
          key={deity.id}
          to={getDeityRoute(deity.name)}
          style={{ animationDelay: `${idx * 0.05}s` }}
        >
          <Card className="h-full bg-gradient-card border-border shadow-soft hover:shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <span className="text-3xl">{deity.icon}</span>
                <Badge variant="outline" className="text-xs">
                  {deity.sacredPlaces.length} Temple
                  {deity.sacredPlaces.length !== 1 ? "s" : ""}
                </Badge>
              </div>
              <CardTitle className="text-xl group-hover:text-primary transition-colors flex items-center justify-between">
                <span>{deity.name}</span>
                <ChevronRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
              </CardTitle>
              <CardDescription>
                {deity.names.length} divine names • Click to explore temples
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
};
