import type {
  ShivaSubTab,
  ShivaSubTabConfig,
  ShivaTemplePlace,
} from "../types";
import { ShivaSubTabs } from "./ShivaSubTabs";
import { ShivaTempleCard } from "./ShivaTempleCard";
import { TabInfoBox } from "./TabInfoBox";
import { divinePlacesPageContent } from "../constants";
import type { DivinePlaceCategory } from "@/constants/browserRoutes";

interface ShivaTemplesTabProps {
  shivaSubTab: ShivaSubTab;
  shivaSubTabs: ShivaSubTabConfig[];
  onSubTabChange: (tab: ShivaSubTab) => void;
  filteredPanchaBhuta: ShivaTemplePlace[];
  filteredPancharama: ShivaTemplePlace[];
  filteredPanchaSabhai: ShivaTemplePlace[];
  filteredAshtaVeeratta: ShivaTemplePlace[];
  filteredNotableTemples: ShivaTemplePlace[];
}

export const ShivaTemplesTab = ({
  shivaSubTab,
  shivaSubTabs,
  onSubTabChange,
  filteredPanchaBhuta,
  filteredPancharama,
  filteredPanchaSabhai,
  filteredAshtaVeeratta,
  filteredNotableTemples,
}: ShivaTemplesTabProps) => {
  const {
    tabs,
    shivaSubTabs: subTabContent,
    emptyStates,
  } = divinePlacesPageContent;

  const renderTemples = (
    temples: ShivaTemplePlace[],
    category: DivinePlaceCategory,
    showElement = false,
    showSabha = false,
    showCommemorates = false
  ) => {
    if (temples.length === 0) {
      return (
        <div className="col-span-3 text-center py-12">
          <p className="text-gray-500">{emptyStates.temples}</p>
        </div>
      );
    }
    return temples.map((place, idx) => (
      <ShivaTempleCard
        key={place.name}
        place={place}
        index={idx}
        showElement={showElement}
        showSabha={showSabha}
        showCommemorates={showCommemorates}
        category={category}
      />
    ));
  };

  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">
          {tabs.shivatemples.title}
        </h2>
        <p className="text-gray-600 mt-2">{tabs.shivatemples.description}</p>
      </div>

      <ShivaSubTabs
        tabs={shivaSubTabs}
        activeTab={shivaSubTab}
        onTabChange={onSubTabChange}
      />

      {/* Pancha Bhuta Sthalams */}
      {shivaSubTab === "pancha-bhuta" && (
        <div>
          <TabInfoBox {...subTabContent["pancha-bhuta"]} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderTemples(filteredPanchaBhuta, "pancha-bhuta", true, false, false)}
          </div>
        </div>
      )}

      {/* Pancharama Kshetras */}
      {shivaSubTab === "pancharama" && (
        <div>
          <TabInfoBox {...subTabContent["pancharama"]} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderTemples(filteredPancharama, "pancharama", false, false, false)}
          </div>
        </div>
      )}

      {/* Pancha Sabhai */}
      {shivaSubTab === "pancha-sabhai" && (
        <div>
          <TabInfoBox {...subTabContent["pancha-sabhai"]} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {renderTemples(filteredPanchaSabhai, "pancha-sabhai", false, true, false)}
          </div>
        </div>
      )}

      {/* Ashta Veeratta */}
      {shivaSubTab === "ashta-veeratta" && (
        <div>
          <TabInfoBox {...subTabContent["ashta-veeratta"]} />
          <div className="grid md:grid-cols-2 gap-6">
            {renderTemples(
              filteredAshtaVeeratta,
              "ashta-veeratta",
              false,
              false,
              true
            )}
          </div>
        </div>
      )}

      {/* Notable Temples */}
      {shivaSubTab === "notable" && (
        <div>
          <TabInfoBox {...subTabContent["notable"]} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {renderTemples(filteredNotableTemples, "notable-shiva", false, false, false)}
          </div>
        </div>
      )}
    </div>
  );
};
