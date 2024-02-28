/**
 * Opens a centered popup window with specified URL and title.
 *
 * @param {string} url - The URL to be opened in the popup window.
 * @param {string} title - The title of the popup window.
 * @returns {void}
 */
export const popupCenter = (url: string, title: string): void => {
  // Get the left and top coordinates of the dual screen
  const dualScreenLeft = window.screenLeft ?? window.screenX;
  const dualScreenTop = window.screenTop ?? window.screenY;

  // Get the width and height of the window, considering different scenarios
  const width =
    window.innerWidth ?? document.documentElement.clientWidth ?? screen.width;
  const height =
    window.innerHeight ??
    document.documentElement.clientHeight ??
    screen.height;

  // Calculate the system zoom factor
  const systemZoom = width / window.screen.availWidth;

  // Calculate the dimensions of the popup window after applying zoom
  const popupWidth = 500 / systemZoom;
  const popupHeight = 550 / systemZoom;

  // Calculate the centered position of the popup window
  const left = (width - popupWidth) / 2 / systemZoom + dualScreenLeft;
  const top = (height - popupHeight) / 2 / systemZoom + dualScreenTop;

  // Open the new window with specified dimensions and position
  const newWindow = window.open(
    url,
    title,
    `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`,
  );

  // Focus on the new window if it was successfully opened
  newWindow?.focus();
};
