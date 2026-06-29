import collageIndiaGate from "@/assets/collage-india-gate.jpg";
import collageIndianTeam from "@/assets/collage-indian-team.jpg";
import collageGachibowli from "@/assets/collage-gachibowli-office.avif";
import experienceCharminar from "@/assets/experience-charminar-real.jpg";
export const ImageCollage = () => {
  return <section className="py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Grid - Asymmetric Layout */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img alt="Charminar monument in Hyderabad" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" src="/lovable-uploads/133b5ff2-55a5-47df-9486-362bad0c36cb.jpg" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img alt="Indian professionals collaborating" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" src="/lovable-uploads/8747fef0-0735-4c1b-9b15-4d97a27c23ec.jpg" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src={collageGachibowli} alt="Modern office buildings in Gachibowli, Hyderabad" className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img alt="Iconic Indian architecture" className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500" src="/lovable-uploads/b121469b-3ea2-4ac5-88ea-435f0e9d851b.jpg" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Your new chapter starts in Hyderabad.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're relocating for work, seeking new opportunities, or simply exploring 
              one of India's most dynamic cities — Hyderabad welcomes you with open arms, 
              world-class infrastructure, and a quality of life that's hard to match.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From the historic charm of the Old City to the gleaming towers of HITEC City, 
              discover a place where tradition meets innovation, where your career can flourish, 
              and where every day brings a new adventure.
            </p>
          </div>
        </div>
      </div>
    </section>;
};