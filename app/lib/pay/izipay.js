/**
 * Generates dynamic order data including the current time in Unix format and a transaction ID.
 * @returns {Object} An object with currentTimeUnix and transactionId properties.
 */
export const getDataOrderDynamic = () => {
  const currentTimeUnix = Math.floor(Date.now()) * 1000;
  const transactionId = currentTimeUnix.toString().slice(0, 14);
  return {
    currentTimeUnix,
    transactionId,
  };
};

/**
 * Fetches a token from an external API based on transaction information.
 * @param {string} transactionId - The transaction ID used to identify the transaction.
 * @param {Object} options - An object containing request details such as requestSource, merchantCode, orderNumber, publicKey, and amount.
 * @returns {Promise<Object>} A Promise that resolves to the token data fetched from the API.
 * @throws {Error} Throws an error if the API response is not successful.
 */
export async function getTokenSession(
  transactionId,
  {
    requestSource = 'ECOMMERCE',
    merchantCode = '',
    orderNumber = '',
    publicKey = '',
    amount = '',
  },
) {
  // Create headers for the fetch request
  let headers = new Headers();
  headers.append('Accept', 'application/json');

  // Make a POST request to the token API
  const response = await fetch(
    'https://api.cinergia.lat/api/token?transactionId=' + transactionId,
    {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        requestSource,
        merchantCode,
        orderNumber,
        publicKey,
        amount,
      }),
    },
  );

  // Check if the response is successful; otherwise, throw an error
  if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
  }

  // Parse the JSON response and return the result
  const result = await response.json();
  return result;
}

/**
 * Saves movie payment information to an external API.
 * @param {string} transactionId - The transaction ID associated with the movie payment.
 * @param {string} clientId - The client ID associated with the movie payment.
 * @param {string} movieId - The movie ID associated with the movie payment.
 * @param {string} amount - The payment amount.
 * @returns {Promise<Object>} A Promise that resolves to the result of the API call.
 * @throws {Error} Throws an error if the API response is not successful.
 */
export async function saveMoviePay(transactionId, clientId, movieId, amount) {
  try {
    // Create data object for the movie payment
    let data = {
      clientId: clientId,
      movieId: movieId,
      transactionId: transactionId,
      amount: amount,
    };

    // Make a POST request to the movie payment API
    const response = await fetch('https://api.cinergia.lat/api/client-movie', {
      method: 'POST',
      headers: {
        accept: 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Check if the response is successful; otherwise, throw an error
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // Parse the JSON response and return the result
    const result = await response.json();
    return result;
  } catch (err) {
    // Log any errors during the process
    console.log(err);
  }
}
