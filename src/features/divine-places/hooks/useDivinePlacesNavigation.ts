import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { deities } from "../types/divinePlaces";
import type { Deity } from "../types/divinePlaces";

// Helper to convert URL slug back to name
const slugToName = (slug: string): string =>
  decodeURIComponent(slug).replace(/-/g, " ");

// Helper to find deity by slug
const findDeityBySlug = (slug: string): Deity | null => {
  const name = slugToName(slug).toLowerCase();
  return deities.find((d) => d.name.toLowerCase() === name) || null;
};

export const useDivinePlacesNavigation = () => {
  const { deityName } = useParams<{
    deityName?: string;
  }>();

  const selectedDeity = useMemo(() => {
    if (!deityName) return null;
    return findDeityBySlug(deityName);
  }, [deityName]);

  return {
    selectedDeity,
    deitySlug: deityName,
  };
};
