'use client';
// Import necessary dependencies and types
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './sliderStyles.css';
import { Pagination, Navigation } from 'swiper/modules';
import { MovieCard } from '@/app/ui/components/shared/Cards/MovieCard';
import { MovieCardAPI } from '@/app/ui/components/shared/Cards/MovieCardAPI';
import {
  ButtonStyleType,
  HorizontalSliderPropsTypes,
} from './HorizontalSlider.model';

/**
 * HorizontalSlider Component
 *
 * The HorizontalSlider component displays a horizontal slider of movie cards using the Swiper library.
 * It supports navigation and pagination features and adapts to different breakpoints.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {Array} props.movieList - An array of movie data of type TrendingMovieType[] or MovieType[].
 * @param {Object} props.breakpoints - Breakpoints configuration for responsive design.
 * @returns {JSX.Element} - JSX element representing the HorizontalSlider component.
 */
export function HorizontalSlider({
  movieList = { type: 'TEST', data: [] },
  breakpoints,
}: HorizontalSliderPropsTypes): JSX.Element {
  // Button styles for Swiper navigation
  const buttonStyle: ButtonStyleType = {
    '--swiper-navigation-size': '2rem',
    '--swiper-navigation-color': '#ffffff',
    '--swiper-navigation-sides-offset': '0',
  };

  return (
    <Swiper
      navigation={{ enabled: true }}
      modules={[Pagination, Navigation]}
      spaceBetween={7}
      slidesPerView={'auto'}
      className="horizontalSlider"
      style={buttonStyle}
      breakpoints={breakpoints}
    >
      {/* Mapping through the movieList to create SwiperSlides */}
      {movieList?.type === 'API' ? (
        <>
          {movieList?.data.map((movie) => (
            <SwiperSlide key={`movie-${movie?.id}`}>
              {/* Rendering MovieCardAPI for each movie in the list */}
              <MovieCardAPI movieData={movie} />
            </SwiperSlide>
          ))}
        </>
      ) : (
        <>
          {movieList?.data.map((movie) => (
            <SwiperSlide key={`movie-${movie?.id}`}>
              {/* Rendering MovieCard for each movie in the list */}
              <MovieCard movieData={movie} />
            </SwiperSlide>
          ))}
        </>
      )}
    </Swiper>
  );
}
