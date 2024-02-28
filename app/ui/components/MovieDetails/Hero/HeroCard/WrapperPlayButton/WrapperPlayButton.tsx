'use client';
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { fetchUserData } from '@/app/lib/data/fetch';
import { PlayButton } from '../PlayButton';
import {
  getDataOrderDynamic,
  getTokenSession,
  saveMoviePay,
} from '@/app/lib/pay/izipay';
import { iziConfigFuntion } from '@/app/lib/pay/iziConfig';
import { WrapperPlayButtonProps } from '../HeroCard.model';

/**
 * Wrapper component for the PlayButton, responsible for handling user authentication,
 * fetching user data, and initiating the payment process for a movie.
 *
 * @component
 * @param {Object} props - Component props
 * @param {MovieDetailsAPI} props.movieData - Movie details data
 * @returns {JSX.Element} - Rendered component
 */
export default function WrapperPlayButton({
  movieData,
}: WrapperPlayButtonProps) {
  // Destructure movieData
  const { id: movieId, price } = movieData;

  // State to store user session data
  const { data: session } = useSession();

  // Extracted user email from session data
  const userEmail = session?.user?.email;

  // State to store user information
  const [userInfo, setUserInfo] = useState(null);

  // State to store the user's movie list
  const [userMovieList, setUserMovieList] = useState<MovieUserList[]>();

  // Loading state for fetching data
  const [isLoading, setIsLoading] = useState(false);

  // State to track whether the payment has been completed
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  // useEffect to fetch movie list when component mounts or myListState/userEmail changes
  useEffect(() => {
    // Function to fetch movie list data
    const fetchMovieList = async () => {
      try {
        // Set isLoading state to true while fetching data
        setIsLoading(true);

        // Fetch user data from the API based on user email
        const userDataResponse = await fetchUserData({
          email: userEmail,
        });

        // Extract movie list from user data
        const userData = userDataResponse.data[0];

        if (userData) {
          setUserInfo(userData);
          const movieList = userData.movies;

          if (movieList) {
            setUserMovieList(movieList);
          }
        }
      } catch (error) {
        // Log and handle errors during the fetch
        console.error('Error fetching movie list:', error);
      } finally {
        // Set loading state back to false after fetching, regardless of success or failure
        setIsLoading(false);
      }
    };

    // Call the fetchMovieList function when the component mounts or when myListState/userEmail changes
    fetchMovieList();
  }, [session, userEmail, isPaymentCompleted]); // Dependency array to re-run effect when these values change

  // Constant representing the order currency
  const ORDER_CURRENCY = 'PEN';

  /**
   * Handles the payment process for the movie, including fetching dynamic order data,
   * obtaining session authorization, and loading the payment form.
   *
   * @param {Object} paymentData - Payment data
   * @param {number} paymentData.orderAmount - Order amount
   * @param {string} paymentData.orderCurrency - Order currency
   * @param {number} paymentData.movieId - Movie identifier
   * @param {string} paymentData.clientId - Client identifier
   * @returns {void}
   */
  const handlePayment = async ({
    price,
    orderCurrency,
    clientId,
    movieId,
  }: {
    price: string;
    orderCurrency: string;
    clientId: string;
    movieId: number;
  }) => {
    // Obtaining dynamic order data (e.g., transactionId and currentTimeUnix)
    const { transactionId, currentTimeUnix } = getDataOrderDynamic();

    /* Commerce data start */
    // Get commerce data from environment variables
    const MERCHANT_CODE = process.env.NEXT_PUBLIC_MERCHANT_CODE;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY;
    /* Commerce data end */

    const TRANSACTION_ID = transactionId;
    const ORDER_NUMBER = transactionId;
    const ORDER_CURRENCY = orderCurrency;
    const ORDER_AMOUNT = Number(price).toFixed(2);

    const CLIENT_ID = `${clientId}`;
    const MOVIE_ID = `${movieId}`;

    // Obtain the authorization token for the payment session
    getTokenSession(TRANSACTION_ID, {
      requestSource: 'ECOMMERCE',
      merchantCode: MERCHANT_CODE,
      orderNumber: ORDER_NUMBER,
      publicKey: PUBLIC_KEY,
      amount: ORDER_AMOUNT,
    }).then((authorization) => {
      const {
        response: { token = undefined, error } = {
          // @ts-ignore
          response: undefined,
          error: 'NODE_API',
        },
      } = authorization;

      if (token) {
        // Callback function to handle the payment response
        const callbackResponsePayment = (response) => {
          // Successful transaction code 00 / 021
          if (response.code === '00') {
            // Save payment information and play the movie if necessary
            saveMoviePay(
              TRANSACTION_ID,
              CLIENT_ID,
              MOVIE_ID,
              // @ts-ignore
              ORDER_AMOUNT,
            ).then((res) => {
              const { code } = res;
              if (code == 1) {
                console.log('PLAY MOVIE');
                setIsPaymentCompleted(true);
                setIsLoading(false);
              }
            });
          } else {
            setIsPaymentCompleted(false);
            setIsLoading(false);
          }
        };

        // Function to load the payment form
        const handleLoadForm = () => {
          setIsLoading(true);
          try {
            const iziConfig = iziConfigFuntion({
              TRANSACTION_ID,
              MERCHANT_CODE,
              ORDER_NUMBER,
              ORDER_CURRENCY,
              ORDER_AMOUNT,
              currentTimeUnix,
            });

            // Create IziPay instance and load the form
            // @ts-ignore
            const checkout = new Izipay({ config: iziConfig?.config });

            checkout &&
              checkout.LoadForm({
                authorization: token,
                keyRSA: 'RSA',
                callbackResponse: callbackResponsePayment,
              });
          } catch (error) {
            console.log(error.message, error.Errors, error.date);
          }
        };

        // Load the payment form
        handleLoadForm();
      } else if (error) {
        console.log('error-->', error);
      }
    });
  };

  /**
   * Initiates the payment process for the movie.
   */
  const handlePay = () => {
    // Calling the handlePayment function with parameters
    handlePayment({
      price, // Order amount
      movieId, // Movie identifier
      clientId: userInfo?.id, // Client identifier
      orderCurrency: ORDER_CURRENCY, // Order currency
    });
  };

  return (
    <div className="z-[10] w-fit h-fit">
      <PlayButton
        movieData={movieData}
        userMovieList={userMovieList}
        isLoading={isLoading}
        handlePay={handlePay}
      />
    </div>
  );
}
