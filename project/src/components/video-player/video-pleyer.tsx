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
  let timer: NodeJS.Timeout | undefined = undefined;
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {

    if (videoRef.current === null) {
      return;
    }

    if (isPlaying) {
      videoRef.current.play();
      return;
    }
    videoRef.current.load();
  }, [isPlaying]);

  return (
    <video
      onMouseEnter={() => {
        timer = setTimeout(() => setIsPlaying(!isPlaying), 1000);
      }}
      onMouseLeave={() => {
        if (isPlaying === false) {
          clearTimeout(timer);
        }
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
