import { Button } from "@/components/ui/button";
import { Share2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/Reveal";

export const AmbassadorCTA = () => {
  const steps = [
    {
      num: "01",
      title: "Share the site",
      text: "Send this page to anyone considering a move to Hyderabad"
    },
    {
      num: "02",
      title: "Earn entries",
      text: "Every share on WhatsApp, Facebook, Twitter, or LinkedIn = one entry"
    },
    {
      num: "03",
      title: "Win an iPhone 17",
      text: "One winner drawn at the end of the contest period"
    }
  ];

  return (
    <section className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/40">
      <div className="container mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left */}
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">Ambassador Program</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
              Share & Win an iPhone 17
            </h2>
            <p className="text-muted-foreground text-base mb-8 leading-relaxed max-w-sm">
              Share this site with your network and automatically enter to win the latest iPhone 17. Every share is one entry.
            </p>
            <Link to="/ambassador">
              <Button size="lg" className="gap-2 rounded-full px-8">
                <Share2 className="w-4 h-4" />
                Start Sharing
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <p className="mt-4 text-xs text-muted-foreground">Contest active · No purchase required</p>
          </Reveal>

          {/* Right — numbered steps */}
          <Reveal delay={150} className="divide-y divide-border border-t border-border">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 py-6">
                <span className="text-sm font-mono text-muted-foreground/40 w-8 flex-shrink-0 pt-0.5">{step.num}</span>
                <div>
                  <p className="font-bold text-sm mb-1 tracking-tight">{step.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </Reveal>

        </div>
      </div>
    </section>
  );
};
