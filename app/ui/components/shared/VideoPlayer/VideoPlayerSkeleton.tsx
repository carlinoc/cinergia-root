export default function VideoPlayerSkeleton() {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full p-4 bg-dark-800 animate-pulse">
      <div className="w-16 aspect-square rounded-full bg-dark-700"></div>
      <div className="absolute bottom-0 flex items-center gap-4 w-full p-4">
        <div className="w-9 aspect-square rounded-full bg-dark-700"></div>
        <div className="w-full h-2 rounded-full bg-dark-700"></div>
        <div className="aspect-square h-4 rounded-lg bg-dark-700"></div>
        <div className="w-8 h-4 rounded-lg bg-dark-700"></div>
      </div>
    </div>
  );
}
