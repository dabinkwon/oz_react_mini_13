export default function Loading({
  width = "100%",
  height = "200px",
  count = 1,
  className = "",
}) {
  const skeletons = Array.from({ length: count });

  return (
    <div
      className={`flex gap-4 flex-wrap justify-center items-center ${className}`}
    >
      {skeletons.map((_, i) => (
        <div
          key={i}
          style={{ width, height }}
          className="bg-gray-200 animate-pulse rounded-md"
        />
      ))}
    </div>
  );
}
