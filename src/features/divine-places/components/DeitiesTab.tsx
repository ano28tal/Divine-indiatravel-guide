import type { Deity } from "../types";
import { DeityCard } from "./DeityCard";
import { divinePlacesPageContent } from "../constants";

interface DeitiesTabProps {
  deities: Deity[];
  expandedDeity: string | null;
  onToggleDeity: (deityId: string) => void;
}

export const DeitiesTab = ({
  deities,
  expandedDeity,
  onToggleDeity,
}: DeitiesTabProps) => {
  const { emptyStates } = divinePlacesPageContent;

  return (
    <div className="space-y-4">
      {deities.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">{emptyStates.deities}</p>
        </div>
      ) : (
        deities.map((deity) => (
          <DeityCard
            key={deity.id}
            deity={deity}
            isExpanded={expandedDeity === deity.id}
            onToggle={() => onToggleDeity(deity.id)}
          />
        ))
      )}
    </div>
  );
};
