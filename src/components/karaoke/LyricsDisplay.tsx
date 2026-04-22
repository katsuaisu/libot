import { useMemo } from "react";
import { LYRICS } from "@/data/lyrics";
import { LyricLine } from "./LyricLine";

interface Props {
  currentTime: number;
}

export const LyricsDisplay = ({ currentTime }: Props) => {
  const activeIndex = useMemo(() => {
    // Find currently active line
    for (let i = 0; i < LYRICS.length; i++) {
      if (currentTime >= LYRICS[i].start && currentTime < LYRICS[i].end) return i;
    }
    // Otherwise nearest upcoming
    for (let i = 0; i < LYRICS.length; i++) {
      if (currentTime < LYRICS[i].start) return i - 1;
    }
    return LYRICS.length - 1;
  }, [currentTime]);

  // Show a small window around active line
  const windowSize = 2;
  const start = Math.max(0, activeIndex - windowSize);
  const end = Math.min(LYRICS.length, activeIndex + windowSize + 1);
  const visible = LYRICS.slice(start, end);

  return (
    <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
      {visible.map((line, i) => {
        const realIndex = start + i;
        return (
          <LyricLine
            key={`${line.start}-${realIndex}`}
            line={line}
            currentTime={currentTime}
            isActive={realIndex === activeIndex}
            isPast={realIndex < activeIndex}
          />
        );
      })}
      {currentTime < LYRICS[0].start && (
        <div className="text-muted-foreground font-mono tracking-widest uppercase text-sm animate-pulse">
          ♪ Music starting ♪
        </div>
      )}
    </div>
  );
};
