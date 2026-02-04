import { useNavigate } from "react-router-dom";
import { MapPin, Flame, Droplets, Wind, Mountain, Sun, ChevronRight } from "lucide-react";
import type { ShivaTemplePlace } from "../types";
import { getDivinePlaceTempleRoute, type DivinePlaceCategory } from "@/constants/browserRoutes";

interface ShivaTempleCardProps {
  place: ShivaTemplePlace;
  index: number;
  showElement?: boolean;
  showSabha?: boolean;
  showCommemorates?: boolean;
  category?: DivinePlaceCategory;
}

const getElementIcon = (element?: string) => {
  if (!element) return <Flame className="w-5 h-5" />;
  if (element.includes("Water"))
    return <Droplets className="w-5 h-5 text-blue-500" />;
  if (element.includes("Fire"))
    return <Flame className="w-5 h-5 text-orange-500" />;
  if (element.includes("Air"))
    return <Wind className="w-5 h-5 text-cyan-500" />;
  if (element.includes("Earth"))
    return <Mountain className="w-5 h-5 text-green-600" />;
  if (element.includes("Sky"))
    return <Sun className="w-5 h-5 text-purple-500" />;
  return <Flame className="w-5 h-5" />;
};

export const ShivaTempleCard = ({
  place,
  index,
  showElement = false,
  showSabha = false,
  showCommemorates = false,
  category = "notable-shiva",
}: ShivaTempleCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const route = getDivinePlaceTempleRoute(category, place.name);
    navigate(route);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:border-indigo-300 transition-all cursor-pointer group"
      onClick={handleClick}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
            {showElement ? (
              getElementIcon(place.element)
            ) : (
              <span className="text-indigo-600 font-bold">{index + 1}</span>
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {place.name}
              </h3>
              <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            {place.element && showElement && (
              <span className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full mt-1">
                {place.element}
              </span>
            )}
            {place.sabha && showSabha && (
              <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-700 text-xs rounded-full mt-1">
                {place.sabha}
              </span>
            )}
            {place.commemorates && showCommemorates && (
              <span className="inline-block px-2 py-0.5 bg-red-100 text-red-700 text-xs rounded-full mt-1">
                {place.commemorates}
              </span>
            )}
            {place.deity && (
              <p className="text-sm text-indigo-600 mt-1">
                Deity: {place.deity}
              </p>
            )}
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <MapPin className="w-3 h-3" />
              <span>
                {place.location}, {place.state}
              </span>
            </div>
            <p className="text-gray-600 mt-2 text-sm line-clamp-2">{place.description}</p>
            <div className="mt-2 text-indigo-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <span>View Details</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
