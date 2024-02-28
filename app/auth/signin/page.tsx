'use client';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import siningCover from '/public/images/siningCover.jpg';
import cinergiaLogo from '/public/cinergiaLogoWeb3.svg';
import { popupCenter } from '@/app/lib/utils/popupCenter';
import { useEffect } from 'react';
import { validateUser } from '@/app/lib/data/createUser';
import { routesPaths } from '@/app/routes/routes';

/**
 * SignInPage Component
 *
 * The SignInPage component represents the login page for the application.
 * It allows users to sign in using their Google accounts and provides a visually appealing
 * interface with background images, Cinergia logo, and a Google sign-in button.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the SignInPage component.
 * @example
 * // Usage in a parent component or route
 * import SignInPage from '@/app/ui/components/SignInPage';
 * //...
 * return (
 *   <SignInPage />
 * );
 */
export default function SignInPage(): JSX.Element {
  /**
   * Handles the sign-in process using the Google authentication provider.
   * Retrieves the previous path from sessionStorage for redirection after successful sign-in.
   */

  // Use next-auth/react hook to get session information
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (session) {
        await validateUser({ user: session.user as UserDataAPI });
        router.back();
      }
    };
    fetchData();
  }, [router, session]);

  // Function to handle Google sign-in
  const handleSigninGoogle = () => {
    popupCenter(routesPaths?.authGoogle, 'Iniciar sesión');
  };

  // Loading state while checking for session information
  if (status === 'loading') {
    return (
      <div className="z-[60] fixed inset-0 w-screen h-screen flex flex-col justify-center items-center bg-bgPrimaryDark">
        <div
          role="status"
          className="flex justify-center items-center gap-4 w-full"
        >
          <svg
            aria-hidden="true"
            className="inline w-10 h-10text-gray-200 animate-spin dark:text-customNeutral-600 fill-primary-500"
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
        </div>
      </div>
    );
  }

  return (
    <div className="z-[60] fixed inset-0 w-screen lg:h-screen bg-bgPrimaryDark">
      <div className="overflow-y-auto w-full h-full">
        <div className="w-full flex flex-col items-center space-y-4 lg:flex-row lg:justify-center lg:space-y-0">
          <figure className="relative w-full lg:w-3/5 aspect-square lg:h-screen border-borderNeutral-700 md:border-r">
            <Image
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1080px) 100vw, 1536px"
              src={siningCover}
              alt={'Cover Login'}
              placeholder="blur"
              priority
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
            />
          </figure>
          <section className="flex justify-center w-full lg:w-2/5">
            <div className="w-11/12 max-w-2xl px-4 py-8 lg:w-10/12 space-y-10 rounded-md divide-y divide-borderNeutral-800">
              <section className="flex flex-col items-center gap-4">
                <figure className="relative w-14 aspect-square">
                  <Image
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, (max-width: 1080px) 100vw, 1536px"
                    src={cinergiaLogo}
                    alt={'Logo Cinergia'}
                    placeholder="blur"
                    priority
                    className="w-full h-full"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
                  />
                </figure>
                <h1 className="heading-2 font-bold text-center text-textColorNeutral-50">
                  Inicia sesión en Cinergia
                </h1>
              </section>
              <form className="w-full pt-10">
                <button
                  type="button"
                  className="button-primary padding-button w-full"
                  onClick={handleSigninGoogle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 aspect-square"
                    viewBox="0 0 48 48"
                    strokeWidth={2}
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />
                  </svg>
                  Continuar con Google
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
