import { Settings } from "lucide-react";

const TabButton = ({ label, count, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-3 py-1 rounded-md text-sm flex items-center gap-2 transition-colors ${
      isActive
        ? "bg-gray-100 text-gray-800 font-semibold"
        : "text-gray-500 hover:bg-gray-100/50"
    }`}
  >
    {label}
    <span
      className={`px-2 py-0.5 rounded-full text-xs ${
        isActive ? "bg-white text-gray-700" : "bg-gray-100 text-gray-600"
      }`}
    >
      {count}
    </span>
  </button>
);

export function FilterTabs({ 
  activeTab, 
  onTabChange, 
  counts, 
  tabs, 
  isFilterMenuOpen, 
  onFilterMenuToggle, 
  settingsButtonRef, 
  filterMenuRef, 
  filterMenu 
}) {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pt-4 pb-3">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            count={counts[tab.key]}
            isActive={activeTab === tab.key}
            onClick={() => onTabChange(tab.key)}
          />
        ))}
      </div>
      <div className="relative">
        <button
          ref={settingsButtonRef}
          onClick={onFilterMenuToggle}
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-md relative"
        >
          <Settings size={20} />
        </button>
        {filterMenu && (
          <div ref={filterMenuRef}>
            {filterMenu}
          </div>
        )}
      </div>
    </div>
  );
}
