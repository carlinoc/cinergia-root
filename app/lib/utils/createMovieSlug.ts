/**
 * Creates a unique slug for a movie based on its id and title.
 *
 * @param {Object} movie - Object representing a movie.
 * @param {number} movie.id - The unique ID of the movie.
 * @param {string | undefined} movie.title - The title of the movie (optional).
 * @returns {string} - The generated slug for the movie.
 */
interface CreateMovieSlug {
  id: number;
  title?: string;
}
const createMovieSlug = ({
  id,
  title = 'No Title',
}: CreateMovieSlug): string => {
  /**
   * Converts the title to lowercase and replaces spaces with hyphens.
   * @param {string} title - The title of the movie.
   * @returns {string} - The formatted title.
   */
  const formatTitle = (title: string): string =>
    title.toLowerCase().replace(/\s+/g, '-');

  // Generates the slug by combining the ID and formatted title.
  return `${id}-${formatTitle(title)}`;
};

export default createMovieSlug;
