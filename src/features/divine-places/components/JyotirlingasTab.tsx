import type { JyotirlingaPlace } from "../types";
import { JyotirlingaCard } from "./JyotirlingaCard";
import { divinePlacesPageContent } from "../constants";
import { jyotirlingas } from "../constants";

interface JyotirlingasTabProps {
  places: JyotirlingaPlace[];
}

export const JyotirlingasTab = ({ places }: JyotirlingasTabProps) => {
  const { tabs, emptyStates } = divinePlacesPageContent;

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {tabs.jyotirlingas.title}
        </h2>
        <p className="text-gray-600 mt-2">{tabs.jyotirlingas.description}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {places.length === 0 ? (
          <div className="col-span-2 text-center py-12">
            <p className="text-gray-500">{emptyStates.jyotirlingas}</p>
          </div>
        ) : (
          places.map((place) => (
            <JyotirlingaCard
              key={place.name}
              place={place}
              index={jyotirlingas.indexOf(place)}
            />
          ))
        )}
      </div>
    </div>
  );
};
