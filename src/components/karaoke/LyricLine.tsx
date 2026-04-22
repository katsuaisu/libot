import { motion } from "framer-motion";
import type { LyricLine as LyricLineType } from "@/data/lyrics";

interface Props {
  line: LyricLineType;
  currentTime: number;
  isActive: boolean;
  isPast: boolean;
}

export const LyricLine = ({ line, currentTime, isActive, isPast }: Props) => {
  let progress = 0;
  if (isPast) progress = 100;
  else if (isActive) {
    const duration = line.end - line.start;
    progress = Math.min(100, Math.max(0, ((currentTime - line.start) / duration) * 100));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: isActive ? 1 : isPast ? 0.35 : 0.45,
        y: 0,
        scale: isActive ? 1 : 0.9,
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative my-4 md:my-6 px-4"
    >
      {line.section && isActive && (
        <div className="text-accent-orange/70 text-xs md:text-sm font-mono tracking-[0.4em] uppercase mb-3">
          {line.section}
        </div>
      )}
      <div className="relative inline-block font-display font-black text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight">
        {/* Base white text */}
        <span className="relative text-foreground/90">{line.text}</span>
        {/* Orange progressive fill overlay */}
        <span
          aria-hidden
          className="absolute inset-0 overflow-hidden text-accent-orange karaoke-glow whitespace-nowrap"
          style={{
            width: `${progress}%`,
            transition: isActive ? "width 80ms linear" : "width 300ms ease-out",
          }}
        >
          {line.text}
        </span>
      </div>
    </motion.div>
  );
};
