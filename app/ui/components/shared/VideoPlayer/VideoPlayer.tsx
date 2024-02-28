'use client';
import { useState, useEffect } from 'react';
import VideoPlayerSkeleton from './VideoPlayerSkeleton';
import { VideoPlayerProps } from './VideoPlayer.model';

/**
 * VideoPlayer Component
 *
 * The VideoPlayer component embeds a video player using an iframe to display a specific video.
 * It supports fullscreen mode and is preconfigured with specific options for Muse.ai videos.
 *
 * @component
 * @returns {JSX.Element} - JSX element representing the VideoPlayer component.
 *
 * @example
 * // Example usage of VideoPlayer in a parent component
 * import { VideoPlayer } from './path-to-VideoPlayer-component';
 *
 * const ParentComponent = () => {
 *   return (
 *     <div>
 *       <h1>My Awesome Page</h1>
 *       <VideoPlayer />
 *     </div>
 *   );
 * };
 */
export function VideoPlayer(props: VideoPlayerProps) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const iframe = document.querySelector('#videoPlayer');

    const handleLoad = () => {
      setLoading(false);
    };

    iframe.addEventListener('load', handleLoad);

    // Clean up the event listener on component unmount
    return () => {
      iframe.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {loading && <VideoPlayerSkeleton />}
      <iframe
        id="videoPlayer"
        className={`w-full h-full ${loading ? 'hidden' : ''}`}
        {...props}
      />
    </div>
  );
}
