'use client';
// Import necessary dependencies and types
import { useEffect, useState } from 'react';
import HorizontalMovieListPrimarySkeleton from './HorizontalMovieListPrimarySkeleton';
import { HorizontalMovieListPrimaryTypes } from '../HorizontalMovieList.model';
import { HorizontalSlider } from '@/app/ui/components/shared/Sliders/HorizontalSlider';

/**
 * HorizontalMovieListPrimary Component
 *
 * A React component that displays a primary horizontal movie list with a title, link, and movie slider.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.title - The title of the movie list.
 * @param {string} props.path - The path or link associated with the movie list.
 * @param {TrendingMovieType[] | MovieType[]} props.movieList - An array of movie data of type TrendingMovieType[] or MovieType[].
 * @returns {JSX.Element} - JSX element representing the HorizontalMovieListPrimary component.
 */
export function HorizontalMovieListPrimary({
  title,
  path,
  movieList,
}: HorizontalMovieListPrimaryTypes): JSX.Element {
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Simulating loading delay with a timeout
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  /**
   * Render the JSX for the HorizontalMovieListPrimary component
   */
  return (
    <article className="flex flex-col items-start gap-5 w-full">
      <header className="w-full">
        <span className="button-text">
          <a
            href={path}
            className="flex flex-nowrap gap-2 items-center w-full h-full hover:pr-5 hover:opacity-80 hover:translate-x-2 transition-all duration-300 ease-in-out"
          >
            <h2 className="heading-6 font-medium text-textColorNeutral-50 py-1.5">
              {title}
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        </span>
      </header>
      <div className="relative w-full">
        {/* Background gradient for mobile view */}
        <div className="z-10 md:hidden absolute inset-y-0 right-0 w-14  bg-gradient-to-l from-bgPrimaryDark to-transparent"></div>
        {/* Render skeleton loader while loading */}
        {loading ? (
          <HorizontalMovieListPrimarySkeleton />
        ) : (
          /* Horizontal movie slider */
          <HorizontalSlider
            movieList={{ type: 'API', data: movieList }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1536: { slidesPerView: 5 },
            }}
          />
        )}
      </div>
    </article>
  );
}
