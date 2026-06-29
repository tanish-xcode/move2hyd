import { CategoryCard } from "./CategoryCard";
import { Building2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/Reveal";
import asblLoftImage from "@/assets/asbl-loft.png";

export const Categories = () => {
  const categories = [
    {
      youtubeId: "uRx3jk895c8",
      category: "Careers",
      title: "AI Companies Worth Joining",
      description: "Hyderabad's AI scene is exploding. Here are the companies leading the charge in 2026 — and hiring right now.",
      highlights: [
        "Fast-growing AI & ML employers",
        "Roles across research and product",
        "Global R&D centers based in the city",
        "Who's actively hiring in 2026"
      ]
    },
    {
      youtubeId: "hf79-j1iUHE",
      category: "Outdoors",
      title: "The City's Best Green Spaces",
      description: "From KBR National Park to lakeside trails, discover the top spots to breathe, walk, and unwind in Hyderabad.",
      highlights: [
        "KBR National Park & urban forests",
        "Lakeside walking and jogging trails",
        "Family-friendly weekend escapes",
        "Hyderabad's 'map of oxygen'"
      ]
    },
    {
      youtubeId: "v3RTlnEjoVY",
      category: "Healthcare",
      title: "World-Class Medical Care",
      description: "Five of the city's top hospitals sit within a 500-metre walk — a medical hub that rivals any in the country.",
      highlights: [
        "Top-ranked multi-specialty hospitals",
        "Five elite hospitals within 500m",
        "Advanced specialist treatment",
        "Trusted by families across the city"
      ]
    },
    {
      youtubeId: "GY3FZkrUSfg",
      category: "Growth",
      title: "A City on the Rise",
      description: "A billion-dollar hospitality boom is reshaping Hyderabad — a clear signal of where the smart money is moving.",
      highlights: [
        "$1B+ luxury hospitality wave",
        "Surging real estate demand",
        "A growing magnet for investment",
        "Why now is the moment to move"
      ]
    },
    {
      youtubeId: "lke3MRiddCw",
      category: "Employers",
      title: "Top Tech Companies, Ranked",
      description: "The companies to target in 2026 — a ranked look at Hyderabad's biggest and best tech employers.",
      highlights: [
        "Microsoft, Google, Amazon & more",
        "Ranked by scale and opportunity",
        "Where to aim your applications",
        "1,500+ tech companies city-wide"
      ]
    }
  ];

  return (
    <section className="py-14 sm:py-24 px-4 sm:px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <Reveal className="mb-10 sm:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-3">
            <span className="text-muted-foreground/60 mr-3">03</span>Life in Hyderabad
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Five ways to experience the city
          </h2>
          <p className="sm:hidden text-xs text-muted-foreground mt-3">Swipe to explore →</p>
        </Reveal>

        <div className="flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-12 overflow-x-auto sm:overflow-visible snap-x snap-mandatory no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
          {categories.map((category, index) => (
            <Reveal key={index} delay={(index % 3) * 100} className="w-[80%] shrink-0 snap-start sm:w-auto">
              <CategoryCard {...category} />
            </Reveal>
          ))}

          {/* ASBL Loft Promotional Card */}
          <Reveal delay={200} className="h-full w-[80%] shrink-0 snap-start sm:w-auto">
          <div className="group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 border border-primary/20 flex flex-col hover:shadow-xl transition-all duration-300">
            {/* Image Section */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={asblLoftImage} 
                alt="ASBL Loft Apartments" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-primary text-xs font-semibold uppercase tracking-wider">
                <Building2 className="h-3 w-3" />
                Featured Property
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-5 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                ASBL Loft
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Premium apartments designed for modern professionals in Gachibowli.
              </p>
              
              <ul className="space-y-1.5 text-sm mb-4 flex-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Double-height living spaces
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Prime Gachibowli location
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Rooftop infinity pool & gym
                </li>
              </ul>
              
              <a 
                href="https://www.asbl.in/loft" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="hero" size="sm" className="w-full group/btn">
                  Explore ASBL Loft
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </a>
            </div>
          </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
