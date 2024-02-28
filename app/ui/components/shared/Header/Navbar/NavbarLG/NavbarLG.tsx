'use client';
// Import necessary dependencies and types
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { Dispatch, MouseEvent, SetStateAction } from 'react';
// import { InputSearch } from '@/app/ui/components/shared/Inputs/InputSearch';
import { NavbarProps } from '../Navbar.model';
import { SessionSection } from './SessionSection';

/**
 * NavbarLG Component
 *
 * A React component representing the large screen version of the navigation bar. It includes an input search bar and a list of navigation links.
 *
 * @component
 * @param {Object} props - The properties of the NavbarLG component.
 * @param {NavbarProps[]} props.links - An array of objects representing navigation links, each with a name, href, and icon.
 * @param {Dispatch<SetStateAction<boolean>>} props.handleMyListState - A function to handle the state of MyListPreview visibility.
 * @param {boolean} props.myListState - The state of MyListPreview visibility.
 * @returns {JSX.Element} - JSX element representing the NavbarLG component.
 */
export function NavbarLG({
  links,
  handleMyListState,
  myListState,
}: {
  links: NavbarProps[];
  handleMyListState: Dispatch<SetStateAction<boolean>>;
  myListState: boolean;
}): JSX.Element {
  const { data: session } = useSession();

  // Handler for toggling MyListPreview visibility
  const handleMyList = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleMyListState(!myListState);
  };
  /**
   * Render the JSX for the NavbarLG component
   */
  return (
    <>
      {/* Search bar section */}
      {/* <section className="hidden lg:flex w-full max-w-md">
        <InputSearch />
      </section> */}
      {/* Navigation links section */}
      <section className="hidden lg:flex justify-center items-center w-auto">
        <ul className="flex justify-center items-center gap-6 w-full">
          {/* Map through the array of navigation links */}
          {links.map((link) => (
            <li
              key={`Navbar-link-${link?.name}`}
              className="navbar-item-lg w-full capitalize"
            >
              {/* Link to the specified href */}
              <Link
                className="flex items-center gap-2"
                href={link?.href}
                title={link?.name}
              >
                {/* Display the link icon and name */}
                {link?.icon}
                {link?.name}
              </Link>
            </li>
          ))}
          {/*My List button */}
          {session ? (
            <li className="navbar-item-lg w-full capitalize">
              <button
                type="button"
                className="flex items-center gap-2 whitespace-nowrap"
                title={'Mi lista'}
                aria-label="Mi lista"
                onClick={(e) => handleMyList(e)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-list-details"
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
                  <path d="M13 5h8" />
                  <path d="M13 9h5" />
                  <path d="M13 15h8" />
                  <path d="M13 19h5" />
                  <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                  <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                </svg>
                <span className="hidden lg:inline-block navbar-item-lg">
                  Mi Lista
                </span>
              </button>
            </li>
          ) : null}
        </ul>
        <SessionSection />
      </section>
    </>
  );
}
