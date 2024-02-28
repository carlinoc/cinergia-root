export default function MovieListSkeleton() {
  return (
    <>
      {[...Array(20)].map((_, index) => (
        <li
          key={index}
          className="w-full aspect-[2/3] rounded-sm border bg-dark-500 border-dark-900 animate-pulse"
        ></li>
      ))}
    </>
  );
}
