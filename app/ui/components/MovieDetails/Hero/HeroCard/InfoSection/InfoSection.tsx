'use client';
import {
  useState,
  MouseEvent,
  TouchEvent,
  KeyboardEvent,
  useEffect,
} from 'react';
import { VideoPlayerModal } from '@/app/ui/components/shared/Modals/VideoPlayerModal';
import { convertMinutesToHours } from '@/app/lib/utils/convertMinutesToHours';
import { extractValuesByKey } from '@/app/lib/utils/extractValuesByKey';
import { InfoSectionProps } from '../HeroCard.model';
import { VideoPlayer } from '@/app/ui/components/shared/VideoPlayer';

/**
 * InfoSection Component
 *
 * The InfoSection component displays detailed information about a movie, including title,
 * production details, genres, release date, runtime, spoken languages, and a button to
 * view the movie trailer.
 *
 * @component
 * @param {InfoSectionProps} props - Props for configuring the InfoSection component.
 * @param {MovieType} props.movieData - Movie data used to populate the information.
 * @param {VideoList} props.videos - List of videos related to the movie.
 * @returns {JSX.Element} - JSX element representing the InfoSection component.
 *
 */

export function InfoSection({ movieData }: InfoSectionProps): JSX.Element {
  const {
    name,
    description,
    whySee,
    duration,
    trailer,
    languages,
    genres,
    director,
    release_year,
    category,
  } = movieData;

  const [openModal, setOpenModal] = useState<boolean>(false);
  const [date, setDate] = useState<number>(0);

  useEffect(() => {
    const year = new Date(release_year).getFullYear();
    return setDate(year);
  }, [release_year]);

  // const productionCompanies = extractValuesByKey({
  //   array: production_companies,
  //   key: 'name',
  // });
  // const productionCountries = extractValuesByKey({
  //   array: production_countries,
  //   key: 'name',
  // });
  const genreList = genres.join(', ');
  const languagesList = extractValuesByKey({ array: languages, key: 'name' });
  const directorList = director
    .map((item: DirectorAPI) => `${item?.firstName} ${item?.lastName}`)
    .join(', ');

  const detailsMovieList = [
    {
      name: 'type',
      data: 'Película',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-device-tv"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
          <path d="M16 3l-4 4l-4 -4" />
        </svg>
      ),
    },
    {
      name: 'runtime',
      data: convertMinutesToHours(duration),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-clock"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M12 7v5l3 3" />
        </svg>
      ),
    },
    {
      name: 'release_date',
      data: date,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-calendar-event"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M16 3l0 4" />
          <path d="M8 3l0 4" />
          <path d="M4 11l16 0" />
          <path d="M8 15h2v2h-2z" />
        </svg>
      ),
    },
    {
      name: 'spoken_lenguages',
      data: languagesList,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-volume"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M15 8a5 5 0 0 1 0 8" />
          <path d="M17.7 5a9 9 0 0 1 0 14" />
          <path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" />
        </svg>
      ),
    },
  ];

  const handleOpenModal = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
    e.preventDefault();
    setOpenModal(true);
  };

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        <section className="col-span-1 flex flex-col gap-4 w-full h-full">
          <article className="flex flex-col justify-center gap-2 w-full h-auto text-textColorNeutral-50">
            <div className="w-full leading-4">
              <h2 className="heading-5 font-extrabold">{name}</h2>
              <span className="span-xs px-1.5 py-0.5 mb-4 rounded-r-full bg-primary-600 text-textColorNeutral-50 font-medium">
                {category}
              </span>
              <span className="inline-block w-full pt-2 span-xs font-semibold">
                Dirigido por:
                <span className="font-normal">{` ${directorList}`}</span>
              </span>
            </div>
            <span className="span-sm font-medium text-customNeutral-300">
              {genreList}
            </span>
            <div className="flex items-center gap-2 flex-wrap w-full pb-4 border-b border-borderNeutral-50/50 span-sm text-textColorNeutral-300 font-medium">
              {detailsMovieList.map((item) => (
                <span
                  key={`detail-${item?.name}`}
                  className="flex justify-center items-center gap-1 text-nowrap"
                >
                  {item?.icon}
                  {item?.data}
                </span>
              ))}
            </div>
          </article>
          {trailer ? (
            <article className="flex flex-col md:flex-row gap-4 w-full">
              <button
                type="button"
                className="button-outlined padding-button w-full md:w-fit"
                onClick={(e) => handleOpenModal(e)}
              >
                Ver Trailer
              </button>
            </article>
          ) : null}
        </section>
        <section className="hidden col-span-1 lg:col-span-2 self-end md:grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          <article className="md:col-span-1 lg:col-span-1 w-full">
            <span className="span-base font-semibold text-textColorNeutral-50">
              Sinopsis
            </span>
            <p className="paragraph-sm line-clamp-[7] font-normal text-textColorNeutral-100">
              {description || ''}
            </p>
          </article>
          <article className="md:col-span-1 lg:col-span-1 w-full">
            <span className="span-base font-semibold text-textColorNeutral-50">
              Por qué verla
            </span>
            <p className="paragraph-sm line-clamp-[7] font-normal text-textColorNeutral-100">
              {whySee || ''}
            </p>
          </article>
        </section>
      </section>

      {openModal ? (
        <VideoPlayerModal
          openModalState={openModal}
          handleOpenModal={setOpenModal}
        >
          <VideoPlayer
            src={`https://www.youtube.com/embed/${trailer}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </VideoPlayerModal>
      ) : null}
    </>
  );
}
