export interface PeliculasPageProps {
  params: {
    id: string;
  };
}

export interface WatchPageProps extends PeliculasPageProps {}
export interface WatchFreePageProps extends PeliculasPageProps {}
