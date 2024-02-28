// Import necessary dependencies and types
import { fetchGenresList, fetchMovieDataForGenres } from '@/app/lib/data/fetch';
import { routesPaths } from '@/app/routes/routes';
import { HorizontalMovieListPrimary } from '@/app/ui/components/shared/HorizontalMovieList/HorizontalMovieListPrimary';

/**
 * React component that fetches movie data for specified genres and displays them in a horizontal list.
 *
 * @component
 * @returns {Promise<JSX.Element>} The rendered section with HorizontalMovieListPrimary components.
 */
export async function ListSection(): Promise<JSX.Element> {
  /**
   * Fetches movie data for the specified genres.
   *
   * @function
   * @async
   * @returns {Promise<Array<{genre: string, movies: Array<MovieType>}>>} Array of objects representing genres and associated movies.
   */
  // Fetch genre list and categories list in parallel
  const [genreResponse, categoriesResponse] = await Promise.all([
    fetchGenresList({ list: 'genres' }),
    fetchGenresList({ list: 'categories' }),
  ]);

  // Destructure the data property from the API responses
  const { data: genreList } = genreResponse;
  const { data: categoriesList } = categoriesResponse;

  // Combine genre and categories lists
  const allGenres: GenresListAPI[] = [...genreList, ...categoriesList];

  // Fetch movie data for the combined genre list
  const moviesByGenre = await fetchMovieDataForGenres(allGenres);

  return (
    /**
     * Rendered section displaying a list of movies organized by genre.
     *
     * @returns {JSX.Element}
     */
    <section className="w-full py-10 md:py-20 bg-bgPrimaryDark">
      <div className="flex flex-col justify-center items-center gap-8 w-11/12 md:10/12 mx-auto">
        <div className="flex flex-col justify-center items-center gap-8 w-11/12 md:10/12">
          {moviesByGenre.map((genreData) => {
            const { genre, data: movieList, slug } = genreData;

            // Check if there are movies for the current genre
            if (movieList.length > 0) {
              /**
               * Render a horizontal list of movies for a specific genre.
               *
               * @returns {JSX.Element}
               */
              return (
                <HorizontalMovieListPrimary
                  key={`genreList_${genre}`}
                  title={genre}
                  movieList={movieList}
                  path={`${routesPaths?.genres}/${slug}`}
                />
              );
            }

            // Return null if there are no movies for the current genre
            return null;
          })}
        </div>
      </div>
    </section>
  );
}
