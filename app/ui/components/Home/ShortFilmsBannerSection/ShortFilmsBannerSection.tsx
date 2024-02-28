// Import necessary dependencies and types
import { fetchHomeSection, fetchMovieDetails } from '@/app/lib/data/fetch';
import { homeSections } from '@/app/lib/lists/homeSectionSlugs';
import { BannerSliderMovie } from '@/app/ui/components/shared/Sliders/BannerSliderMovie';

/**
 * ShortFilmsBannerSection Component
 *
 * The `ShortFilmsBannerSection` component fetches currently playing movies and displays them in a banner slider.
 * It retrieves information about the "Cortometrajes Gratuitos" section, including the background and details of the first movie.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the `ShortFilmsBannerSection` component.
 * @throws {Error} - Throws an error if there is an issue fetching the necessary data.
 */
export async function ShortFilmsBannerSection(): Promise<JSX.Element> {
  try {
    const listSlug = homeSections?.shortFilmsSection;
    // Fetch data for the "Cortometrajes Gratuitos" section
    const { data }: HomeSectionRequestAPI = await fetchHomeSection({
      section: listSlug,
    });

    // Extract relevant information from the fetched data
    const sectionInfo: HomeSectionAPI = data[0];

    const movieListReverse: MovieAPI[] = sectionInfo?.movies.reverse();

    // Retrieve details of the first movie in the list
    const firstMovie: MovieAPI = movieListReverse[0];
    const { data: firstMovieData }: { data: MovieDetailsAPI[] } =
      await fetchMovieDetails(firstMovie?.slug);

    const firstMovieDetails: MovieDetailsAPI = firstMovieData[0];

    /**
     * Render the JSX for the `ShortFilmsBannerSection` component
     */
    return (
      <BannerSliderMovie
        sectionTitle="Cortometrajes Gratuitos"
        background={sectionInfo?.background}
        firstMovieDetails={firstMovieDetails}
        movieList={movieListReverse}
        listSlug={listSlug}
      />
    );
  } catch (error) {
    // Handle errors and throw an informative error message
    throw new Error(
      `Error fetching data for ShortFilmsBannerSection: ${error}`,
    );
  }
}
