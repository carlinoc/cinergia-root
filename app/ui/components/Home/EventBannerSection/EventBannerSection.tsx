// Import necessary dependencies and types
import { fetchTrending } from '@/app/lib/data/data';
import { EventBannerSlider } from '@/app/ui/components/shared/Sliders/EventBannerSlider';

/**
 * EventBannerSection Component
 *
 * A React component that fetches trending movies and displays them in an event banner slider.
 *
 * @component
 * @returns {Promise<JSX.Element>} - Promise resolving to JSX element representing the EventBannerSection component.
 */
export async function EventBannerSection(): Promise<JSX.Element> {
  // Fetch trending movies using the fetchTrending function
  const { results: EventMovieListResults }: ResultsMoviesTypes =
    await fetchTrending();

  /**
   * Render the JSX for the EventBannerSection component
   */
  return (
    <EventBannerSlider
      eventTitle="Semana del cine"
      eventDate="Del 24 al 31 de Diciembre"
      eventDescription="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen."
      backgroundImageUrl="https://image.tmdb.org/t/p/original/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg"
      movieList={EventMovieListResults}
    />
  );
}
