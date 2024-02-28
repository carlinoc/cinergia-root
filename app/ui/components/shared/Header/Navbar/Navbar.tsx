'use client';
// Import necessary dependencies and types
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { NavbarSM } from '@/app/ui/components/shared/Header/Navbar/NavbarSM';
import { NavbarLG } from '@/app/ui/components/shared/Header/Navbar/NavbarLG';
import { NavbarProps } from './Navbar.model';
import { MyListPreview } from './MyListPreview';
import cinergiaLogo from '@/public/cinergiaLogoWeb1.svg';
import { routesPaths } from '@/app/routes/routes';

/**
 * Navbar Component
 *
 * A React component representing the navigation bar of the application. It includes both small and large versions of the navbar
 * for responsive design. The component receives an array of navigation links with names, hrefs, and icons to be displayed.
 *
 * @component
 * @param {Object} props - The properties of the Navbar component.
 * @param {TrendingMovieType[]} props.myListData - An array of trending movie data.
 * @returns {JSX.Element} - JSX element representing the Navbar component.
 */
export function Navbar(): JSX.Element {
  const { data: session } = useSession();
  // State to manage the visibility of the MyListPreview component
  const [openMyList, setOpenMyList] = useState<boolean>(false);

  // Effect to handle the body overflow when MyListPreview is open
  useEffect(() => {
    if (openMyList) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [openMyList]);

  // Define an array of navigation links with names, hrefs, and icons
  const links: NavbarProps[] = [
    {
      name: 'Inicio',
      href: routesPaths?.home,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-home"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
          <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
          <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
        </svg>
      ),
    },
    {
      name: 'contenido',
      href: routesPaths?.content,
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-movie"
          width={20}
          height={20}
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
          <path d="M8 4l0 16" />
          <path d="M16 4l0 16" />
          <path d="M4 8l4 0" />
          <path d="M4 16l4 0" />
          <path d="M4 12l16 0" />
          <path d="M16 8l4 0" />
          <path d="M16 16l4 0" />
        </svg>
      ),
    },
    // Add more links as needed
  ];

  /**
   * Render the JSX for the Navbar component
   */
  return (
    <nav className="relative flex justify-center items-center w-full h-16 lg:h-[4.5rem] border-b border-borderNeutral-50/10 bg-bgPrimaryDark/50">
      <div className="relative flex justify-between items-center w-full h-full p-4 backdrop-blur-md">
        {/* Application logo */}
        <Link
          href={routesPaths?.home}
          className="flex justify-center items-center gap-2 h-full"
        >
          <figure className="relative w-28 md:w-32 h-full">
            <Image
              fill
              sizes="100%"
              src={cinergiaLogo}
              alt={'Logo Cinergia'}
              placeholder="blur"
              priority
              className="w-full h-full"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            />
          </figure>
          {/* <span className="span-lg text-4xl font-bold text-neutral-50">
            CINERGIA
          </span> */}
        </Link>

        {/* Small screen navbar */}
        <NavbarSM
          links={links}
          handleMyListState={setOpenMyList}
          myListState={openMyList}
        />
        {/* Large screen navbar */}
        <NavbarLG
          links={links}
          handleMyListState={setOpenMyList}
          myListState={openMyList}
        />
      </div>
      {session ? (
        <section
          aria-hidden={!openMyList}
          aria-live="assertive"
          className={`fixed inset-0 flex justify-end w-full h-screen transform transition-all duration-500 ease-in-out ${
            !openMyList ? 'translate-x-full' : ''
          }`}
        >
          {/* MyListPreview component */}
          <MyListPreview
            handleMyListState={setOpenMyList}
            myListState={openMyList}
          />
        </section>
      ) : null}
    </nav>
  );
}
