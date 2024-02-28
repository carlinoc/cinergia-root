'use client';
// Import necessary dependencies and types
import { signIn, signOut, useSession } from 'next-auth/react';
import { useState, MouseEvent, TouchEvent, KeyboardEvent } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

/**
 * SessionSection Component
 *
 * A React component handling user session and displaying user information.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the SessionSection component.
 */

export function SessionSection(): JSX.Element {
  // Get user session data and status using NextAuth's useSession
  const { data: session, status } = useSession();
  const pathname = usePathname();

  // State to control the visibility of additional options
  const [openMoreOptions, setOpenMoreOptions] = useState<boolean>(false);

  /**
   * Handler for toggling the visibility of additional options.
   * @param {MouseEvent | TouchEvent | KeyboardEvent} e - The event triggering the function.
   */
  const handlerMoreOptions = (e: MouseEvent | TouchEvent | KeyboardEvent) => {
    e.stopPropagation();
    // Toggle the value of openMoreOptions
    setOpenMoreOptions(!openMoreOptions);
  };

  const handleSignin = () => {
    signIn();
  };

  // Show a loading indicator while checking the session status
  if (status === 'loading' && pathname !== '/auth/signin') {
    return (
      <div className="rounded-lg padding-button bg-dark-500 whitespace-nowrap ml-6 animate-pulse text-transparent">
        Iniciar sesión
      </div>
    );
  }

  return (
    <div className="h-full">
      {!session && pathname !== '/auth/signin' ? (
        <button
          type="button"
          className="button-secondary padding-button whitespace-nowrap ml-6"
          onClick={handleSignin}
        >
          Iniciar sesión
        </button>
      ) : null}
      {session ? (
        <section className="relative ml-6">
          <button
            type="button"
            className="flex justify-between items-center gap-1 text-2xl text-textColorNeutral-100 hover:text-textColorNeutral-50"
            onClick={(e) => handlerMoreOptions(e)}
          >
            <figure className="relative h-8 aspect-square">
              <Image
                fill
                sizes="(max-width: 640px) 100px, (max-width: 768px) 96px, 96px"
                src={session?.user?.image as string}
                alt={session?.user?.name as string}
                placeholder="blur"
                priority
                className="w-full h-full rounded-full"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
              />
            </figure>
            <div
              className={`transition-all ${openMoreOptions ? 'transform rotate-180' : ''}`}
            >
              {openMoreOptions ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
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
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-chevron-down"
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
                  <path d="M6 9l6 6l6 -6" />
                </svg>
              )}
            </div>
          </button>
          {openMoreOptions ? (
            <section className="absolute top-full right-0 min-w-80 max-w-lg pt-3">
              <section className="flex flex-col justify-center gap-4 w-full h-full px-3 py-4 rounded-lg shadow-lg bg-dark-800">
                <article className="flex flex-col justify-center w-full">
                  <span className="span-sm whitespace-nowrap capitalize text-textColorNeutral-50 font-medium">
                    {session?.user?.name}
                  </span>
                  <span className="span-xs whitespace-nowrap text-textColorNeutral-300">
                    {session?.user?.email}
                  </span>
                </article>
                <div className="w-full pt-4 border-t border-borderNeutral-50/10">
                  <button
                    type="button"
                    className="button-secondary padding-button flex items-center gap-3 w-full capitalize"
                    onClick={() => signOut()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-logout"
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
                      <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                      <path d="M9 12h12l-3 -3" />
                      <path d="M18 15l3 -3" />
                    </svg>
                    Cerrar Sesión
                  </button>
                </div>
              </section>
            </section>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
