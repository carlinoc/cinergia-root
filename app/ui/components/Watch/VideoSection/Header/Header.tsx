'use client';
import { useRouter } from 'next/navigation';
import { HeaderProps } from './Header.model';

/**
 * Header Component
 *
 * The Header component displays information about a movie, including its name, age rating, and a close button.
 *
 * @component
 * @param {Object} props - The properties object containing movieData.
 * @param {Object} props.movieData - The movie data object containing information about the movie.
 * @returns {JSX.Element} - JSX element representing the Header component.
 * @example
 * // Usage in a parent component
 * import { Header } from '@/app/ui/components/Watch/VideoSection/Header';
 *
 * const MovieDetailsPage = ({ movieData }) => {
 *   return <Header movieData={movieData} />;
 * };
 *
 * export default MovieDetailsPage;
 */

export function Header({ movieData }: HeaderProps) {
  const { name, agerates } = movieData;
  const { name: agerate, range } = agerates[0];
  const router = useRouter();

  const handleToBack = () => {
    router.back();
  };

  return (
    <section className="z-10 overflow-hidden flex justify-center items-center w-full pl-4 border-l-4 border-accent-600">
      <article className="flex justify-between items-center gap-3 w-full">
        <div className="flex flex-col justify-center w-full fade-right">
          <h1 className="heading-5 md:heading-4 font-bold text-textColorNeutral-50">
            {name}
          </h1>
          <span className="span-xs md:span-sm text-textColorNeutral-50">
            <span className="font-semibold">{agerate} </span>
            {range}
          </span>
        </div>
        <button
          type="button"
          className="button-secondary padding-icon"
          title="Cerrar"
          aria-label="Cerrar"
          onClick={handleToBack}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-x "
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </article>
    </section>
  );
}
