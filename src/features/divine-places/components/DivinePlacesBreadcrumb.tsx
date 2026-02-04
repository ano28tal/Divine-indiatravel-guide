import { ChevronRight } from "lucide-react";
import type { Deity } from "../types";

interface DivinePlacesBreadcrumbProps {
  selectedDeity: Deity | null;
  onBackToDeities: () => void;
}

export const DivinePlacesBreadcrumb = ({
  selectedDeity,
  onBackToDeities,
}: DivinePlacesBreadcrumbProps) => {
  if (!selectedDeity) {
    return null;
  }

  return (
    <nav
      className="mb-8 flex items-center gap-2 animate-fade-in"
      aria-label="Breadcrumb"
    >
      <button
        onClick={onBackToDeities}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        All Deities
      </button>
      <ChevronRight className="w-4 h-4 text-muted-foreground" />
      <span className="text-sm text-foreground font-medium flex items-center gap-2">
        <span>{selectedDeity.icon}</span>
        {selectedDeity.name}
      </span>
    </nav>
  );
};
