import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp, MapPin, Sparkles, ChevronRight } from "lucide-react";
import type { Deity } from "../types";
import { divinePlacesPageContent } from "../constants";
import { getDivinePlaceTempleRoute } from "@/constants/browserRoutes";

interface DeityCardProps {
  deity: Deity;
  isExpanded: boolean;
  onToggle: () => void;
}

export const DeityCard = ({ deity, isExpanded, onToggle }: DeityCardProps) => {
  const { deityNotes } = divinePlacesPageContent;
  const navigate = useNavigate();

  const handlePlaceClick = (placeName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const route = getDivinePlaceTempleRoute("deity-temple", placeName);
    navigate(route);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <button
        onClick={onToggle}
        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">{deity.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-gray-800">{deity.name}</h3>
              <p className="text-sm text-gray-500">
                {deity.names.length} divine names
                {deity.sacredPlaces.length > 0 &&
                  ` | ${deity.sacredPlaces.length} sacred places`}
              </p>
            </div>
          </div>
          {isExpanded ? (
            <ChevronUp className="w-6 h-6 text-gray-400" />
          ) : (
            <ChevronDown className="w-6 h-6 text-gray-400" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="border-t border-gray-100">
          {/* Divine Names */}
          <div className="p-6 bg-gray-50">
            <h4 className="text-sm font-semibold text-gray-600 mb-3 uppercase tracking-wide">
              Divine Names
            </h4>
            <div className="flex flex-wrap gap-2">
              {deity.names.map((name, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ${deity.color} text-white`}
                  title={name.meaning}
                >
                  {name.name}
                </span>
              ))}
            </div>
          </div>

          {/* Sacred Places */}
          {deity.sacredPlaces.length > 0 && (
            <div className="p-6">
              <h4 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                Sacred Places
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                {deity.sacredPlaces.map((place, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-white rounded-lg border border-gray-200 hover:border-primary hover:shadow-md transition-all cursor-pointer group"
                    onClick={(e) => handlePlaceClick(place.name, e)}
                  >
                    <div className="flex items-center justify-between">
                      <h5 className="font-semibold text-gray-800 group-hover:text-primary transition-colors">
                        {place.name}
                      </h5>
                      <ChevronRight className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="flex items-center gap-1 text-sm text-gray-500 mt-1">
                      <MapPin className="w-3 h-3" />
                      <span>
                        {place.location}, {place.state}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                      {place.description}
                    </p>
                    <div className="mt-2 text-primary text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <span>View Details</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Special note for Shiva */}
          {deity.id === "shiva" && (
            <div
              className={`p-6 ${deityNotes.shiva.bgClass} border-t ${deityNotes.shiva.borderClass}`}
            >
              <p className={`text-sm ${deityNotes.shiva.textClass}`}>
                <Sparkles className="w-4 h-4 inline mr-1" />
                View the <strong>12 Jyotirlingas</strong> and{" "}
                <strong>Shiva Temples</strong> tabs for Lord Shiva's sacred
                temples including Pancha Bhuta, Pancharama, Pancha Sabhai, and
                more!
              </p>
            </div>
          )}

          {/* Special note for Shakti */}
          {deity.id === "shakti" && (
            <div
              className={`p-6 ${deityNotes.shakti.bgClass} border-t ${deityNotes.shakti.borderClass}`}
            >
              <p className={`text-sm ${deityNotes.shakti.textClass}`}>
                <Sparkles className="w-4 h-4 inline mr-1" />
                View the <strong>51 Shakti Peethas</strong> tab for Goddess
                Shakti's most sacred temples
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
