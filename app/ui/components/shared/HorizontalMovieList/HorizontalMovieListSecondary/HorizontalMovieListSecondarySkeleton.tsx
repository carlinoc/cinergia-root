export default function HorizontalMovieListSecondarySkeleton() {
  return (
    <section className="w-11/12 animate-pulse">
      <div className="grid grid-cols-1 md:grid-cols-6 justify-center items-center gap-10 w-full h-full rounded-md">
        <div className="col-span-1 md:col-span-2 flex flex-col justify-center gap-8 w-full h-full">
          <div className="w-full">
            <div className="w-36 h-10 mb-4 rounded-md bg-dark-700" />
            <div className="w-full h-6 mb-1 rounded-md bg-dark-700" />
            <div className="w-2/3 h-6 rounded-md bg-dark-700" />
          </div>
          <div className="w-36 h-10 mb-4 rounded-md bg-dark-700" />
        </div>
        <div className="col-span-1 md:col-span-4 w-full h-60 rounded-md bg-dark-700" />
      </div>
    </section>
  );
}
