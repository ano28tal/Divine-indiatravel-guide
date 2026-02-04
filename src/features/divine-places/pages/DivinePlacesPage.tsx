import Navigation from "@/shared/components/layout/Navigation";
import Footer from "@/shared/components/layout/Footer";
import {
  DivinePlacesHero,
  SearchSection,
  CategoryTabs,
  DeitiesGrid,
  DeityTemplesGrid,
  JyotirlingasTab,
  ShaktiPeethasTab,
  ShivaTemplesTab,
} from "../components";
import { useDivinePlaces, useDivinePlacesNavigation } from "../hooks";

const DivinePlacesPage = () => {
  const { selectedDeity } = useDivinePlacesNavigation();

  const {
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    shivaSubTab,
    setShivaSubTab,
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
  } = useDivinePlaces();

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Navigation />

      <DivinePlacesHero />

      <SearchSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchResults={searchResults}
      />

      <CategoryTabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-4 py-12">
        {activeTab === "deities" && (
          <>
            {selectedDeity ? (
              <DeityTemplesGrid deity={selectedDeity} />
            ) : (
              <DeitiesGrid deities={filteredDeities} />
            )}
          </>
        )}

        {activeTab === "jyotirlingas" && (
          <JyotirlingasTab places={filteredJyotirlingas} />
        )}

        {activeTab === "shivatemples" && (
          <ShivaTemplesTab
            shivaSubTab={shivaSubTab}
            shivaSubTabs={shivaSubTabs}
            onSubTabChange={setShivaSubTab}
            filteredPanchaBhuta={filteredPanchaBhuta}
            filteredPancharama={filteredPancharama}
            filteredPanchaSabhai={filteredPanchaSabhai}
            filteredAshtaVeeratta={filteredAshtaVeeratta}
            filteredNotableTemples={filteredNotableTemples}
          />
        )}

        {activeTab === "shaktipeethas" && (
          <ShaktiPeethasTab places={filteredShaktiPeethas} />
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DivinePlacesPage;
