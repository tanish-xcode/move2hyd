import { Briefcase, Sparkles, Landmark } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { CountUp } from "@/components/CountUp";

export const WhyHyderabad = () => {
  const stats = [
    { number: "1,500+", label: "Global Tech Companies", description: "Microsoft, Google, Amazon & more", source: "Telangana IT Dept." },
    { number: "10M+", label: "Growing Population", description: "India's 4th largest metro", source: "UN / Census of India" },
    { number: "30%", label: "Lower Cost of Living", description: "vs. Mumbai & Bangalore", source: "Numbeo Index" },
    { number: "400+", label: "Years of Heritage", description: "Founded 1591", source: "Historical record" }
  ];

  const highlights = [
    {
      icon: Briefcase,
      title: "Career Growth",
      description: "Fortune 500 companies and a booming startup ecosystem. HITEC City alone houses 1,500+ tech firms."
    },
    {
      icon: Sparkles,
      title: "Quality of Life",
      description: "World-class infrastructure, excellent schools, and a genuine work-life balance other metros can't match."
    },
    {
      icon: Landmark,
      title: "Cultural Richness",
      description: "400 years of history, legendary biryani, and a city that genuinely welcomes everyone."
    }
  ];

  return (
    <section id="why-hyderabad" className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/30">
      <div className="container mx-auto max-w-7xl">

        {/* Header */}
        <Reveal className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
            <span className="text-muted-foreground/60 mr-3">01</span>Why Hyderabad
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            A city worth moving for.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-5 leading-relaxed">
            The data speaks for itself — here's what sets Hyderabad apart from every other Indian metro.
          </p>
        </Reveal>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-5 sm:mb-6">
          {stats.map((stat, index) => (
            <Reveal key={index} delay={index * 90}>
              <div className="relative h-full rounded-2xl bg-card border border-border p-5 sm:p-7 overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                <span className="absolute top-0 left-0 h-1 w-12 bg-primary rounded-br-lg" />
                <p className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-primary leading-none">
                  <CountUp value={stat.number} />
                </p>
                <p className="font-semibold text-sm sm:text-base mt-4">{stat.label}</p>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">{stat.description}</p>
                <p className="text-[10px] text-muted-foreground/70 mt-4 pt-3 border-t border-border">
                  Source: {stat.source}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Highlight cards — mobile carousel, desktop grid */}
        <div className="flex sm:grid sm:grid-cols-3 gap-4 sm:gap-5 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 sm:mx-0 sm:px-0">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 110} className="w-[80%] shrink-0 snap-start sm:w-auto">
                <div className="h-full rounded-2xl bg-card border border-border p-7 sm:p-8 transition-all duration-300 hover:shadow-[var(--shadow-lift)] hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg mb-2 tracking-tight">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
