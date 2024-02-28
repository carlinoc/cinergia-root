import Image from 'next/image';
import noMoviesAvailable from '@/public/images/noMoviesAvailable.svg';
export function NoMoviesAvailable() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-screen">
      <div className="flex flex-col justify-center items-center gap-6 w-full h-screen">
        <span className="heading-1 font-extrabold text-textColorAccent-500">
          ¡Upss!
        </span>

        <figure className="relative w-10/12 md:w-1/2 lg:w-1/5 aspect-square">
          {/* Use the Next.js Image component for optimized image loading */}
          <Image
            fill
            sizes="100%"
            src={noMoviesAvailable}
            alt={'No found'}
            placeholder="blur"
            loading="lazy"
            className="object-cover object-center"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </figure>
        <span className="heading-3 font-semibold text-textColorNeutral-50">
          No hay películas disponibles
        </span>
      </div>
    </section>
  );
}
