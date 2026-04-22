import bgFallback from "@/assets/bg-fallback.jpg";

interface Props {
  isPlaying: boolean;
}

// Note: sayawit.mp4 was not provided in uploads, so we use an animated fallback.
// If a video file is added at /sayawit.mp4, it will be used automatically.
export const Background = ({ isPlaying }: Props) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-background">
      {/* Fallback animated image with subtle Ken Burns motion */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-transform duration-[20000ms] ease-linear ${
          isPlaying ? "scale-110" : "scale-100"
        }`}
        style={{ backgroundImage: `url(${bgFallback})` }}
      />

      {/* Animated gradient pulses for energy */}
      <div className="absolute inset-0 opacity-60">
        <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-accent-orange/20 blur-[120px] animate-pulse" />
        <div
          className="absolute -bottom-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-accent-orange/10 blur-[100px] animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Dimming overlay for legibility */}
      <div className="absolute inset-0 bg-background/65" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/70" />
    </div>
  );
};
