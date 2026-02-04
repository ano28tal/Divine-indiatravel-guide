import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components/ui/card";
import { BookOpen, History, Sparkles } from "lucide-react";
import type { TempleDetails } from "../types/templeDetails";

interface TempleInfoProps {
  temple: TempleDetails;
}

const TempleInfo = ({ temple }: TempleInfoProps) => {
  return (
    <div className="space-y-6">
      {/* About Section */}
      <Card className="bg-gradient-card border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <BookOpen className="w-5 h-5 text-primary" />
            About the Temple
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {temple.about}
          </p>
        </CardContent>
      </Card>

      {/* History Section */}
      <Card className="bg-gradient-card border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <History className="w-5 h-5 text-secondary" />
            Historical Background
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {temple.history}
          </p>
        </CardContent>
      </Card>

      {/* Significance Section */}
      <Card className="bg-gradient-card border-border shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="w-5 h-5 text-accent" />
            Spiritual Significance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground leading-relaxed">
            {temple.significance}
          </p>
        </CardContent>
      </Card>

      {/* Nearby Attractions */}
      {temple.nearbyAttractions && temple.nearbyAttractions.length > 0 && (
        <Card className="bg-gradient-card border-border shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl">Nearby Attractions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {temple.nearbyAttractions.map((attraction, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                >
                  {attraction}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TempleInfo;
