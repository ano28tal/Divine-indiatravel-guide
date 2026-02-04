import type { ShaktiPeethaPlace } from "../types";
import { ShaktiPeethaCard } from "./ShaktiPeethaCard";
import { divinePlacesPageContent } from "../constants";
import { shaktiPeethas } from "../constants";

interface ShaktiPeethasTabProps {
  places: ShaktiPeethaPlace[];
}

export const ShaktiPeethasTab = ({ places }: ShaktiPeethasTabProps) => {
  const { tabs, emptyStates } = divinePlacesPageContent;

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {tabs.shaktipeethas.title}
        </h2>
        <p className="text-gray-600 mt-2">{tabs.shaktipeethas.description}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {places.length === 0 ? (
          <div className="col-span-3 text-center py-12">
            <p className="text-gray-500">{emptyStates.shaktipeethas}</p>
          </div>
        ) : (
          places.map((place) => (
            <ShaktiPeethaCard
              key={place.name}
              place={place}
              index={shaktiPeethas.indexOf(place)}
            />
          ))
        )}
      </div>
    </div>
  );
};
