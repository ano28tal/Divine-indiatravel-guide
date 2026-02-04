import { useState, useMemo, useCallback } from "react";
import type {
  TabType,
  ShivaSubTab,
  UseDivinePlacesReturn,
  ShivaTemplePlace,
  Deity,
} from "../types";
import {
  deities,
  jyotirlingas,
  shaktiPeethas,
  panchaBhutaSthalams,
  pancharamaKshetras,
  panchaSabhai,
  ashtaVeerattaTemples,
  notableShivaTemples,
  searchDivinePlaces,
} from "../types";

export const useDivinePlaces = (): UseDivinePlacesReturn => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<TabType>("deities");
  const [shivaSubTab, setShivaSubTab] = useState<ShivaSubTab>("pancha-bhuta");
  const [expandedDeity, setExpandedDeity] = useState<string | null>(null);
  const [selectedDeity, setSelectedDeity] = useState<Deity | null>(null);

  const toggleDeityExpand = useCallback((deityId: string) => {
    setExpandedDeity((prev) => (prev === deityId ? null : deityId));
  }, []);

  const handleDeitySelect = useCallback((deity: Deity) => {
    setSelectedDeity(deity);
  }, []);

  const handleBackToDeities = useCallback(() => {
    setSelectedDeity(null);
  }, []);

  // Reset selectedDeity when changing tabs
  const handleTabChange = useCallback((tab: TabType) => {
    setActiveTab(tab);
    setSelectedDeity(null);
  }, []);

  // Filter deities based on search
  const filteredDeities = useMemo(() => {
    if (!searchQuery) return deities;
    const query = searchQuery.toLowerCase();
    return deities.filter(
      (deity) =>
        deity.name.toLowerCase().includes(query) ||
        deity.names.some((n) => n.name.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Filter Jyotirlingas based on search
  const filteredJyotirlingas = useMemo(() => {
    if (!searchQuery) return jyotirlingas;
    const query = searchQuery.toLowerCase();
    return jyotirlingas.filter(
      (place) =>
        place.name.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query) ||
        place.state.toLowerCase().includes(query) ||
        "shiva".includes(query) ||
        "mahadev".includes(query) ||
        "jyotirlinga".includes(query)
    );
  }, [searchQuery]);

  // Filter Shakti Peethas based on search
  const filteredShaktiPeethas = useMemo(() => {
    if (!searchQuery) return shaktiPeethas;
    const query = searchQuery.toLowerCase();
    return shaktiPeethas.filter(
      (place) =>
        place.name.toLowerCase().includes(query) ||
        place.location.toLowerCase().includes(query) ||
        place.state.toLowerCase().includes(query) ||
        "durga".includes(query) ||
        "shakti".includes(query) ||
        "devi".includes(query) ||
        "peetha".includes(query)
    );
  }, [searchQuery]);

  // Filter Shiva temples helper
  const filterShivaTemples = useCallback(
    (temples: ShivaTemplePlace[]) => {
      if (!searchQuery) return temples;
      const query = searchQuery.toLowerCase();
      return temples.filter(
        (place) =>
          place.name.toLowerCase().includes(query) ||
          place.location.toLowerCase().includes(query) ||
          place.state.toLowerCase().includes(query) ||
          place.element?.toLowerCase().includes(query) ||
          place.sabha?.toLowerCase().includes(query) ||
          place.commemorates?.toLowerCase().includes(query)
      );
    },
    [searchQuery]
  );

  const filteredPanchaBhuta = useMemo(
    () => filterShivaTemples(panchaBhutaSthalams),
    [filterShivaTemples]
  );
  const filteredPancharama = useMemo(
    () => filterShivaTemples(pancharamaKshetras),
    [filterShivaTemples]
  );
  const filteredPanchaSabhai = useMemo(
    () => filterShivaTemples(panchaSabhai),
    [filterShivaTemples]
  );
  const filteredAshtaVeeratta = useMemo(
    () => filterShivaTemples(ashtaVeerattaTemples),
    [filterShivaTemples]
  );
  const filteredNotableTemples = useMemo(
    () => filterShivaTemples(notableShivaTemples),
    [filterShivaTemples]
  );

  // Search results for quick search
  const searchResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    return searchDivinePlaces(searchQuery).slice(0, 5);
  }, [searchQuery]);

  // Tab configurations
  const tabs = useMemo(
    () => [
      {
        id: "deities" as TabType,
        label: "God Names",
        icon: "🙏",
        count: filteredDeities.length,
      },
      {
        id: "jyotirlingas" as TabType,
        label: "12 Jyotirlingas",
        icon: "🔱",
        count: filteredJyotirlingas.length,
      },
      {
        id: "shivatemples" as TabType,
        label: "Shiva Temples",
        icon: "🕉️",
        count:
          panchaBhutaSthalams.length +
          pancharamaKshetras.length +
          panchaSabhai.length +
          ashtaVeerattaTemples.length +
          notableShivaTemples.length,
      },
      {
        id: "shaktipeethas" as TabType,
        label: "51 Shakti Peethas",
        icon: "🌺",
        count: filteredShaktiPeethas.length,
      },
    ],
    [
      filteredDeities.length,
      filteredJyotirlingas.length,
      filteredShaktiPeethas.length,
    ]
  );

  const shivaSubTabs = useMemo(
    () => [
      {
        id: "pancha-bhuta" as ShivaSubTab,
        label: "Pancha Bhuta (5 Elements)",
        count: filteredPanchaBhuta.length,
      },
      {
        id: "pancharama" as ShivaSubTab,
        label: "Pancharama Kshetras",
        count: filteredPancharama.length,
      },
      {
        id: "pancha-sabhai" as ShivaSubTab,
        label: "Pancha Sabhai (Dance)",
        count: filteredPanchaSabhai.length,
      },
      {
        id: "ashta-veeratta" as ShivaSubTab,
        label: "Ashta Veeratta (8 Acts)",
        count: filteredAshtaVeeratta.length,
      },
      {
        id: "notable" as ShivaSubTab,
        label: "Notable Temples",
        count: filteredNotableTemples.length,
      },
    ],
    [
      filteredPanchaBhuta.length,
      filteredPancharama.length,
      filteredPanchaSabhai.length,
      filteredAshtaVeeratta.length,
      filteredNotableTemples.length,
    ]
  );

  return {
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab: handleTabChange,
    shivaSubTab,
    setShivaSubTab,
    expandedDeity,
    toggleDeityExpand,
    selectedDeity,
    handleDeitySelect,
    handleBackToDeities,
    filteredDeities,
    filteredJyotirlingas,
    filteredShaktiPeethas,
    filteredPanchaBhuta,
    filteredPancharama,
    filteredPanchaSabhai,
    filteredAshtaVeeratta,
    filteredNotableTemples,
    searchResults,
    tabs,
    shivaSubTabs,
  };
};
