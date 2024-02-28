// Import necessary dependencies and types
import React from 'react';
import { HeroCard } from '@/app/ui/components/Content/Hero/HeroCard';
import { fetchHomeSection, fetchMovieDetails } from '@/app/lib/data/fetch';
import { homeSections } from '@/app/lib/lists/homeSectionSlugs';

/**
 * Fetches trending movies and renders the HeroCard component.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to the rendered HeroCard component with trending movies.
 * @throws {Error} - Throws an error if there's an issue fetching data for the Hero component.
 */
export async function Hero(): Promise<JSX.Element> {
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
     * Render the JSX for the Hero component
     */
    return (
      <HeroCard
        firstMovieDetails={firstMovieDetails}
        movieList={movieListReverse}
        listSlug={listSlug}
      />
    );
  } catch (error) {
    // Handle errors and throw an informative error message
    throw new Error(`Error fetching data for Hero component: ${error}`);
  }
}
