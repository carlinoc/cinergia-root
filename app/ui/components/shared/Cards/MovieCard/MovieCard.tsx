'use client';
// Import necessary dependencies and types
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { MovieCardPropsTypes } from './MovieCard.model';
import createMovieSlug from '@/app/lib/utils/createMovieSlug';
import { routesPaths } from '@/app/routes/routes';

/**
 * MovieCard Component
 *
 * The MovieCard component displays movie information in a card format.
 * It includes the movie title, poster image, and release date.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {MovieType | TrendingMovieType} props.movieData - An object containing movie data, either of type MovieType or TrendingMovieType.
 * @returns {JSX.Element} - JSX element representing the MovieCard component.
 */
export function MovieCard({ movieData }: MovieCardPropsTypes) {
  // Extracting movie data properties
  const { id, title, backdrop_path } = movieData;

  // State to manage the width of the movie backdrop based on window size
  const [widthBackdropMovie, setWidthBackdropMovie] = useState<string>('w780');

  /**
   * useEffect hook to handle window resize events and update the width of the movie backdrop accordingly.
   */
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth >= 768 ? 'w1280' : 'w780';
      setWidthBackdropMovie(width);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageURL = `https://image.tmdb.org/t/p/${widthBackdropMovie}/${backdrop_path}`;

  return (
    <li className="group overflow-hidden rounded-sm bg-bgSecondaryDark md:hover:bg-dark-800">
      <Link
        className="relative group flex flex-col justify-center items-center"
        href={`${routesPaths?.movies}/${createMovieSlug({ id, title })}`}
      >
        <span className="relative w-full aspect-[2/3] md:aspect-video">
          {/* Movie poster image using Next.js Image component */}
          <Image
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1080px) 100vw, 1536px"
            src={imageURL}
            alt={title || 'Movie Card'}
            placeholder="blur"
            loading="lazy"
            className="object-cover object-center md:group-hover:scale-110 transition-all duration-200 ease-in bg-bgMovieCard bg-cover bg-center bg-no-repeat"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </span>
        <section className="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/10 to-transparent">
          <div className="flex flex-col justify-center w-full p-2 md:px-4">
            {/* Movie title */}
            <span className="span-base line-clamp-1 text-textColorNeutral-50 md:text-textColorNeutral-100 md:group-hover:text-textColorNeutral-50">
              {title}
            </span>
            {/* Release date */}
            <span className="span-sm text-xs text-textColorNeutral-50 font-semibold"></span>
          </div>
        </section>
      </Link>
    </li>
  );
}
