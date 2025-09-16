
import { useState, useMemo, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings } from "lucide-react";

import { searchData } from "../../data/dummyData";
import { useDebounce } from "../../hooks/useDebounce";
import { SearchBar } from "./SearchBar";
import { FilterTabs } from "./FilterTabs";
import { FilterMenu } from "./FilterMenu";
import { SearchResultsList } from "./SearchResultsList";
import { SkeletonLoader } from "./SkeletonLoader";

const initialFilters = {
  files: true,
  people: true,
  chats: false,
  lists: false,
};

export function SearchInterface() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isFilterMenuOpen, setFilterMenuOpen] = useState(false);
  const [filters, setFilters] = useState(initialFilters);
  const [isLoading, setIsLoading] = useState(false);
  const filterMenuRef = useRef(null);
  const settingsButtonRef = useRef(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const isExpanded = searchTerm.length > 0;

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsLoading(true);
      // Simulate API call delay
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, [debouncedSearchTerm]);

  // Close filter menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isFilterMenuOpen &&
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target) &&
        settingsButtonRef.current &&
        !settingsButtonRef.current.contains(event.target)
      ) {
        setFilterMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isFilterMenuOpen]);

  const searchResults = useMemo(() => {
    if (!debouncedSearchTerm) return [];
    return searchData.filter((item) =>
      item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [debouncedSearchTerm]);

  const filteredResultsByTab = useMemo(() => {
    return searchResults.filter((item) => {
      if (activeTab === "all") return true;
      if (activeTab === "files")
        return item.type === "file" || item.type === "folder";
      if (activeTab === "people") return item.type === "person";
      // Add logic for chats/lists if data exists
      return true;
    });
  }, [searchResults, activeTab]);

  const counts = useMemo(() => {
    const all = searchResults.length;
    const files = searchResults.filter(
      (item) => item.type === "file" || item.type === "folder"
    ).length;
    const people = searchResults.filter(
      (item) => item.type === "person"
    ).length;
    return { all, files, people, chats: 0, lists: 0 };
  }, [searchResults]);

  const visibleTabs = useMemo(() => {
    const tabs = [{ key: "all", label: "All" }];
    if (filters.files) tabs.push({ key: "files", label: "Files" });
    if (filters.people) tabs.push({ key: "people", label: "People" });
    if (filters.chats) tabs.push({ key: "chats", label: "Chats" });
    if (filters.lists) tabs.push({ key: "lists", label: "Lists" });
    return tabs;
  }, [filters]);

  return (
    <motion.div
      layout
      transition={{
        duration: 0.3,
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
      className={`w-[640px] ${
        isExpanded
          ? "bg-white rounded-xl shadow-lg border border-gray-200/80 p-4"
          : ""
      }`}
    >
      <div className="flex items-center gap-2">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          isExpanded={isExpanded}
        />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto", transition: { delay: 0.1 } }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <FilterTabs
              activeTab={activeTab}
              onTabChange={setActiveTab}
              counts={counts}
              tabs={visibleTabs}
              isFilterMenuOpen={isFilterMenuOpen}
              onFilterMenuToggle={() => setFilterMenuOpen(!isFilterMenuOpen)}
              settingsButtonRef={settingsButtonRef}
              filterMenuRef={filterMenuRef}
              filterMenu={
                isFilterMenuOpen && (
                  <FilterMenu
                    filters={filters}
                    onFilterChange={setFilters}
                    onClose={() => setFilterMenuOpen(false)}
                  />
                )
              }
            />
            <div className="h-[400px] overflow-y-auto pr-2 mt-3">
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                <SearchResultsList
                  results={filteredResultsByTab}
                  searchTerm={debouncedSearchTerm}
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
