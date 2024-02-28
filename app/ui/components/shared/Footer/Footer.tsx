import Image from 'next/image';
import cinergiaLogo from '@/public/cinergiaLogoWeb2.svg';

/**
 * Footer Component
 *
 * A React component representing the footer of the application.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the Footer component.
 */
export function Footer(): JSX.Element {
  return (
    <footer
      id="footer"
      className="w-full bg-bgSecondaryDark border-t-[1px] border-borderNeutral-500"
    >
      <div className="flex justify-center items-center w-full h-full py-16 border-b-[4rem] border-bgPrimaryDark">
        <div className="flex flex-col justify-center items-center gap-4 w-11/12 md:w-10/12 h-full">
          <figure className="relative h-20 aspect-square">
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
          <div>
            <div className="flex flex-col justify-center items-center gap-2 w-full h-full text-center">
              <span className="span-base text-textColorNeutral-400 w-full">
                © 2023 Cinergia, Todos los derechos reservados.
              </span>
              <a
                href=""
                className="span-base text-neutral-50 hover:text-primary-500 w-full"
              >
                Términos y Condiciones
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
