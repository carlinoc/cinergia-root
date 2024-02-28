// Import necessary dependencies and types
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MovieCardProps } from './MovieCard.model';
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';
import { routesPaths } from '@/app/routes/routes';

/**
 * MovieCard Component
 *
 * A React component representing a card displaying information about a movie.
 * It uses the 'next/image' component for lazy loading and responsive image rendering.
 *
 * @component
 * @param {Object} props - The properties of the MovieCard component.
 * @param {MoviesGenre} props.movieData - Information about the movie to be displayed.
 * @returns {JSX.Element} - JSX element representing the MovieCard component.
 */
export function MovieCard({ movieData }: MovieCardProps) {
  const { name, releaseYear, slug, poster1 } = movieData;
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [date, setDate] = useState<number>(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    const year = new Date(releaseYear).getFullYear();
    return setDate(year);
  }, [releaseYear]);

  useEffect(() => {
    /**
     * Effect to check if the image is in view and set the visibility state.
     */
    if (inView && !isImageVisible) {
      setIsImageVisible(true);
    }
  }, [inView, isImageVisible]);

  const imageURL = `${CDN_IMAGES_BASE_URL}${poster1}`;
  const imageSrc = isImageVisible
    ? imageURL
    : 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=';

  return (
    /**
     * Movie Card
     *
     * Displays a card with information about a movie.
     *
     * @returns {JSX.Element}
     */
    <li className="group overflow-hidden rounded-sm bg-dark-800 border border-dark-900">
      <Link
        className="relative group flex flex-col justify-center items-center"
        href={`${routesPaths?.movies}/${slug}`}
      >
        <span className="relative w-full aspect-[2/3]">
          <Image
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1080px) 100vw, 1536px"
            src={imageSrc}
            alt={name || 'Movie Card'}
            placeholder="blur"
            loading="lazy"
            className="object-cover object-center md:group-hover:scale-110 transition-all duration-200 ease-in bg-bgMovieCard bg-cover bg-center bg-no-repeat"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
          />
          <div ref={ref} className="absolute top-0 left-0 w-full h-full" />
        </span>
        <section className="absolute inset-0 flex justify-center items-end bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/10 to-transparent">
          <div className="flex flex-col place-items-center w-full p-4 font-semibold text-center">
            <span className="span-base line-clamp-3 text-textColorNeutral-50">
              {name}
            </span>
            <span className="span-sm text-xs text-textColorAccent-500 font-bold">
              {date}
            </span>
          </div>
        </section>
      </Link>
    </li>
  );
}
