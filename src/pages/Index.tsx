import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { RecommendedExperiences } from "@/components/RecommendedExperiences";
import { WhyHyderabad } from "@/components/WhyHyderabad";
import { FeaturedVideo } from "@/components/FeaturedVideo";
import { CityComparisonTool } from "@/components/CityComparisonTool";
import { StillNotConvinced } from "@/components/StillNotConvinced";
import { Categories } from "@/components/Categories";
import { MoveGuide } from "@/components/MoveGuide";
import { AmbassadorCTA } from "@/components/AmbassadorCTA";
import { Footer } from "@/components/Footer";
import HyderabadMap from "@/components/HyderabadMap";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Marquee />
      <WhyHyderabad />
      <FeaturedVideo />
      <RecommendedExperiences />
      <Categories />
      <HyderabadMap />
      <CityComparisonTool />
      <StillNotConvinced />
      <MoveGuide />
      <AmbassadorCTA />
      <Footer />
    </div>
  );
};

export default Index;
