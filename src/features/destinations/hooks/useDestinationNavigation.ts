import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { State, District, indianStates } from "@/features/destinations/types/destinations";
import {
  browserRoutes,
  getStateRoute,
  getDistrictRoute,
} from "@/constants/browserRoutes";

// Helper to convert URL slug back to name
const slugToName = (slug: string): string =>
  decodeURIComponent(slug).replace(/-/g, " ");

// Helper to find state by slug
const findStateBySlug = (slug: string): State | null => {
  const name = slugToName(slug).toLowerCase();
  return indianStates.find((s) => s.name.toLowerCase() === name) || null;
};

// Helper to find district by slug within a state
const findDistrictBySlug = (state: State, slug: string): District | null => {
  const name = slugToName(slug).toLowerCase();
  return state.districts.find((d) => d.name.toLowerCase() === name) || null;
};

export const useDestinationNavigation = () => {
  const { stateName, districtName } = useParams<{
    stateName?: string;
    districtName?: string;
  }>();
  const navigate = useNavigate();

  const selectedState = useMemo(() => {
    if (!stateName) return null;
    return findStateBySlug(stateName);
  }, [stateName]);

  const selectedDistrict = useMemo(() => {
    if (!selectedState || !districtName) return null;
    return findDistrictBySlug(selectedState, districtName);
  }, [selectedState, districtName]);

  const handleStateSelect = (state: State) => {
    navigate(getStateRoute(state.name));
  };

  const handleDistrictSelect = (district: District) => {
    if (selectedState) {
      navigate(getDistrictRoute(selectedState.name, district.name));
    }
  };

  const handleBack = () => {
    if (selectedDistrict && selectedState) {
      navigate(getStateRoute(selectedState.name));
    } else {
      navigate(browserRoutes.destinations);
    }
  };

  return {
    selectedState,
    selectedDistrict,
    handleStateSelect,
    handleDistrictSelect,
    handleBack,
  };
};
