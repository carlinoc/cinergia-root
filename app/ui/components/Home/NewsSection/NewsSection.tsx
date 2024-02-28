// Import necessary dependencies and types
import Image from 'next/image';
import { HorizontalMovieListSecondary } from '@/app/ui/components/shared/HorizontalMovieList/HorizontalMovieListSecondary';
import Figure2 from '@/app/ui/components/shared/assets/Figure2';
import Figure3 from '@/app/ui/components/shared/assets/Figure3';
import walletImage from '@/public/images/walletImage.png';
import { fetchHomeSection } from '@/app/lib/data/fetch';
import { homeSections } from '@/app/lib/lists/homeSectionSlugs';

/**
 * NewsSection Component
 *
 * The NewsSection component fetches trending movies using the fetchTrending function
 * and displays them in a styled horizontal movie list. It also includes visual elements
 * such as Figure2, Figure3, and a wallet image.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the NewsSection component.
 */
// Define the NewsSection component as an asynchronous function
export async function NewsSection(): Promise<JSX.Element> {
  // Fetch data for the "Exclusiva" section
  const { data }: HomeSectionRequestAPI = await fetchHomeSection({
    section: homeSections?.newsSection,
  });

  // Extract relevant information from the fetched data
  const sectionInfo: HomeSectionAPI = data[0];

  const movieListReverse: MovieAPI[] = sectionInfo?.movies.reverse() || [];

  // Return the JSX element with the HorizontalMovieListSecondary component
  return (
    // JSX structure representing the NewsSection component

    <section className="overflow-hidden relative w-full py-24 md:py-44 bg-bgPrimaryDark">
      <div className="z-10 flex flex-col justify-center items-center gap-16 md:gap-20 w-full">
        <div className="relative flex justify-center items-center w-full">
          {/* Render the HorizontalMovieListSecondary component with specified props */}
          <HorizontalMovieListSecondary
            title="Novedades"
            description="Millones de películas por descubrir. Explora ahora."
            movieList={movieListReverse}
            className="w-11/12"
          />
          <Figure2 className="absolute -top-10 -right-[20%] w-3/5 md:w-2/5 text-accent-500" />
        </div>
        <div className="relative w-11/12">
          <div className="relative flex justify-center items-center w-full">
            <figure className="z-10 relative w-full aspect-[2/1] lg:aspect-[3/1]">
              {/* Use the Next.js Image component for optimized image loading */}
              <Image
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1080px) 100vw, 1536px"
                quality={100}
                src={walletImage}
                alt={'Wallets'}
                placeholder="blur"
                loading="lazy"
                className="z-20 "
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </figure>
            <Figure3 className="absolute -bottom-32 -left-[10%] w-4/5 md:w-3/5 text-primary-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
