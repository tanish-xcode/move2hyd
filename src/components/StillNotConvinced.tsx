import { Wind, Wallet, Clock, TrendingUp, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";

export const StillNotConvinced = () => {
  const reasons = [
    {
      icon: Wind,
      highlight: "AQI 100",
      title: "Cleaner Air",
      description: "Consistently better air quality than Delhi, Mumbai & Bangalore"
    },
    {
      icon: Wallet,
      highlight: "30% Less",
      title: "Cost of Living",
      description: "Significantly cheaper rent, food, and daily transport"
    },
    {
      icon: Clock,
      highlight: "40% Faster",
      title: "Commute Times",
      description: "More time living, less time stuck in traffic"
    },
    {
      icon: TrendingUp,
      highlight: "40% GCC",
      title: "Job Growth",
      description: "Fastest-growing Global Capability Center hub in India"
    },
    {
      icon: Users,
      highlight: "10M+",
      title: "Community",
      description: "Warm, diverse, and genuinely welcoming city"
    }
  ];

  return (
    <section className="relative bg-foreground text-background overflow-hidden grain">
      {/* Depth glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.06),transparent_55%)]" />

      <div className="relative container mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-28">

        {/* Header */}
        <Reveal className="max-w-3xl mb-14 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-background/40 mb-5">The numbers don't lie</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-background leading-[1.05]">
            Still not convinced?
          </h2>
          <p className="text-background/50 text-base sm:text-lg mt-5 max-w-xl leading-relaxed">
            Five more reasons — all backed by data — that make the move an easy call.
          </p>
        </Reveal>

        {/* Stat cards */}
        <Reveal y={36}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-background/10 rounded-2xl overflow-hidden">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group bg-foreground hover:bg-background/[0.04] transition-colors duration-300 p-6 sm:p-7 flex flex-col"
              >
                <Icon className="w-5 h-5 text-background/40 group-hover:text-background/70 transition-colors mb-6" />
                <p className="text-3xl sm:text-4xl font-bold tracking-tight text-background leading-none">
                  {reason.highlight}
                </p>
                <p className="font-semibold text-sm text-background mt-3">{reason.title}</p>
                <p className="text-xs text-background/45 leading-relaxed mt-2">{reason.description}</p>
              </div>
            );
          })}
        </div>
        </Reveal>

        {/* CTA */}
        <Reveal delay={150} className="mt-12 sm:mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-8">
          <Button
            size="lg"
            className="bg-background text-foreground hover:bg-background/90 rounded-full px-8"
            onClick={() => document.getElementById('move-guide')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Plan Your Move
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <p className="text-background/40 text-sm">
            Free relocation guide · Everything you need in one place
          </p>
        </Reveal>

      </div>
    </section>
  );
};
