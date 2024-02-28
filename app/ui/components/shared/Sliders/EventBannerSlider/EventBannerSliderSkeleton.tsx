export default function EventBannerSliderSkeleton() {
  return (
    <section className="flex items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg bg-cover bg-center rounded-md bg-dark-800 animate-pulse">
      <div className="flex flex-col items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg py-14 lg:py-16">
        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-4 w-full">
            <div className="w-full">
              <div className="w-96 h-12 rounded-md bg-dark-700" />
            </div>
            <div className="max-w-prose h-6 rounded-md bg-dark-700" />
            <div className="max-w-prose h-6 rounded-md bg-dark-700" />
            <div className="w-60 h-6 rounded-md bg-dark-700" />
          </div>
          <div className="flex justify-end items-center w-full mt-4">
            <div className="w-full md:w-3/4">
              <div className="w-full h-48 rounded-md bg-dark-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
