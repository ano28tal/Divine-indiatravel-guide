import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type {
  State,
  District,
} from "@/features/destinations/types/destinations";
import { browserRoutes, getStateRoute } from "@/constants/browserRoutes";

interface BreadcrumbNavProps {
  selectedState: State | null;
  selectedDistrict: District | null;
}

const BreadcrumbNav = ({
  selectedState,
  selectedDistrict,
}: BreadcrumbNavProps) => {
  if (!selectedState && !selectedDistrict) {
    return null;
  }

  return (
    <nav className="mb-8 flex items-center gap-2 animate-fade-in" aria-label="Breadcrumb">
      <Link
        to={browserRoutes.destinations}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        All States
      </Link>
      {selectedState && (
        <>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          {selectedDistrict ? (
            <Link
              to={getStateRoute(selectedState.name)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {selectedState.name}
            </Link>
          ) : (
            <span className="text-sm text-foreground font-medium">
              {selectedState.name}
            </span>
          )}
        </>
      )}
      {selectedDistrict && (
        <>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-sm text-foreground font-medium">
            {selectedDistrict.name}
          </span>
        </>
      )}
    </nav>
  );
};

export default BreadcrumbNav;
