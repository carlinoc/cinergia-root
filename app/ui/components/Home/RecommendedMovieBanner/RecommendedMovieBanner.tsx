// Import necessary dependencies and types
import Link from 'next/link';
import { RecommendedMovieBannerProps } from './RecommendedMovieBanner.model';
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';
import { routesPaths } from '@/app/routes/routes';

/**
 * RecommendedMovieBanner Component
 *
 * A React component presenting a banner with information about a recommended movie.
 *
 * @component
 * @param {Object} props - Props for the RecommendedMovieBanner component.
 * @param {string} props.titleBanner - The title for the banner section.
 * @param {MovieType} props.movieData - Information about the recommended movie.
 * @returns {JSX.Element} - JSX element representing the RecommendedMovieBanner component.
 */
export function RecommendedMovieBanner({
  titleBanner,
  background,
  movieData,
}: RecommendedMovieBannerProps): JSX.Element {
  // Destructure movieData to extract relevant information
  const { name, description, slug, image2, agerates } = movieData;

  // Construct the background image URL
  const backgroundImageUrl = background
    ? `url('${CDN_IMAGES_BASE_URL}${background}')`
    : `url('${CDN_IMAGES_BASE_URL}${image2}')`;

  /**
   * Render the JSX for the RecommendedMovieBanner component
   */
  return (
    <section
      className="flex items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg bg-cover bg-center "
      style={{
        backgroundImage: backgroundImageUrl,
      }}
    >
      <div className="relative flex items-end justify-center w-full min-height-banner--sm lg:min-height-banner--lg py-16 lg:py-24 bg-gradient-to-br from-bgPrimaryDark/70 via-bgPrimaryDark/50 to-transparent">
        <div className="absolute top-0 -left-5 w-fit p-10 bg-greenBrushStroke2 bg-contain bg-center bg-no-repeat">
          <span className="span-xl text-2xl lg:text-4xl text-textColorNeutral-50 font-semibold whitespace-nowrap">
            {titleBanner}
          </span>
        </div>

        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-1 w-full">
            {/* Banner title and movie information */}
            <div className="w-full">
              {/* Movie title */}
              <h2 className="heading-2 font-extrabold text-textColorNeutral-50 max-w-prose">
                {name}
              </h2>
            </div>

            {/* Agerates */}
            <span className="span-xl text-textColorAccent-500 font-semibold mb-5">
              {agerates[0]?.range}
            </span>

            {/* Movie overview */}
            <p className="paragraph-lg line-clamp-5 lg:line-clamp-none font-normal text-textColorNeutral-50 max-w-prose">
              {description}
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-start items-center w-full">
            {/* "Ver Película" button */}
            <Link
              className="button-secondary padding-button w-full md:w-fit"
              href={`${routesPaths?.movies}/${slug}`}
            >
              Ver Película
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
