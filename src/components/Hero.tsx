import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

/** Aerial drone clips that rotate with a crossfade as each one ends. */
const heroClips = [
  "/videos/cable-bridge.mp4",
  "/videos/amazon-day.mp4",
  "/videos/through-the-clouds.mp4",
];

export const Hero = () => {
  const [active, setActive] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRefs.current[active];
    if (!video) return;
    video.currentTime = 0;
    video.play().catch(() => {});
  }, [active]);

  const advance = () => setActive((i) => (i + 1) % heroClips.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Rotating drone video background */}
      <div className="absolute inset-0 bg-black">
        {heroClips.map((src, i) => (
          <video
            key={src}
            ref={(el) => (videoRefs.current[i] = el)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            src={src}
            muted
            playsInline
            autoPlay={i === 0}
            preload={i === active || i === (active + 1) % heroClips.length ? "auto" : "metadata"}
            onEnded={advance}
            onError={() => i === active && advance()}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/65" />
      </div>

      {/* Content — vertically centered, left-aligned, staggered entrance */}
      <div className="relative h-full flex items-center px-6 sm:px-10 lg:px-20 pt-20 z-10">
        <div className="max-w-3xl space-y-5 hero-stagger">
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">
            India's #1 City for Quality of Living
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
            Hyderabad, The Crown Jewel Of India
          </h1>
          <p className="text-base sm:text-lg text-white/70 font-normal leading-relaxed max-w-lg">
            Tech capital of India. Lower costs, faster careers, and a quality of life that leaves every other metro behind.
          </p>
          <div className="flex items-center gap-5 pt-2">
            <Button
              size="lg"
              className="bg-white text-foreground hover:bg-white/90 rounded-full px-7 py-5 text-sm font-semibold shadow-xl transition-all duration-300"
              onClick={() => navigate('/why-hyderabad')}
            >
              Explore Hyderabad
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* ASBL watermark */}
      <div className="absolute bottom-[100px] right-6 sm:right-10 lg:right-20 z-10 text-white/40 text-[13px] uppercase tracking-[0.3em] font-medium">
        An ASBL Initiative
      </div>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 inset-x-0 z-10 border-t border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="px-6 sm:px-10 lg:px-20 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-8 sm:gap-12">
            {[
              { value: "#1", label: "Quality of Living" },
              { value: "1,500+", label: "Tech Companies" },
              { value: "30%", label: "Lower Cost" },
            ].map((stat, i) => (
              <div key={stat.label} className={i === 2 ? "hidden md:block" : i === 1 ? "hidden sm:block" : ""}>
                <p className="text-white font-bold text-sm sm:text-base leading-none">{stat.value}</p>
                <p className="text-white/45 text-[10px] sm:text-xs uppercase tracking-[0.15em] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <button
            className="flex items-center gap-2 text-white/60 hover:text-white text-xs uppercase tracking-[0.2em] transition-colors group"
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            aria-label="Scroll down"
          >
            Scroll
            <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
