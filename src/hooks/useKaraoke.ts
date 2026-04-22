import { useEffect, useRef, useState } from "react";

export function useKaraoke(audioRef: React.RefObject<HTMLAudioElement>, isPlaying: boolean) {
  const [currentTime, setCurrentTime] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tick = () => {
      setCurrentTime(audio.currentTime);
      rafRef.current = requestAnimationFrame(tick);
    };

    if (isPlaying) {
      rafRef.current = requestAnimationFrame(tick);
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [audioRef, isPlaying]);

  return currentTime;
}
