import { useEffect, useRef, useState } from 'react';

type VideoPlayerProps = {
  src: string;
  poster: string;
};

export default function VideoPlayer({
  src,
  poster,
}: VideoPlayerProps): JSX.Element {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    const timer = setTimeout(() => {
      if (videoRef.current !== null && isPlaying) {
        videoRef.current.play();
      }
    }, 1000);
    if (!isPlaying) {
      videoRef.current.load();
    }
    return () => clearTimeout(timer);
  }, [isPlaying]);

  return (
    <video
      onMouseEnter={() => {
        setIsPlaying(true);
      }}
      onMouseLeave={() => {
        setIsPlaying(false);
      }}
      src={src}
      ref={videoRef}
      muted
      width="280"
      height="175"
      poster={poster}
      style={{ objectFit: 'cover' }}
    >
    </video>
  );
}
