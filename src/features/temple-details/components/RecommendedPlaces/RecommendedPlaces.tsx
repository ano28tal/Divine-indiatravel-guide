import { Flower2, UtensilsCrossed, GraduationCap } from "lucide-react";
import type { TempleDetails } from "../../types/templeDetails";
import RecommendedSection from "./RecommendedSection";

interface RecommendedPlacesProps {
  temple: TempleDetails;
}

const RecommendedPlaces = ({ temple }: RecommendedPlacesProps) => {
  return (
    <div className="space-y-6">
      <RecommendedSection
        title="Recommended Yoga Centers"
        icon={<Flower2 className="w-5 h-5 text-green-500" />}
        places={temple.yogaCenters}
        emptyMessage="No yoga centers listed for this location yet."
      />

      <RecommendedSection
        title="Food Centers & Prasadam"
        icon={<UtensilsCrossed className="w-5 h-5 text-orange-500" />}
        places={temple.foodCenters}
        emptyMessage="No food centers listed for this location yet."
      />

      <RecommendedSection
        title="Spiritual Teachers & Learning Centers"
        icon={<GraduationCap className="w-5 h-5 text-purple-500" />}
        places={temple.spiritualTeachers}
        emptyMessage="No spiritual learning centers listed for this location yet."
      />
    </div>
  );
};

export default RecommendedPlaces;
