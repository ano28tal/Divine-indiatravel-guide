import type { TempleDetails } from "../../types/templeDetails";
import TempleDetailsHero from "../TempleDetailsHero";
import TempleInfo from "../TempleInfo";
import TempleAddress from "../TempleAddress";
import TempleMap from "../TempleMap";
import TempleGallery from "../TempleGallery";
import { RecommendedPlaces } from "../RecommendedPlaces";

interface TempleDetailsContentProps {
  temple: TempleDetails;
}

const TempleDetailsContent = ({ temple }: TempleDetailsContentProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <TempleDetailsHero temple={temple} />

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <TempleInfo temple={temple} />
          </div>

          {/* Right Column - Address, Map & Gallery */}
          <div className="space-y-6">
            <TempleAddress temple={temple} />
            <TempleMap temple={temple} />
            <TempleGallery temple={temple} />
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">
            Nearby Recommendations
          </h2>
          <RecommendedPlaces temple={temple} />
        </div>
      </div>
    </div>
  );
};

export default TempleDetailsContent;
