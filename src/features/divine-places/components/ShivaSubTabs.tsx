import type { ShivaSubTab, ShivaSubTabConfig } from "../types";

interface ShivaSubTabsProps {
  tabs: ShivaSubTabConfig[];
  activeTab: ShivaSubTab;
  onTabChange: (tab: ShivaSubTab) => void;
}

export const ShivaSubTabs = ({
  tabs,
  activeTab,
  onTabChange,
}: ShivaSubTabsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === tab.id
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 hover:bg-indigo-50"
          }`}
        >
          {tab.label}
          <span
            className={`ml-2 px-1.5 py-0.5 rounded text-xs ${
              activeTab === tab.id ? "bg-white/20" : "bg-gray-200"
            }`}
          >
            {tab.count}
          </span>
        </button>
      ))}
    </div>
  );
};
