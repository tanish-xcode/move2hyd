import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  youtubeId: string;
  category: string;
  title: string;
  description: string;
  highlights: string[];
}

export const CategoryCard = ({ youtubeId, category, title, description, highlights }: CategoryCardProps) => {
  return (
    <Card className="group h-full w-full overflow-hidden border-0 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
      <div className="relative aspect-video overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>

      <div className="p-6 space-y-3">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          {category}
        </p>
        <h3 className="text-xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {highlights.length > 0 && (
          <ul className="space-y-1.5 pt-1">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <span className="mt-1.5 w-1 h-1 rounded-full bg-muted-foreground/40 flex-shrink-0" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
};
