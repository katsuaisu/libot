import { motion } from "framer-motion";
import sr1 from "@/assets/sr1.jpg";
import sr2 from "@/assets/sr2.jpg";
import sr3 from "@/assets/sr3.jpg";
import sr4 from "@/assets/sr4.jpg";
import sr5 from "@/assets/sr5.jpg";

const images = [sr1, sr2, sr3, sr4, sr5];

interface Props {
  direction?: "up" | "down";
  side: "left" | "right";
}

export const ScrollingSidebar = ({ direction = "up", side }: Props) => {
  // Duplicate for seamless loop
  const loop = [...images, ...images, ...images];

  return (
    <div
      className={`pointer-events-none fixed top-0 ${side}-0 z-20 h-screen w-20 md:w-32 lg:w-40 overflow-hidden`}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex flex-col gap-3 px-2"
        initial={{ y: direction === "up" ? 0 : "-66.666%" }}
        animate={{ y: direction === "up" ? "-66.666%" : 0 }}
        transition={{
          duration: 40,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {loop.map((src, i) => (
          <div
            key={i}
            className="relative w-full aspect-square overflow-hidden rounded-lg ring-1 ring-accent-orange/30 shadow-[0_0_25px_-5px_hsl(var(--accent-orange)/0.5)]"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
