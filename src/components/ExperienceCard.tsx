import { cn } from "@/lib/utils";
import { useState } from "react";

interface ExperienceCardProps {
  image: string;
  category: string;
  title: string;
  variant?: "main" | "side";
  className?: string;
  onClick?: () => void;
}

export const ExperienceCard = ({ 
  image, 
  category, 
  title, 
  variant = "main",
  className,
  onClick 
}: ExperienceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={cn(
        "group relative overflow-hidden bg-background cursor-pointer transition-all duration-500",
        variant === "main" ? "aspect-[16/10]" : "aspect-[16/13]",
        isHovered ? "shadow-xl" : "shadow-sm",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image with zoom effect */}
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-transform duration-700",
            isHovered ? "scale-105" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Teal accent bar - left side */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="space-y-2 pl-4">
          <p className="text-xs uppercase tracking-widest font-medium text-white">
            {category}
          </p>
          <h3 className={cn(
            "font-semibold text-white leading-tight",
            variant === "main" ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
          )}>
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};
