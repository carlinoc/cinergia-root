'use client';
// Import necessary dependencies and types
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { BulletStyleType, HeroSliderProps } from './HeroSlider.model';
import { HeroCard } from '../HeroCard';

/**
 * HeroSlider Component
 *
 * The HeroSlider component is responsible for displaying a dynamic slider
 * featuring movie cards. It utilizes the Swiper library for the slider functionality.
 * The movieList prop is used to populate the slider with movie data.
 *
 * @component
 * @param {HeroSliderProps} props - Props for configuring the HeroSlider component.
 * @param {MovieType[]} props.movieList - An array of movie data to be displayed in the slider.
 * @returns {JSX.Element} - JSX element representing the HeroSlider component.
 */
export function HeroSlider({ movieList }: HeroSliderProps): JSX.Element {
  // Define custom styles for Swiper pagination bullets
  const bulletStyle: BulletStyleType = {
    '--swiper-pagination-color': '#0190f8',
    '--swiper-pagination-bullet-inactive-color': '#ffffff',
  };

  // Render the Swiper component with movie cards
  return (
    <Swiper
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      grabCursor
      style={bulletStyle}
    >
      {movieList.map((movie) => (
        <SwiperSlide key={`HeroSlider-${movie?.id}`}>
          <HeroCard movieData={movie} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
