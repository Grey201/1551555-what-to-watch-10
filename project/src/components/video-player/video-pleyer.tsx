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
  let isNeedUpdate = true;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    if (isPlaying && isNeedUpdate) {
      videoRef.current.play();
      return;
    }
    videoRef.current.load();
    return () => {
      isNeedUpdate = false;
    };
  }, [isPlaying]);

  return (
    <video
      onMouseEnter={() => setTimeout(() => setIsPlaying(true), 1000)}
      onMouseLeave={() => setIsPlaying(false)}
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
