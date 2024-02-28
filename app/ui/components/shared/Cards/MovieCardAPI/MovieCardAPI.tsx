/* eslint-disable @next/next/no-img-element */
'use client';
// Import necessary dependencies and types
import Link from 'next/link';
import Image from 'next/image';
import { MovieCardAPIProps } from './MovieCardAPI.model';
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';
import { routesPaths } from '@/app/routes/routes';

/**
 * MovieCardAPI Component
 *
 * The MovieCardAPI component displays movie information in a card format.
 * It includes the movie title, poster image, and release date.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {MovieType | TrendingMovieType} props.movieData - An object containing movie data, either of type MovieType or TrendingMovieType.
 * @returns {JSX.Element} - JSX element representing the MovieCardAPI component.
 */
export function MovieCardAPI({ movieData }: MovieCardAPIProps): JSX.Element {
  // Extracting movie data properties
  const { name, slug, releaseYear, image1 } = movieData;

  // URL for the movie poster image
  const imageURL = `${CDN_IMAGES_BASE_URL}${image1}`;

  return (
    <li className="group overflow-hidden rounded-sm bg-bgSecondaryDark md:hover:bg-dark-800">
      <Link
        className="relative group flex flex-col justify-center items-center bg-bgMovieCard bg-cover bg-center"
        href={`${routesPaths?.movies}/${slug}`}
      >
        <span className="relative w-full aspect-[2/3] md:aspect-video">
          {/* Movie poster image using Next.js Image component */}
          <Image
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1080px) 100vw, 1536px"
            src={imageURL}
            alt={name || 'Movie Card'}
            placeholder="blur"
            loading="lazy"
            className="object-cover object-center md:group-hover:scale-110 transition-all duration-200 ease-in"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
        </span>
        <section className="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/10 to-transparent">
          <div className="flex flex-col justify-center w-full p-2 md:px-4">
            {/* Movie title */}
            <span className="span-base line-clamp-1 text-textColorNeutral-50 md:text-textColorNeutral-100 md:group-hover:text-textColorNeutral-50">
              {name}
            </span>
            {/* Release date */}
            <span className="span-sm text-xs text-textColorNeutral-50 font-semibold">
              {releaseYear !== undefined && new Date(releaseYear).getFullYear()}
            </span>
          </div>
        </section>
      </Link>
    </li>
  );
}
