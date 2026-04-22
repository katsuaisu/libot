import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useKaraoke } from "@/hooks/useKaraoke";
import { Background } from "@/components/karaoke/Background";
import { ScrollingSidebar } from "@/components/karaoke/ScrollingSidebar";
import { LyricsDisplay } from "@/components/karaoke/LyricsDisplay";
import { StartOverlay } from "@/components/karaoke/StartOverlay";

const Index = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTime = useKaraoke(audioRef, isPlaying);

  const handleStart = async () => {
    setStarted(true);
    const audio = audioRef.current;
    if (audio) {
      try {
        audio.currentTime = 0;
        await audio.play();
        setIsPlaying(true);
      } catch (e) {
        console.error("Playback failed", e);
      }
    }
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      <Background isPlaying={isPlaying} />

      <audio
        ref={audioRef}
        src="/sayawit.mp3"
        preload="auto"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <AnimatePresence>
        {started && (
          <>
            <ScrollingSidebar side="left" direction="up" />
            <ScrollingSidebar side="right" direction="down" />
          </>
        )}
      </AnimatePresence>

      {/* Lyrics centerstage */}
      <div className="relative z-10 flex h-full w-full items-center justify-center px-24 md:px-40 lg:px-52">
        {started ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full"
          >
            <LyricsDisplay currentTime={currentTime} />
          </motion.div>
        ) : null}
      </div>

      {/* Title bar */}
      {started && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="absolute top-6 left-1/2 -translate-x-1/2 z-30 text-center"
        >
          <div className="font-mono text-[10px] md:text-xs tracking-[0.5em] text-muted-foreground uppercase">
            Now Playing
          </div>
          <div className="font-display text-xl md:text-2xl text-foreground tracking-wider">
            SAYAW <span className="text-accent-orange">IT</span>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {!started && <StartOverlay onStart={handleStart} />}
      </AnimatePresence>
    </main>
  );
};

export default Index;
