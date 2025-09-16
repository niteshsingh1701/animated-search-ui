import { FileText, Folder, Film, Image as ImageIcon } from "lucide-react";
import { HighlightText } from "../common/HighlightText";

export function FileResult({ file, searchTerm }) {
  const getIcon = () => {
    if (file.type === "folder")
      return <Folder size={24} className="text-gray-500" />;
    switch (file.fileType) {
      case "image":
        return <ImageIcon size={24} className="text-gray-500" />;
      case "video":
        return <Film size={24} className="text-gray-500" />;
      default:
        return <FileText size={24} className="text-gray-500" />;
    }
  };

  const metaText =
    file.type === "folder"
      ? `${file.category} • ${file.fileCount} Files`
      : `${file.category}`;

  return (
    <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md">
        {getIcon()}
      </div>
      <div className="flex-grow">
        <p className="text-sm font-semibold text-gray-800">
          <HighlightText text={file.name} highlight={searchTerm} />
        </p>
        <p className="text-xs text-gray-500">
          {metaText} • {file.timestamp}
        </p>
      </div>
    </div>
  );
}
