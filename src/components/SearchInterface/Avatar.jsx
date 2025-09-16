export function Avatar({ imageUrl, status }) {
  const statusColor = {
    online: "bg-green-500",
    active: "bg-yellow-400",
    unactivated: "bg-red-500",
  };

  return (
    <div className="relative">
      <img src={imageUrl} alt="avatar" className="w-10 h-10 rounded-full" />
      <span
        className={`absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white ${statusColor[status]}`}
      />
    </div>
  );
}
