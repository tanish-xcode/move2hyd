import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface EpisodeCardProps {
  image: string;
  episode: string;
  title: string;
  description: string;
}

export const EpisodeCard = ({ image, episode, title, description }: EpisodeCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Button 
            variant="glass" 
            size="icon" 
            className="h-16 w-16 rounded-full"
          >
            <Play className="h-8 w-8 fill-current" />
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">
          {episode}
        </p>
        <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        <Button variant="link" className="p-0 h-auto text-primary font-semibold">
          Watch Now →
        </Button>
      </div>
    </Card>
  );
};
