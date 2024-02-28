'use client';
// Import necessary dependencies and types
import { useEffect, useState } from 'react';
import { HorizontalMovieListSecondaryTypes } from '../HorizontalMovieList.model';
import HorizontalMovieListSecondarySkeleton from './HorizontalMovieListSecondarySkeleton';
import { HorizontalSlider } from '../../Sliders/HorizontalSlider';

/**
 * HorizontalMovieListSecondary Component
 *
 * The HorizontalMovieListSecondary component displays a horizontal movie list with secondary information.
 * It includes a title, description, and a "Ver Más" (See More) button that links to a specified path.
 * The actual movie list is presented using the HorizontalSlider component.
 *
 * @component
 * @param {string} title - The title of the movie list section.
 * @param {string} description - The description or additional information about the movie list.
 * @param {string} path - The path or link to navigate to when the "Ver Más" (See More) button is clicked.
 * @param {TrendingMovieType[]} movieList - An array of movie objects to be displayed in the horizontal slider.
 * @param {...any} props - Additional props that can be applied to the component's root element.
 * @returns {JSX.Element} - JSX element representing the HorizontalMovieListSecondary component.
 */
export function HorizontalMovieListSecondary({
  title,
  description,
  movieList,
  ...props
}: HorizontalMovieListSecondaryTypes): JSX.Element {
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Simulating loading delay with a timeout
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  // Render skeleton loader while loading
  if (loading) {
    return <HorizontalMovieListSecondarySkeleton />;
  }

  // Render the actual content after loading
  return (
    <article {...props}>
      <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-8 justify-center items-center gap-10 w-full h-full">
        <header className="col-span-1 md:col-span-2 flex flex-col justify-center gap-8 w-full h-full">
          <div className="w-full">
            <h2 className="heading-4 font-semibold text-textColorNeutral-50 mb-4">
              {title}
            </h2>
            <span className="span-base text-textColorNeutral-400">
              {description}
            </span>
          </div>
          {/* <a
            href={path}
            className="group button-secondary padding-button w-full md:w-fit"
          >
            Ver Más
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-chevron-right md:group-hover:translate-x-2 transition-all duration-300 ease-in-out"
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
          </a> */}
        </header>
        <div className="col-span-1 md:col-span-4 lg:col-span-6">
          {/* Horizontal movie slider */}
          <HorizontalSlider
            movieList={{ type: 'API', data: movieList }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1536: { slidesPerView: 3 },
            }}
          />
        </div>
      </div>
    </article>
  );
}
