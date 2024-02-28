'use client';
// Import necessary dependencies and types
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, MouseEvent, Dispatch, SetStateAction } from 'react';
// import { InputSearch } from '@/app/ui/components/shared/Inputs/InputSearch';
import useOnClickOutside from '@/app/lib/hooks/useOnClickOutside';
import { NavbarProps } from '../Navbar.model';
import Image from 'next/image';

/**
 * NavbarSM Component
 *
 * A React component representing the small screen version of the navigation bar. It includes a search input, a menu button, and a list of navigation links.
 *
 * @component
 * @param {Object} props - The properties of the NavbarSM component.
 * @param {NavbarProps[]} props.links - An array of objects representing navigation links, each with a name, href, and icon.
 * @param {Dispatch<SetStateAction<boolean>>} props.handleMyListState - A function to handle the state of MyListPreview visibility.
 * @param {boolean} props.myListState - The state of MyListPreview visibility.
 * @returns {JSX.Element} - JSX element representing the NavbarSM component.
 */
export function NavbarSM({
  links,
  handleMyListState,
  myListState,
}: {
  links: NavbarProps[];
  handleMyListState: Dispatch<SetStateAction<boolean>>;
  myListState: boolean;
}): JSX.Element {
  // State for controlling the visibility of the search input and menu
  // const [openSearch, setOpenSearch] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const { data: session } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  // Handler for toggling the menu
  const handleMenu = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setOpenMenu(!openMenu);
  };

  // Handler for toggling the search input
  // const handleSearch = (e: MouseEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   setOpenSearch(!openSearch);
  // };

  // Ref for handling clicks outside the menu
  const menuRef = useRef(null);

  // Hook to close menu and search on clicks outside
  useOnClickOutside(menuRef, () => {
    setOpenMenu(false);
    // setOpenSearch(false);
  });

  // Handler for toggling MyListPreview visibility
  const handleMyList = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleMyListState(!myListState);
  };

  // Handler for navigating to a link
  const handleLink = (e: MouseEvent<HTMLButtonElement>, link: string) => {
    e.preventDefault();
    router.push(link);
    setOpenMenu(!openMenu);
  };

  const handleSignin = () => {
    signIn();
  };

  /**
   * Render the JSX for the NavbarSM component
   */
  return (
    <section ref={menuRef} className="lg:hidden flex items-center gap-2">
      {/* Search button */}
      {/* <button
        type="button"
        className="button-text padding-icon"
        title="Buscar"
        aria-label="Search"
        onClick={(e) => handleSearch(e)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </button> */}
      {/*My list button*/}
      {session ? (
        <button
          type="button"
          className="button-text padding-icon"
          title="Mi lista"
          aria-label="Mi lista"
          onClick={handleMyList}
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
        </button>
      ) : null}
      {/* Menu button */}
      <button
        type="button"
        className={`button-text padding-icon transition-all duration-300 transform ${
          openMenu ? 'rotate-90' : ''
        }`}
        title={!openMenu ? 'Menu' : 'Cerrar'}
        aria-label="Menu"
        onClick={handleMenu}
      >
        {!openMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-deep"
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
            <path d="M4 6h16" />
            <path d="M7 12h13" />
            <path d="M10 18h10" />
          </svg>
        ) : (
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
        )}
      </button>
      {/* "Inicio de Sesión" button */}
      {!session && pathname !== '/auth/signin' ? (
        <button
          type="button"
          className="button-text padding-icon"
          title="Iniciar Sesión"
          aria-label="Iniciar Sesión"
          onClick={handleSignin}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-login-2"
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
            <path d="M9 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
            <path d="M3 12h13l-3 -3" />
            <path d="M13 15l3 -3" />
          </svg>
        </button>
      ) : null}
      {/* Search input section */}
      {/* <article
        aria-hidden={!openSearch}
        aria-live="assertive"
        className={`absolute inset-0 flex justify-center items-center bg-bgPrimaryDark p-2 transform transition-all ${
          !openSearch ? '-translate-y-[110%]' : ''
        }`}
      >
        <div className="flex justify-center items-center gap-2 w-full">
          <InputSearch variant="SM" />
          <button
            type="button"
            className="button-text padding-icon"
            title="Cerrar búsqueda"
            aria-label="Cerrar búsqueda"
            onClick={(e) => handleSearch(e)}
          >
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
          </button>
        </div>
      </article> */}
      {/* Menu section */}
      <article
        aria-hidden={!openMenu}
        aria-live="assertive"
        className={`fixed inset-x-0 top-0 bg-bgSecondaryDark mt-16 px-4 pt-2 pb-6
       transform transition-all  ${!openMenu ? 'translate-x-full' : ''}`}
      >
        <div className="w-full">
          {/* User profile section */}
          {session ? (
            <section className="flex items-center gap-3 w-full px-2 py-3 rounded-lg bg-dark-800/20">
              {/* User image */}
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
              <article className="flex flex-col justify-centerw-full">
                {/* User name */}
                <span className="span-sm whitespace-nowrap capitalize text-textColorNeutral-50 font-medium">
                  {session?.user?.name}
                </span>
                {/* User email */}
                <span className="span-xs whitespace-nowrap text-textColorNeutral-400">
                  {session?.user?.email}
                </span>
              </article>
            </section>
          ) : null}
          <ul className="flex flex-col items-center gap-4 w-full divide-y divide-borderNeutral-50/10">
            {/* Map through the array of navigation links */}
            {links.map((link) => (
              <li
                key={`Navbar-link-${link.name}`}
                className="navbar-item-sm w-full"
              >
                {/* Link to the specified href */}
                <button
                  type="button"
                  className="flex items-center gap-3 w-full pt-4 capitalize"
                  onClick={(e) => handleLink(e, link?.href)}
                >
                  {/* Display the link icon and name */}
                  {link?.icon}
                  {link?.name}
                </button>
              </li>
            ))}
            {/* Logout button for authenticated users */}
            {session ? (
              <li className="navbar-item-sm w-full">
                <button
                  type="button"
                  className="flex items-center gap-3 w-full pt-4 capitalize"
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
              </li>
            ) : null}
          </ul>
          <section className="flex w-full"></section>
        </div>
      </article>
    </section>
  );
}
