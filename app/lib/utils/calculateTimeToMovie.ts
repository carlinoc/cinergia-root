/**
 * Calculates the months, days, and hours remaining between two dates.
 * @param {string} startDate - The start date in 'YYYY-MM-DDTHH:mm:ss.SSSZ' format.
 * @param {string} endDate - The end date in 'YYYY-MM-DDTHH:mm:ss.SSSZ' format.
 * @returns {string} - A message indicating the remaining time.
 */

interface CalculateTimeToMovie {
  startDate: string;
  endDate: string;
}
export const calculateTimeToMovie = ({
  startDate,
  endDate,
}: CalculateTimeToMovie): string => {
  // Parse the dates
  const current = new Date();
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Validar que startDate sea una fecha pasada con respecto a la fecha actual
  if (start > current) {
    return 'La película aún no está disponible.';
  }

  // Get the difference in milliseconds
  const differenceInMillis: number = end.getTime() - current.getTime();

  // Calculate the remaining days and hours
  const remainingDays = Math.floor(differenceInMillis / (1000 * 60 * 60 * 24));
  const remainingHours = Math.floor(
    (differenceInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );

  if (remainingDays > 1) {
    return `Quedan ${remainingDays} días para ver la película.`;
  } else if (remainingDays === 1) {
    return 'Queda 1 día para ver la película.';
  } else if (remainingHours > 0) {
    return `Quedan ${remainingHours} horas para ver la película.`;
  } else {
    return 'La película ya no está disponible.';
  }
};
