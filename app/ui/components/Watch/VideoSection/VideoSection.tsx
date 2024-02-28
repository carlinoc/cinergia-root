import { Header } from '@/app/ui/components/Watch/VideoSection/Header';
import { VideoPlayer } from '@/app/ui/components/shared/VideoPlayer';
import { VideoSectionProps } from './VideoSection.model';

/**
 * VideoSection Component
 *
 * The VideoSection component displays a video section for a specific movie.
 * It includes a header with information about the movie and a video player for playback.
 *
 * @component
 * @param {Object} props - The properties object containing movieData.
 * @param {Object} props.movieData - The movie data object containing information about the movie.
 * @returns {JSX.Element} - JSX element representing the VideoSection component.
 * @example
 * // Usage in a parent component
 * import { VideoSection } from '@/app/ui/components/Watch/VideoSection';
 *
 * const MovieDetailsPage = ({ movieData }) => {
 *   return <VideoSection movieData={movieData} />;
 * };
 *
 * export default MovieDetailsPage;
 */
export function VideoSection({ movieData }: VideoSectionProps) {
  const { urlId } = movieData;

  return (
    <section className="flex flex-col justify-center items-center w-full">
      <article className="overflow-hidden relative w-11/12 md:w-9/12 rounded-sm border border-borderNeutral-50/10">
        <section className="lg:z-10 lg:absolute lg:top-0 lg:inset-x-0 w-full p-4 bg-gradient-to-b from-bgPrimaryDark/50 via-bgPrimaryDark/20 lg:to-transparent">
          <Header movieData={movieData} />
        </section>
        <article className="w-full aspect-video">
          <VideoPlayer
            src={`https://muse.ai/embed/${urlId}?search=0&links=0&logo=0&title=0&cover_play_position=center&autoplay=1`}
            allowFullScreen
          />
        </article>
      </article>
    </section>
  );
}
