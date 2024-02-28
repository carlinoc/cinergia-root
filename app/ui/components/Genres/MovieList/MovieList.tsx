/* eslint-disable react-hooks/exhaustive-deps */
// Import necessary dependencies and types
import { MovieCard } from '../MovieCard';
import { MovieListProps } from './MovieList.model';

/**
 * MovieList Component
 *
 * A React component that displays a list of movies for a specific genre.
 * It dynamically loads more movies as the user scrolls to the bottom of the page.
 *
 * @component
 * @param {Object} props - The properties of the MovieList component.
 * @param {genresListTypes} props.genreInfo - Information about the genre.
 * @param {{ page: number; results: MovieType[] | TrendingMovieType[] }} props.movieList - Information about the current page of movie results.
 * @returns {JSX.Element} - JSX element representing the MovieList component.
 */
export function MovieList({ genreInfo, movieList }: MovieListProps) {
  // Destructure genre information
  const { name } = genreInfo;

  return (
    /**
     * MovieList Section
     *
     * Displays a list of movies for a specific genre.
     *
     * @returns {JSX.Element}
     */
    <section className="flex place-content-center w-full py-16">
      <div className="w-11/12 md:w-10/12">
        {/* Genre Heading */}
        <h2 className="heading-3 font-bold text-textColorNeutral-50 w-fit mb-12">
          {name}
        </h2>
        {/* Movie Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 w-full">
          {movieList.map((movie: MovieAPI) => (
            <MovieCard key={`movie-${movie?.id}`} movieData={movie} />
          ))}
        </ul>
      </div>
    </section>
  );
}
