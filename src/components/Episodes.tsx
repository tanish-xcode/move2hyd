import { EpisodeCard } from "./EpisodeCard";
import heritageImage from "@/assets/heritage-episode.jpg";
import techImage from "@/assets/tech-episode.jpg";
import foodImage from "@/assets/food-episode.jpg";

export const Episodes = () => {
  const episodes = [
    {
      image: heritageImage,
      episode: "Story 1",
      title: "Rich Heritage & History",
      description: "Walk through 400 years of history at the iconic Charminar, explore the majestic Golconda Fort, and discover the pearl and diamond legacy that makes Hyderabad truly unique."
    },
    {
      image: techImage,
      episode: "Story 2",
      title: "Tech Hub of India",
      description: "Experience HITEC City, home to Microsoft, Google, Amazon, and hundreds of startups. Discover why Hyderabad is India's fastest-growing tech ecosystem with world-class opportunities."
    },
    {
      image: foodImage,
      episode: "Story 3",
      title: "Culinary Paradise",
      description: "From the world-famous Hyderabadi biryani to Irani chai and Osmania biscuits, experience a food culture that has captivated food lovers globally for generations."
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-4 mb-16">
          <p className="text-primary text-sm uppercase tracking-widest font-semibold">
            Discover Hyderabad
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Why People Are Moving Here
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore what makes Hyderabad the perfect place to live, work, and thrive
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {episodes.map((episode, index) => (
            <EpisodeCard key={index} {...episode} />
          ))}
        </div>
      </div>
    </section>
  );
};
