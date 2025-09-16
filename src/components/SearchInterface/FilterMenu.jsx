import { FileText, Users, MessageSquare, List } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Switch } from "../common/Switch";

export function FilterMenu({ filters, onFilterChange, onClose }) {
  const handleFilterChange = (key) => {
    onFilterChange((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -10, scale: 0.95 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className="absolute top-full right-0 mt-2 w-60 bg-white rounded-lg shadow-xl border border-gray-200/80 p-2 z-50"
      >
        <div className="flex flex-col">
          <Switch
            label="Files"
            icon={<FileText size={16} />}
            checked={filters.files}
            onChange={() => handleFilterChange("files")}
          />
          <Switch
            label="People"
            icon={<Users size={16} />}
            checked={filters.people}
            onChange={() => handleFilterChange("people")}
          />
          <Switch
            label="Chats"
            icon={<MessageSquare size={16} />}
            checked={filters.chats}
            onChange={() => handleFilterChange("chats")}
          />
          <Switch
            label="Lists"
            icon={<List size={16} />}
            checked={filters.lists}
            onChange={() => handleFilterChange("lists")}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
