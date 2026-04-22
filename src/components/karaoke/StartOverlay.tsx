import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface Props {
  onStart: () => void;
}

export const StartOverlay = ({ onStart }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/80 backdrop-blur-md"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12 px-6"
      >
        <div className="text-accent-orange text-xs md:text-sm font-mono tracking-[0.5em] uppercase mb-4">
          Karaoke
        </div>
        <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-foreground tracking-tighter">
          LIBOT
        </h1>
        <p className="text-muted-foreground mt-4 text-sm md:text-base tracking-wide">
          Press start to begin
        </p>
      </motion.div>

      <motion.button
        onClick={onStart}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, type: "spring" }}
        className="group relative h-32 w-32 md:h-40 md:w-40 rounded-full bg-accent-orange text-background flex items-center justify-center shadow-[0_0_60px_-5px_hsl(var(--accent-orange))] hover:shadow-[0_0_100px_0px_hsl(var(--accent-orange))] transition-shadow"
      >
        <span className="absolute inset-0 rounded-full bg-accent-orange animate-ping opacity-20" />
        <Play className="h-12 w-12 md:h-16 md:w-16 ml-2" fill="currentColor" strokeWidth={0} />
      </motion.button>

    </motion.div>
  );
};
