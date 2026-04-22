import bgFallback from "@/assets/bg-fallback.jpg";

interface Props {
  isPlaying: boolean;
}

export const Background = ({ isPlaying }: Props) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/sayawit.mp4"
        poster={bgFallback}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dimming overlay for legibility — keep bg visible but slightly dark */}
      <div className="absolute inset-0 bg-background/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
    </div>
  );
};
