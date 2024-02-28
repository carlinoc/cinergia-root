// Movie types
interface MovieAPI {
  id: number; // Unique identifier for the movie
  name: string; // Movie name
  slug: string; // URL-friendly version of the movie name
  releaseYear: Date; // Release year of the movie
  image1: string; // URL for the first image
  image2: string; // URL for the second image
  poster1: string; // URL for the first poster image
  poster2: string; // URL for the second poster image
}

// Movie List API types
interface MovieListAPI {
  data: MovieAPI[]; // Array of MovieAPI objects
}

interface MovieDetailsObjAPI {
  data: MovieDetailsAPI;
}

// Movie Details API types
interface MovieDetailsAPI {
  id: number; // Unique identifier for the movie
  name: string; // Movie name
  slug: string; // URL-friendly version of the movie name
  release_year: Date; // Release year of the movie
  description: string; // Movie description
  duration: number; // Duration of the movie in minutes
  price: string; // Price of the movie
  trailer: string; // URL for the movie trailer
  urlId: string; // Unique identifier for the movie URL
  whySee: string; // Reason to watch the movie
  payment_type: PaymentType; // Payment type: 'PT' (Purchase), 'DO' (Donation), 'DV' (Dividend), or null
  created_at: Date; // Timestamp of when the movie details were created
  agerates: AgerateAPI[]; // Array of AgerateAPI objects
  category: string; // Movie category
  director: DirectorAPI[]; // Array of DirectorAPI objects
  genres: string[]; // Array of genre names
  image1: string; // URL for the first image
  image2: string; // URL for the second image
  poster1: string; // URL for the first poster image
  poster2: string; // URL for the second poster image
  languages: LanguageAPI[]; // Array of LanguageAPI objects
}

interface AgerateAPI {
  id: number; // Unique identifier for the agerates
  name: string; // Agerate name
  range: string; // Agerate range
}

interface DirectorAPI {
  id: number; // Unique identifier for the director
  firstName: string; // Director's first name
  lastName: string; // Director's last name
}

interface LanguageAPI {
  id: number; // Unique identifier for the language
  name: string; // Language name
}

enum PaymentType {
  totalPay = 'PT',
  mandatoryDonation = 'DO',
  voluntaryDonation = 'DV',
  free = null,
}

// Home Section API types
interface HomeSectionAPI {
  id: number; // Unique identifier for the home section
  name: string; // Home section name
  description: string | null; // Home section description (nullable)
  background: string; // URL for the home section background image
  movies: MovieAPI[]; // Array of MovieAPI objects associated with the home section
}

interface HomeSectionRequestAPI {
  data: HomeSectionAPI[]; // Array of HomeSectionAPI objects
}

// Free Shorts List API types
interface FreeShortsRequestAPI {
  data: MovieAPI[]; // Array of MovieAPI objects for free shorts
}

// Genres List API types
interface GenresListAPI {
  id: number; // Unique identifier for the genre
  name: string; // Genre name
  slug: string; // URL-friendly version of the genre name
  description: null | string; // Genre description (nullable)
  created_at: Date; // Timestamp of when the genre was created
  updated_at: Date; // Timestamp of when the genre was last updated
}

interface GenresRequestAPI {
  data: GenresListAPI[]; // Array of GenresListAPI objects
}

// Movie List by Genre API types
interface GenreInfoAPI {
  id: number; // Unique identifier for the genre
  name: string; // Genre name
  description: string | null; // Genre description (nullable)
  movies: MovieAPI[] | null; // Array of MovieAPI objects associated with the genre (nullable)
}

interface MoviesDataForGenresRequestAPI {
  data: GenreInfoAPI[]; // Array of GenreInfoAPI objects
}

// User API types
interface UserDataAPI {
  created_at?: Date; // Timestamp of when the user data was created (nullable)
  email: string; // User's email address
  id: number; // Unique identifier for the user
  movies?: MovieUserList[]; // Array of MovieUserList objects associated with the user (nullable)
  name: string; // User's name
  image: string; // URL for the user's profile image
}

interface UserDataRequestAPI {
  data: UserDataAPI[]; // Array of UserDataAPI objects
}

interface MovieUserList {
  id: number; // Unique identifier for the movie user list entry
  name: string; // Movie name
  slug: string; // URL-friendly version of the movie name
  releaseYear: string; // Release year of the movie
  date_start: string; // Start date of the user's interaction with the movie
  date_end: string; // End date of the user's interaction with the movie
  transactionId: string; // Unique identifier for the transaction associated with the movie
  image1: string; // URL for the first image
  image2: string; // URL for the second image
  poster1: string; // URL for the first poster image
  poster2: string; // URL for the second poster image
}

/////////////////////////////////////////////
enum MediaType {
  Movie = 'movie',
  Tv = 'tv',
}

interface DataType {
  page: number;
  results: TrendingMovieType[];
  total_pages: number;
  total_results: number;
}

interface TrendingMovieType {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: string;
  origin_country?: string[];
}

interface MovieType extends TrendingMovieType {
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
}

interface Genre {
  id: number;
  name: string;
}

interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface ResultsTrendingTypes {
  results: TrendingMovieType[];
}
interface ResultsMoviesTypes {
  results: MovieType[];
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

interface VideoList {
  id: number;
  results: Video[];
}
