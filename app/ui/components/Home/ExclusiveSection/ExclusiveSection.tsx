// Import necessary dependencies and types
import { fetchHomeSection, fetchMovieDetails } from '@/app/lib/data/fetch';
import { ExclusiveSectionCard } from './ExclusiveSectionCard';
import { homeSections } from '@/app/lib/lists/homeSectionSlugs';

/**
 * ExclusiveSection Component
 *
 * The ExclusiveSection component fetches details for a specific movie (id: 502356)
 * using the fetchMovieDetails function. It then renders an ExclusiveSectionCard
 * component to display information about the exclusive movie.
 *
 * @component
 * @returns {Promise<JSX.Element>} - A promise resolving to the JSX element representing the ExclusiveSection component.
 */
export async function ExclusiveSection(): Promise<JSX.Element> {
  try {
    // Fetch data for the "Exclusiva" section
    const { data }: HomeSectionRequestAPI = await fetchHomeSection({
      section: homeSections?.exclusiveSection,
    });
    // Extract relevant information from the fetched data
    const sectionInfo: HomeSectionAPI = data[0];
    const movieList: MovieAPI[] = sectionInfo?.movies;
    const firstMovie: MovieAPI = movieList[0];

    // Fetch details for the recommended movie
    const { data: firstMovieData }: { data: MovieDetailsAPI[] } =
      await fetchMovieDetails(firstMovie?.slug);

    const firstMovieDetails: MovieDetailsAPI = firstMovieData[0];

    // Render the ExclusiveSectionCard component with the fetched movie data
    return (
      <ExclusiveSectionCard
        titleBanner="Exclusiva"
        background={sectionInfo?.background}
        movieData={firstMovieDetails}
      />
    );
  } catch (error) {
    // Handle errors and throw an informative error message
    throw new Error(`Error fetching data for WeekMovieSection: ${error}`);
  }
}
