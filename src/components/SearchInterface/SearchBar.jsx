import { Search } from "lucide-react";
import { motion } from "framer-motion";

export function SearchBar({ value, onChange, isExpanded }) {
  return (
    <div
      className={`flex-grow flex items-center gap-3 px-3 py-4 transition-colors duration-300 ${
        isExpanded
          ? "bg-transparent"
          : "bg-white rounded-xl border border-gray-200/80 shadow-md py-2"
      }`}
    >
      <Search size={20} className="text-gray-400" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={isExpanded ? "" : "Searching is easier"}
        className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-400"
      />
      {isExpanded && value && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => onChange("")}
          className="text-sm text-gray-600 font-medium hover:text-gray-900"
        >
          Clear
        </motion.button>
      )}
      {!isExpanded && (
        <div className="text-xs text-gray-500 bg-gray-100 border border-gray-200 rounded-md px-2 py-1">
          s
        </div>
      )}
    </div>
  );
}
