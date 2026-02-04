import { useNavigate } from "react-router-dom";
import { MapPin, ChevronRight } from "lucide-react";
import type { JyotirlingaPlace } from "../types";
import { getDivinePlaceTempleRoute } from "@/constants/browserRoutes";

interface JyotirlingaCardProps {
  place: JyotirlingaPlace;
  index: number;
}

export const JyotirlingaCard = ({ place, index }: JyotirlingaCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const route = getDivinePlaceTempleRoute("jyotirlinga", place.name);
    navigate(route);
  };

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl hover:border-indigo-300 transition-all cursor-pointer group"
      onClick={handleClick}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold group-hover:bg-indigo-200 transition-colors">
            {index + 1}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                {place.name}
              </h3>
              <ChevronRight className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
              <MapPin className="w-3 h-3" />
              <span>
                {place.location}, {place.state}
              </span>
            </div>
            <p className="text-gray-600 mt-3 line-clamp-2">{place.description}</p>
            <div className="mt-3 text-indigo-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
              <span>View Details</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
