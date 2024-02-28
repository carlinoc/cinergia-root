/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Extracts values from an array of objects based on a specified key.
 *
 * @param {Object} params - The parameters for the extraction.
 * @param {Array} params.array - The array of objects from which to extract values.
 * @param {string} params.key - The key used to extract values from each object in the array.
 * @returns {Array<string | number>} - An array of strings or numbers containing the extracted values.
 *
 * @example
 * const myArray = [
 *   { id: 6704, logo_path: "/fOG2oY4m1YuYTQh4bMqqZkmgOAI.png", name: "Illumination", origin_country: "US" },
 *   // other objects...
 * ];
 * const resultValues = extractValuesByKey({ array: myArray, key: "name" });
 * console.log(resultValues); // Output: ["Illumination", ...]
 */
interface ExtractValuesByKey {
  array: Array<any>;
  key: string;
}

export const extractValuesByKey = ({ array, key }: ExtractValuesByKey) => {
  // Map each object in the array and extract the value corresponding to the provided key
  const valuesArray = array.map((item) => item[key]);

  // Return the values as an array of strings or numbers
  return valuesArray.join(', ');
};

export const extractValuesGenre = ({
  genre_movie,
  key,
}: {
  genre_movie: Array<any>;
  key: string;
}) => {
  // Map each object in the array and extract the 'name' property from the 'genres' object
  const valuesArray = genre_movie.map((item) => {
    // Check if the key exists in the object
    if (key in item) {
      const genres = item[key];

      // Check if 'genres' is an array and has at least one element
      if (Array.isArray(genres) && genres.length > 0) {
        const firstGenre = genres[0];

        // Check if the first element has a 'name' property
        if (
          typeof firstGenre === 'object' &&
          firstGenre !== null &&
          'name' in firstGenre
        ) {
          // Return the 'name' property of the 'genres' object
          return firstGenre.name;
        }
      }
    }

    // If any condition fails, return undefined
    return undefined;
  });

  // Filter out undefined values and return the result as an array of strings
  return valuesArray.filter((value) => value !== undefined);
};
