/* eslint-disable @typescript-eslint/ban-ts-comment */
'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { PlayButtonProps } from '../HeroCard.model';

/**
 * PlayButton Component
 * @param {PlayButtonProps} props - The properties of the PlayButton component.
 * @returns {JSX.Element} - The rendered PlayButton component.
 */

enum PaymentType {
  totalPay = 'PT',
  mandatoryDonation = 'DO',
  voluntaryDonation = 'DV',
  free = null,
}
export function PlayButton({
  movieData,
  userMovieList,
  isLoading,
  handlePay,
}: PlayButtonProps): JSX.Element {
  const { slug, payment_type } = movieData;
  const { data: session, status } = useSession();
  const router = useRouter();

  /**
   * Handles the click event based on the payment type and user session.
   * Navigates to the appropriate route.
   */
  const handleClick = () => {
    // If no payment type is selected, navigate to free watch route.
    if (payment_type === PaymentType.free) {
      router.push(`/peliculas/watch-free/${slug}`);
    }
    // If payment type is 'DO' or 'PT'
    else if (
      payment_type === PaymentType.totalPay ||
      payment_type === PaymentType.mandatoryDonation
    ) {
      // If the user is logged in, navigate to the regular watch route.j
      if (session) {
        if (userMovieList.length > 0) {
          const movieExists = userMovieList.some((obj) => obj.slug === slug);
          if (movieExists) {
            router.push(`/peliculas/watch/${slug}`);
          } else {
            // Pay for the movie
            handlePay();
          }
        } else {
          // Pay for the movie
          handlePay();
        }
        // If the user is not logged in, prompt sign-in.
      } else {
        signIn();
      }
    }
  };

  if (isLoading || status === 'loading') {
    return (
      <svg
        aria-hidden="true"
        className="inline w-12 aspect-square text-customNeutral-50/30 fill-primary-500 animate-spin"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    );
  }

  return (
    <>
      <button
        type="button"
        title="Reproducir"
        className={`button-outlined p-4 w-20 aspect-square rounded-full ring-customNeutral-200 md:hover:ring-customNeutral-50 hover:bg-dark-900/30 md:hover:bg-primary-500 md:hover:scale-110 transition ease-in-out duration-300 ${isLoading ? 'opacity-10 animate-pulse' : ''}`}
        onClick={handleClick}
        disabled={isLoading}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-player-play-filled h-full w-full aspect-square"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z"
            strokeWidth={0}
            fill="currentColor"
          />
        </svg>
      </button>
    </>
  );
}
