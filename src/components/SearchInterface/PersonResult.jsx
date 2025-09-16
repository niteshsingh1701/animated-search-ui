import { Avatar } from "./Avatar";
import { HighlightText } from "../common/HighlightText";

export function PersonResult({ person, searchTerm }) {
  const statusText = {
    unactivated: "Unactivated",
    active: `Active ${person.lastActive}`,
    online: "Active now",
  };

  return (
    <div className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg">
      <Avatar imageUrl={person.avatar} status={person.status} />
      <div className="flex-grow">
        <p className="text-sm font-semibold text-gray-800">
          <HighlightText text={person.name} highlight={searchTerm} />
        </p>
        <p className="text-xs text-gray-500">{statusText[person.status]}</p>
      </div>
    </div>
  );
}
