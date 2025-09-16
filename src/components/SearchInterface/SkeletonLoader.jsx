const SkeletonItem = () => (
  <div className="flex items-center gap-4 p-3">
    <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
    <div className="flex-grow space-y-2">
      <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
      <div className="h-3 w-1/2 bg-gray-200 rounded animate-pulse"></div>
    </div>
  </div>
);

export function SkeletonLoader() {
  return (
    <div className="space-y-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <SkeletonItem key={index} />
      ))}
    </div>
  );
}
