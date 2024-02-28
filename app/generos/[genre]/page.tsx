import { fetchHomeSection, fetchMovieListForGenre } from '@/app/lib/data/fetch';
import NotFound from '@/app/not-found';
import { Hero } from '@/app/ui/components/Genres/Hero';
import { MovieList } from '@/app/ui/components/Genres/MovieList';
import { ScrollTopButtonWrapper } from '@/app/ui/components/shared/ScrollTopButtonWrapper';
import { GenrePageProps } from './GenrePage.model';

// Utility function to handle common logic for assigning values
const setDefaultGenreInfo = (defaultGenreInfo, data) => {
  Object.assign(defaultGenreInfo, {
    id: data.id,
    name: data.name,
    description: data.description,
    movies: data.movies.reverse(),
  });
};

/**
 * Genre Page
 *
 * This page component fetches and displays information about movies belonging to a specific genre.
 * It utilizes the `fetchMovieListForGenre` function to retrieve the list of movies for the specified genre
 * and displays a Hero component featuring the first movie from the fetched list. If no movies are available,
 * it displays a message using the NoMoviesAvailable component.
 *
 * @component
 * @param {Object} params - The parameters object containing the genre slug.
 * @param {string} params.genre - The slug of the genre to display.
 * @returns {JSX.Element} - JSX element representing the Genre Page.
 * @throws {Error} - Throws an error if there is an issue fetching the movie list.
 */
export default async function GenrePage({ params }: GenrePageProps) {
  // Extract genre slug from parameters
  const genreSlug = params.genre;

  // Set up default genre information structure
  const defaultGenreInfo: GenreInfoAPI = {
    id: 0,
    name: '',
    description: '',
    movies: [],
  };

  let movieList: MovieAPI[];

  try {
    // Fetch the list of movies for the specified genre
    const {
      data: [genreData],
    }: { data: GenreInfoAPI[] } = await fetchMovieListForGenre({
      genreSlug,
    });

    if (genreData && genreData.movies && genreData.movies.length > 0) {
      setDefaultGenreInfo(defaultGenreInfo, genreData);
      movieList = [...(genreData.movies as MovieAPI[])];
    } else {
      // If no movies available, fetch data for the "Cortometrajes Gratuitos" section
      const { data }: HomeSectionRequestAPI = await fetchHomeSection({
        section: genreSlug,
      });
      const homeSectionData = data[0];

      if (
        !homeSectionData ||
        !homeSectionData.movies ||
        homeSectionData.movies.length === 0
      ) {
        // If both fetchMovieListForGenre and fetchHomeSection return empty data, display NotFound
        return <NotFound />;
      }

      setDefaultGenreInfo(defaultGenreInfo, homeSectionData);
      movieList = [...(homeSectionData.movies as MovieAPI[])];
    }

    // Display the Genre Page with Hero and MovieList components
    return (
      <section className="w-full">
        <ScrollTopButtonWrapper>
          <>
            <Hero genreInfo={defaultGenreInfo} movieInfo={movieList[0]} />
            <MovieList genreInfo={defaultGenreInfo} movieList={movieList} />
          </>
        </ScrollTopButtonWrapper>
      </section>
    );
  } catch (error) {
    // Handle the error (e.g., display an error message)
    console.error('Error fetching data:', error);
    // You can also redirect to an error page if needed
    return <NotFound />;
  }
}
