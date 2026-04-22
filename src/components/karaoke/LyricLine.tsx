import { motion } from "framer-motion";
import type { LyricLine as LyricLineType } from "@/data/lyrics";

interface Props {
  line: LyricLineType;
  currentTime: number;
  isActive: boolean;
  isPast: boolean;
}

export const LyricLine = ({ line, currentTime, isActive, isPast }: Props) => {
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
      <div className="font-display font-black text-3xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-foreground/90">
        {line.text}
      </div>
    </motion.div>
  );
};
