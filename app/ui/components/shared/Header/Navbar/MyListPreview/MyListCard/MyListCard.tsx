'use client';
// Import necessary dependencies and types
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { calculateTimeToMovie } from '@/app/lib/utils/calculateTimeToMovie';
import { MouseEvent, TouchEvent, KeyboardEvent } from 'react';
import { MyListCardProps } from '../MyListPreview.model';
import { routesPaths } from '@/app/routes/routes';
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';

/**
 * MyListCard Component
 *
 * A React component representing a card in the MyListPreview section. It displays movie information,
 * including the poster, title, and additional details.
 *
 * @component
 * @param {Object} props - The properties of the MyListCard component.
 * @param {TrendingMovieType} props.movie - An object containing information about the movie.
 * @returns {JSX.Element} - JSX element representing the MyListCard component.
 */
export function MyListCard({ movie, handleMyListState }: MyListCardProps) {
  const { name, poster1, slug, date_end, date_start } = movie;
  const router = useRouter();

  const handleClick = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
    e.preventDefault();
    handleMyListState(false);
    router.push(`${routesPaths?.movies}/${slug}`);
  };
  /**
   * Render the JSX for the MyListCard component
   */
  return (
    <button
      type="button"
      className="grid grid-cols-5 items-center w-full p-4 hover:bg-dark-800"
      onClick={handleClick}
    >
      {/* Movie poster section */}
      <span className="col-span-1 relative w-4/5 md:w-3/5 aspect-[2/3] bg-bgMovieCard bg-cover bg-center">
        {/* Movie poster image using Next.js Image component */}
        <Image
          fill
          sizes="320px"
          src={`${CDN_IMAGES_BASE_URL}${poster1}`}
          alt={name || 'Movie Card'}
          placeholder="blur"
          loading="lazy"
          className="object-cover object-center md:group-hover:scale-110 transition-all duration-200 ease-in"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
        />
      </span>
      {/* Movie details section */}
      <div className="col-span-4 flex flex-col w-full text-textColorNeutral-50 text-start">
        {/* Movie title */}
        <span className="span-lg capitalize font-semibold ">{name}</span>
        {/* Additional details */}
        {/* <span className="span-base font-medium text-textColorAccent-500">
          ¡Aún no has visto la película!
        </span> */}
        <span className="span-base font-medium text-textColorAccent-500">
          {calculateTimeToMovie({
            startDate: date_start,
            endDate: date_end,
          })}
        </span>
      </div>
    </button>
  );
}
