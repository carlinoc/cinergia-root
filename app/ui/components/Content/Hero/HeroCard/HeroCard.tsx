'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';
import { HeroCardProps } from './Hero.model';
import { HorizontalMovieListPrimary } from '@/app/ui/components/shared/HorizontalMovieList/HorizontalMovieListPrimary';
import Link from 'next/link';
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';
import { routesPaths } from '@/app/routes/routes';

/**
 * HeroCard Component
 *
 * This component represents a hero card for a movie, displaying key information
 * and a dynamic background adjusted based on the window size.
 *
 * @component
 * @param {HeroCardProps} props - Props for configuring the HeroCard component.
 * @param {MovieDetailsAPI} props.firstMovieDetails - Details of the first movie to be displayed.
 * @param {MovieAPI[]} props.movieList - List of movies for the horizontal movie list section.
 * @returns {JSX.Element} - JSX element representing the HeroCard component.
 */
export function HeroCard({
  firstMovieDetails,
  movieList,
  listSlug,
}: HeroCardProps): JSX.Element {
  // Destructure key movie information
  const { name, slug, image2, release_year, category } = firstMovieDetails;
  const [date, setDate] = useState<number>(0);

  useEffect(() => {
    const year = new Date(release_year).getFullYear();
    return setDate(year);
  }, [release_year]);

  /**
   * Render the JSX for the HeroCard component
   */
  return (
    <section
      className="w-full min-h-[50vh] bg-cover bg-center"
      style={{
        backgroundImage: `url('${CDN_IMAGES_BASE_URL}${image2}')`,
      }}
    >
      <div className="w-full min-h-[50vh] py-20 lg:py-[5.5rem] flex flex-col justify-start items-center gap-16 bg-gradient-to-br from-bgPrimaryDark/90 via-bgPrimaryDark/50 to-transparent">
        <section className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12 h-full">
          <div className="w-full h-auto">
            {/* Movie type label */}
            <span className="span-sm px-3 py-1 rounded-full bg-dark-500/30 text-textColorNeutral-50 font-medium">
              {category}
            </span>
            {/* Movie title */}
            <h2 className="heading-3 w-full md:w-3/4 font-extrabold text-textColorNeutral-50 mt-2">
              {name}
            </h2>
            {/* Movie release year */}
            <span className="span-lg max-w-prose text-textColorNeutral-100">
              {date}
            </span>
          </div>
          {/* Button to view the movie */}
          <Link
            className="button-secondary padding-button w-full md:w-fit"
            href={`${routesPaths?.movies}/${slug}`}
          >
            Ver Película
          </Link>
        </section>
        {/* Horizontal movie list section */}
        <section className="flex justify-center items-center w-11/12 md:w-10/12">
          <HorizontalMovieListPrimary
            title="Cortometrajes Gratuitos"
            movieList={movieList}
            path={`${routesPaths?.genres}/${listSlug}`}
          />
        </section>
      </div>
    </section>
  );
}
