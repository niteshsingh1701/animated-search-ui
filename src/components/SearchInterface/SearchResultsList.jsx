import { SearchResultItem } from "./SearchResultItem";

export function SearchResultsList({ results, searchTerm }) {
  if (results.length === 0) {
    return (
      <div className="text-center text-gray-500 pt-10">No results found.</div>
    );
  }
  return (
    <div className="flex flex-col">
      {results.map((item) => (
        <SearchResultItem key={item.id} item={item} searchTerm={searchTerm} />
      ))}
    </div>
  );
}
