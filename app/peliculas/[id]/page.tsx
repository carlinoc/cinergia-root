import { Hero } from '@/app/ui/components/MovieDetails/Hero';
import { PeliculasPageProps } from '../PeliculasPage.model';

export default function page({ params }: PeliculasPageProps): JSX.Element {
  const movieId: string = params.id;
  return <Hero movieId={movieId} />;
}
