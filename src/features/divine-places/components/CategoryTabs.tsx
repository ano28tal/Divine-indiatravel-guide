import type { TabType, TabConfig } from "../types";

interface CategoryTabsProps {
  tabs: TabConfig[];
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const CategoryTabs = ({
  tabs,
  activeTab,
  onTabChange,
}: CategoryTabsProps) => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 mt-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 md:px-6 py-3 rounded-xl font-medium transition-all ${
              activeTab === tab.id
                ? "bg-primary text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            <span className="mr-2">{tab.icon}</span>
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
            <span
              className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeTab === tab.id ? "bg-white/20" : "bg-gray-200"
              }`}
            >
              {tab.count}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
