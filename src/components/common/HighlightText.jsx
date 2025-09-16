export function HighlightText({ text = "", highlight = "" }) {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="bg-yellow-100 rounded-sm">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}
