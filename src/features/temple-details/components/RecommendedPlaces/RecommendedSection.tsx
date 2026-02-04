import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import type { RecommendedPlace } from "../../types/templeDetails";
import RecommendedPlaceCard from "./RecommendedPlaceCard";

interface RecommendedSectionProps {
  title: string;
  icon: React.ReactNode;
  places: RecommendedPlace[];
  emptyMessage: string;
}

const RecommendedSection = ({
  title,
  icon,
  places,
  emptyMessage,
}: RecommendedSectionProps) => {
  return (
    <Card className="bg-gradient-card border-border shadow-soft">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-xl">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {places.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2">
            {places.map((place, index) => (
              <RecommendedPlaceCard key={index} place={place} />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-4">
            {emptyMessage}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default RecommendedSection;
