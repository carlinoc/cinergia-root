// Import necessary dependencies and types
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';
import { HeroProps } from './Hero.model';

/**
 * Hero Component
 *
 * A React component representing the hero section for a specific genre or movie.
 * It dynamically adjusts the backdrop image width based on the window size and displays
 * information about the genre along with a welcoming message.
 *
 * @component
 * @param {Object} props - The properties of the Hero component.
 * @param {genresListTypes} props.genreInfo - Information about the genre.
 * @param {(MovieType | TrendingMovieType)} props.movieInfo - Information about the featured movie.
 * @returns {JSX.Element} - JSX element representing the Hero component.
 */
export function Hero({ genreInfo, movieInfo }: HeroProps) {
  // Destructure key movie information
  const { image2 } = movieInfo;
  // Destructure genre information
  const { description } = genreInfo;

  return (
    /**
     * Hero Section
     *
     * Displays a hero section with a backdrop image, genre information, and a welcoming message.
     *
     * @returns {JSX.Element}
     */
    <section
      className="w-full h-[40vh] lg:h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(' ${CDN_IMAGES_BASE_URL}${image2}')`,
      }}
    >
      <div className="w-full h-[40vh] lg:h-[50vh] flex flex-col place-items-center bg-bgPrimaryDark/70">
        <section className="flex flex-col justify-center items-center gap-6 w-11/12 md:w-10/12 h-full text-center">
          {/* Welcome message */}
          <h2 className="heading-2 font-bold text-textColorNeutral-50 w-fit">
            ¡Bienvenido!
          </h2>

          {/* Display genre description if available */}
          {description ? (
            <span className="span-xl md:text-2xl text-textColorNeutral-50 max-w-prose">
              {description}
            </span>
          ) : null}
        </section>
      </div>
    </section>
  );
}
