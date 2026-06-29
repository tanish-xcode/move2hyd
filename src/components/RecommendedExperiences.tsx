import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import experienceCharminar from "@/assets/explore-heritage.jpg";
import experienceTech from "@/assets/explore-tech.jpg";
import experienceCuisine from "@/assets/cuisine-biryani.jpg";
import experienceShopping from "@/assets/explore-shopping.jpg";
import experienceNightlife from "@/assets/explore-nightlife.jpg";

interface Experience {
  image: string;
  category: string;
  title: string;
  blurb: string;
  link: string;
}

const experiences: Experience[] = [
  {
    image: experienceCharminar,
    category: "Heritage",
    title: "Where Empires Left Their Mark",
    blurb: "Charminar (1591), Golconda Fort & 1,000+ protected monuments across two royal dynasties.",
    link: "/heritage"
  },
  {
    image: experienceTech,
    category: "Tech Hub",
    title: "The Skyline That Works Late",
    blurb: "HITEC City, the Financial District & 7,000+ startups powered by a million-strong tech workforce.",
    link: "/tech-hub"
  },
  {
    image: experienceCuisine,
    category: "Cuisine",
    title: "The Biryani Is Not a Debate",
    blurb: "Dum biryani, haleem & ₹20 Irani chai — 400 years of culinary heritage.",
    link: "/cuisine"
  },
  {
    image: experienceShopping,
    category: "Shopping",
    title: "Pearls to Premium Retail",
    blurb: "Laad Bazaar pearls to Sarath City's 300+ stores — India's pearl capital.",
    link: "/shopping"
  },
  {
    image: experienceNightlife,
    category: "Nightlife",
    title: "After Dark, It Glows",
    blurb: "100+ bars & pubs, rooftop lounges & 24/7 late-night eats.",
    link: "/nightlife"
  }
];

export const RecommendedExperiences = () => {
  const navigate = useNavigate();

  return (
    <section className="py-14 sm:py-28 px-6 sm:px-10 bg-background">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
              <span className="text-muted-foreground/60 mr-3">02</span>Explore
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              One city, five worlds.
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs sm:text-right leading-relaxed">
            Old-city soul, new-city speed — five ways to fall for Hyderabad.
          </p>
        </Reveal>

        {/* Mobile: horizontal swipe row · lg: bento grid (feature + 2x2) */}
        <div className="flex lg:grid lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:h-[620px] overflow-x-auto lg:overflow-visible snap-x snap-mandatory no-scrollbar -mx-6 px-6 lg:mx-0 lg:px-0">
          {experiences.map((exp, index) => {
            const isFeature = index === 0;
            return (
              <Reveal
                key={index}
                delay={index * 90}
                y={36}
                className={
                  isFeature
                    ? "w-[72%] shrink-0 snap-start aspect-[3/4] lg:w-auto lg:col-span-2 lg:row-span-2 lg:aspect-auto"
                    : "w-[72%] shrink-0 snap-start aspect-[3/4] lg:w-auto lg:aspect-auto"
                }
              >
              <article
                onClick={() => navigate(exp.link)}
                className="group relative h-full w-full overflow-hidden rounded-2xl cursor-pointer"
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                  <span className="inline-block text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/70 mb-1.5">
                    {exp.category}
                  </span>
                  <h3 className={`text-white font-bold leading-tight ${isFeature ? "text-2xl sm:text-3xl" : "text-base sm:text-lg"}`}>
                    {exp.title}
                  </h3>
                  <p className={`text-white/70 leading-snug mt-1.5 ${isFeature ? "text-sm sm:text-base max-w-sm" : "text-xs hidden sm:block"}`}>
                    {exp.blurb}
                  </p>
                </div>
              </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
