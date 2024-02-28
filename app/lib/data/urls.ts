/**
 * Base URL for CDN images.
 * @constant {string} CDN_IMAGES_BASE_URL
 */
export const CDN_IMAGES_BASE_URL = 'https://cdn.cinergia.lat/';

/**
 * URL to fetch the list of movies.
 * @constant {string} MOVIE_LIST_URL
 * @example `${process.env.API_URL}api/movies?top=${top}`
 */
export const MOVIE_LIST_URL = `${process.env.API_URL}api/movies`;

/**
 * URL to fetch details of a specific movie.
 * @constant {string} MOVIE_DETAIL_URL
 * @example `${process.env.API_URL}api/movies/{movieSlug}`
 */
export const MOVIE_DETAIL_URL = `${process.env.API_URL}api/movies/`;

/**
 * URL to fetch the home section data.
 * @constant {string} HOME_SECTION_URL
 * @example `${process.env.API_URL}api/homesection/{section}`
 */
export const HOME_SECTION_URL = `${process.env.API_URL}api/homesection/`;

/**
 * URL to fetch the list of free shorts.
 * @constant {string} FREE_SHORTS_LIST_URL
 * @example `${process.env.API_URL}api/freeshorts`
 */
export const FREE_SHORTS_LIST_URL = `${process.env.API_URL}api/freeshorts`;

/**
 * URL to fetch the list of genres or categories.
 * @constant {string} GENRES_LIST_URL
 * @example `${process.env.API_URL}api/{list}` where list can be 'genres' or 'categories'
 */
export const GENRES_LIST_URL = `${process.env.API_URL}api/`;

/**
 * URL to fetch the list of movies for a specific genre.
 * @constant {string} MOVIE_LIST_FOR_GENRE_URL
 * @example `${process.env.API_URL}api/movies-genre/${genreSlug}?top=${top}`
 */
export const MOVIE_LIST_FOR_GENRE_URL = `${process.env.API_URL}api/movies-genre/`;

/**
 * URL to fetch user data.
 * @constant {string} USER_DATA_URL
 * @example `${process.env.NEXT_PUBLIC_API_URL}api/clients?email=${email}`
 */
export const USER_DATA_URL = `${process.env.API_URL || process.env.NEXT_PUBLIC_API_URL}api/clients`;

/**
 * API URLs for Cinergia application.
 * @typedef {Object} ApiUrls
 * @property {string} CDN_IMAGES_BASE_URL - Base URL for CDN images.
 * @property {string} MOVIE_LIST_URL - URL to fetch the list of movies.
 * @property {string} MOVIE_DETAIL_URL - URL to fetch details of a specific movie.
 * @property {string} HOME_SECTION_URL - URL to fetch the home section data.
 * @property {string} FREE_SHORTS_LIST_URL - URL to fetch the list of free shorts.
 * @property {string} GENRES_LIST_URL - URL to fetch the list of genres or categories.
 * @property {string} MOVIE_LIST_FOR_GENRE_URL - URL to fetch the list of movies for a specific genre.
 * @property {string} USER_DATA_URL - URL to fetch user data.
 */
