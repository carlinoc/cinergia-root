// Import necessary dependencies and types
import { fetchMovieDetails, fetchMovieList } from '@/app/lib/data/fetch';
import { HeroSlider } from './HeroSlider';

/**
 * Hero Component
 *
 * The Hero component displays a slider featuring movies on the home page.
 * It fetches information about movies, extracts relevant details,
 * and passes the data to the HeroSlider component.
 *
 * @component
 * @returns {Promise<JSX.Element>} - A promise resolving to the JSX element representing the Hero component.
 */
export async function Hero(): Promise<JSX.Element> {
  // Fetch top 5 movies
  const { data: movies }: MovieListAPI = await fetchMovieList({ top: 5 });

  // Extract movie slugs
  const movieSlugs: string[] = movies.map((movie) => movie.slug);

  // Fetch details for each movie concurrently
  const movieList: MovieDetailsAPI[] = await Promise.all(
    movieSlugs.map(async (slug: string) => {
      const { data }: MovieDetailsObjAPI = await fetchMovieDetails(slug);
      return data;
    }),
  );
  const flatMovieList = movieList.flat();

  // Render the HeroSlider component with the fetched movie data
  return <HeroSlider movieList={flatMovieList} />;
}
