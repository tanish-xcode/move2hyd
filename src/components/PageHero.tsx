import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt?: string;
  /** Optional looping background video; `image` becomes its poster/fallback. */
  video?: string;
  children?: ReactNode;
}

/**
 * Shared hero for sub-pages. Left-aligned, eyebrow + headline + subtitle
 * over a darkened image or looping video — matches the homepage hero language.
 */
export const PageHero = ({ eyebrow, title, subtitle, image, imageAlt, video, children }: PageHeroProps) => (
  <section className="relative min-h-[68vh] sm:min-h-screen flex items-end overflow-hidden">
    <div className="absolute inset-0 bg-black">
      {video ? (
        <video
          className="w-full h-full object-cover"
          src={video}
          poster={image}
          autoPlay
          muted
          loop
          playsInline
          aria-label={imageAlt || title}
        />
      ) : (
        <img src={image} alt={imageAlt || title} className="w-full h-full object-cover animate-slow-zoom" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/40" />
    </div>
    <div className="relative z-10 container mx-auto max-w-7xl px-6 sm:px-10 pb-16 pt-32">
      <div className="max-w-3xl hero-stagger">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.25em] text-white/60 font-medium mb-4">{eyebrow}</p>
        )}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-base sm:text-lg text-white/75 mt-5 max-w-xl leading-relaxed">{subtitle}</p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </div>
  </section>
);
