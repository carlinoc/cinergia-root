'use client';
// Import necessary dependencies and types
import { useState, useEffect } from 'react';
import { HorizontalSlider } from '@/app/ui/components/shared/Sliders/HorizontalSlider';
import EventBannerSliderSkeleton from './EventBannerSliderSkeleton';
import { EventBannerSliderProps } from './EventBannerSlider.model';

/**
 * EventBannerSlider Component
 *
 * A React component representing a banner slider for showcasing movies.
 *
 * @component
 * @param {Object} props - Props for the EventBannerSlider component.
 * @param {string} props.eventTitle - The title of the movie section.
 * @param {string} [props.eventDate] - The date of the event (optional).
 * @param {string} props.eventDescription - The description of the event.
 * @param {string} props.backgroundImageUrl - The URL for the background image.
 * @param {TrendingMovieType[]} props.movieList - An array of movie objects for display.
 * @returns {JSX.Element} - JSX element representing the EventBannerSlider component.
 */
export function EventBannerSlider({
  eventTitle,
  eventDate,
  eventDescription,
  backgroundImageUrl,
  movieList,
}: EventBannerSliderProps): JSX.Element {
  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // Simulating loading delay with a timeout
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  /**
   * Render the JSX for the EventBannerSlider component
   */
  // Render skeleton loader while loading
  if (loading) {
    return <EventBannerSliderSkeleton />;
  }

  // Render the actual content after loading
  return (
    <section
      className="flex items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg bg-cover bg-center "
      style={{
        backgroundImage: `url("${backgroundImageUrl}")`,
      }}
    >
      <div className="flex flex-col items-center justify-center w-full min-height-banner--sm lg:min-height-banner--lg py-14 lg:py-16 bg-gradient-to-br from-bgPrimaryDark/70 via-bgPrimaryDark/50 to-transparent">
        <div className="flex flex-col justify-center gap-8 w-11/12 md:w-10/12">
          <div className="flex flex-col gap-1 w-full">
            {/* Event title */}
            <h2 className="heading-1 font-extrabold text-textColorNeutral-50 w-full">
              {eventTitle}
            </h2>

            {/* Event date */}
            <span className="span-lg text-textColorNeutral-50 font-semibold mb-5">
              {eventDate}
            </span>

            {/* Event description */}
            <p className="paragraph-base line-clamp-5 lg:line-clamp-none font-normal text-textColorNeutral-50 w-full md:w-1/2">
              {eventDescription}
            </p>
          </div>
          <div className="flex justify-end items-center w-full mt-4">
            <div className="w-full md:w-3/4">
              {/* Horizontal movie slider */}
              <HorizontalSlider
                movieList={{ type: 'TEST', data: movieList.slice(1) }}
                breakpoints={{
                  320: { slidesPerView: 2 },
                  480: { slidesPerView: 3 },
                  768: { slidesPerView: 3 },
                  1536: { slidesPerView: 3 },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
