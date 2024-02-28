enum RoutePath {
  Home = '/',
  SignIn = '/auth/signin',
  AuthGoogle = '/auth/google',
  Content = '/contenido',
  Movies = '/peliculas',
  Watch = '/peliculas/watch',
  WatchFree = '/peliculas/watch-free',
  Genres = '/generos',
}

export const routesPaths = {
  home: RoutePath.Home,
  signin: RoutePath.SignIn,
  authGoogle: RoutePath.AuthGoogle,
  content: RoutePath.Content,
  movies: RoutePath.Movies,
  watch: RoutePath.Watch,
  watchFree: RoutePath.WatchFree,
  genres: RoutePath.Genres,
};
