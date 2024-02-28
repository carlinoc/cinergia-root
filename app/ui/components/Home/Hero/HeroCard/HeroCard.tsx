'use client';
// Import necessary dependencies and types
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { convertMinutesToHours } from '@/app/lib/utils/convertMinutesToHours';
import { HeroCardProps } from './HeroCard.model';
import { routesPaths } from '@/app/routes/routes';
import { CDN_IMAGES_BASE_URL } from '@/app/lib/data/urls';

/**
 * HeroCard Component
 *
 * The HeroCard component represents a card displaying detailed information
 * about a movie, including name, slug, movieLength, description and image2.
 * It also includes a background image and a button to view the movie.
 *
 * @component
 * @param {HeroCardProps} props - Props for configuring the HeroCard component.
 * @param {MovieType} props.movieData - Movie data used to populate the card.
 * @returns {JSX.Element} - JSX element representing the HeroCard component.
 */
export function HeroCard({ movieData }: HeroCardProps): JSX.Element {
  // Destructure movieData for easier access
  const { name, slug, duration, release_year, description, image2, category } =
    movieData;
  const [date, setDate] = useState<number>(0);

  useEffect(() => {
    const year = new Date(release_year).getFullYear();
    return setDate(year);
  }, [release_year]);

  // Render the HeroCard component with movie details
  return (
    <section
      className="overflow-hidden relative w-full min-h-[100vh] bg-cover bg-center "
      style={{
        backgroundImage: `url('${CDN_IMAGES_BASE_URL}${image2}')`,
      }}
    >
      <div className="w-full min-h-[100vh] py-16 lg:py-[4.5rem] flex justify-center items-end bg-gradient-to-t from-bgPrimaryDark via-bgPrimaryDark/50 to-transparent">
        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12 h-full">
          <div className="w-full h-auto">
            <span className="span-sm px-3 py-1 rounded-full bg-dark-500/30 text-textColorNeutral-50 font-medium">
              {category}
            </span>
            <h2 className="heading-2 font-extrabold text-textColorNeutral-50 mt-2">
              {name}
            </h2>
            <div className="flex gap-2 w-fit span-lg text-textColorNeutral-100">
              <span>{convertMinutesToHours(duration)}</span>
              <span className="before:content-['•'] before:mr-2">{date}</span>
            </div>
          </div>
          <p className="paragraph-lg line-clamp-5 lg:line-clamp-none font-normal text-textColorNeutral-50">
            {description}
          </p>
          <Link
            className="button-primary padding-button w-full md:w-fit"
            href={`${routesPaths?.movies}/${slug}`}
          >
            Ver Película
          </Link>
        </div>
      </div>
    </section>
  );
}
