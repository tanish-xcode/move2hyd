import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const FeaturedVideo = () => {
  const videoId = "r1f5Anr_HOw";
  const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  return (
    <section className="py-12 sm:py-16 px-4 md:px-8 lg:px-16 bg-background">
      <Reveal className="max-w-7xl mx-auto" y={40}>
        <div className="rounded-3xl bg-[hsl(240,10%,10%)] p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center overflow-hidden grain"
          style={{
            backgroundImage: `
              linear-gradient(hsl(240,10%,15%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(240,10%,15%) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        >
          {/* Video Thumbnail */}
          <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
            <a 
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={videoThumbnail}
                alt="Why Everyone's Betting on Hyderabad"
                className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play className="w-8 h-8 text-primary fill-primary ml-1" />
                </div>
              </div>
            </a>
          </div>

          {/* Content */}
          <div className="space-y-6 text-white">
            <span className="text-sm font-medium tracking-widest uppercase text-white/60">
              Featured Video
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
              Why Everyone's Betting on Hyderabad
            </h2>
            <p className="text-white/70 text-lg">
              See what's drawing professionals, families, and investors to India's fastest-rising city.
            </p>
            <div className="pt-2">
              <Button 
                asChild
                className="bg-white text-primary hover:bg-white/90 rounded-full px-6"
              >
                <a 
                  href={`https://www.youtube.com/watch?v=${videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Play className="w-4 h-4 mr-2 fill-current" />
                  Play Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};
