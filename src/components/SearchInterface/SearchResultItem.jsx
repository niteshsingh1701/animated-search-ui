import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, Check, MoreHorizontal } from "lucide-react";
import { PersonResult } from "./PersonResult";
import { FileResult } from "./FileResult";

const ContextMenu = ({ onCopy }) => (
  <motion.div
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 10 }}
    transition={{ duration: 0.15 }}
    className="flex items-center gap-2"
  >
    <button
      onClick={onCopy}
      className="p-2 text-gray-500 hover:bg-gray-200 rounded-md"
    >
      <Link size={16} />
    </button>
    <button className="p-2 text-gray-500 hover:bg-gray-200 rounded-md">
      <MoreHorizontal size={16} />
    </button>
  </motion.div>
);

const CopiedToast = () => (
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="absolute right-14 top-1/2 -translate-y-1/2 flex items-center gap-1 bg-black text-white text-xs px-2 py-1 rounded-md"
  >
    <Check size={12} />
    Link copied!
  </motion.div>
);

export function SearchResultItem({ item, searchTerm }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`link_for_${item.name}`); // Dummy link
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const renderResult = () => {
    switch (item.type) {
      case "person":
        return <PersonResult person={item} searchTerm={searchTerm} />;
      case "file":
      case "folder":
        return <FileResult file={item} searchTerm={searchTerm} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="border-b border-gray-100 last:border-b-0 relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center">
        <div className="flex-grow">{renderResult()}</div>
        <div className="pr-2">
          <AnimatePresence>
            {isHovered && !isCopied && <ContextMenu onCopy={handleCopy} />}
          </AnimatePresence>
        </div>
      </div>
      <AnimatePresence>{isCopied && <CopiedToast />}</AnimatePresence>
    </div>
  );
}
