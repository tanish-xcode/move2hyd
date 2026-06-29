import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Download, Home, Briefcase, GraduationCap, MapPin, Phone, CheckCircle, Check, Loader2, FileText, ChevronDown } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { Reveal } from "@/components/Reveal";

export const MoveGuide = () => {
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const guideItems = [
    {
      icon: Home,
      title: "Housing Guide",
      description: "Areas, pricing, and property options"
    },
    {
      icon: Briefcase,
      title: "Career Resources",
      description: "Job market and company listings"
    },
    {
      icon: GraduationCap,
      title: "Education Directory",
      description: "Schools, colleges, and learning centers"
    },
    {
      icon: MapPin,
      title: "City Navigation",
      description: "Transportation and key locations"
    }
  ];

  const included = [
    "Cost of living calculator",
    "Neighborhood comparison guide",
    "Top 50 companies hiring list",
    "School admission timelines",
    "Essential services directory",
    "Local tips from residents"
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone.trim()) {
      toast({
        title: "Phone number required",
        description: "Please enter your phone number.",
        variant: "destructive"
      });
      return;
    }

    if (phone.length !== 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const trimmedPhone = phone.trim().slice(0, 20);

    const { error } = await supabase
      .from('move_guide_leads')
      .insert({
        phone: trimmedPhone
      });

    if (error) {
      setIsSubmitting(false);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
      return;
    }

    const scriptUrl = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;
    if (scriptUrl) {
      const url = new URL(scriptUrl);
      url.searchParams.set("type", "lead");
      url.searchParams.set("phone", trimmedPhone);
      fetch(url.toString(), { mode: "no-cors" }).catch(() => {});
    }

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Success!",
      description: "Your guide is ready to download.",
    });
  };

  return (
    <section id="move-guide" className="py-14 sm:py-28 px-6 sm:px-10 bg-muted/40">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left — pitch */}
          <Reveal>
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              <span className="text-muted-foreground/60 mr-3">06</span>Free Resource
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
              Everything you need, in one docket.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-5 max-w-lg leading-relaxed">
              The complete relocation guide — researched, organised, and free. Built for anyone planning the move.
            </p>

            {/* Details — collapsible on mobile, always shown on desktop */}
            <div className={`${showDetails ? "block" : "hidden"} sm:block`}>
              {/* Guide items */}
              <div className="mt-8 sm:mt-10 divide-y divide-border border-t border-border">
                {guideItems.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 py-5">
                    <item.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Included checklist */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {included.map((item) => (
                  <p key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    {item}
                  </p>
                ))}
              </div>
            </div>

            {/* Mobile-only toggle */}
            <button
              type="button"
              onClick={() => setShowDetails((v) => !v)}
              className="sm:hidden mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
            >
              {showDetails ? "Show less" : "See what's inside"}
              <ChevronDown className={`w-4 h-4 transition-transform ${showDetails ? "rotate-180" : ""}`} />
            </button>
          </Reveal>

          {/* Right — form card */}
          <Reveal delay={150} className="lg:sticky lg:top-28">
            <div className="relative rounded-3xl bg-foreground text-background p-8 sm:p-10 overflow-hidden grain">
              <div className="relative z-10">
                {isSubmitted ? (
                  <div className="flex flex-col items-start gap-4 animate-fade-in">
                    <div className="w-14 h-14 rounded-2xl bg-background/10 flex items-center justify-center">
                      <CheckCircle className="h-7 w-7 text-background" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-background">You're all set.</h3>
                    <p className="text-background/55 text-sm leading-relaxed">
                      Your complete Move to Hyderabad guide is ready to download.
                    </p>
                    <a
                      href="/documents/hyderabad-move-guide.pdf"
                      download="Your_Complete_Guide_to_Moving_to_Hyderabad.pdf"
                      className="mt-2 inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-background text-foreground rounded-full font-semibold text-sm hover:bg-background/90 transition-colors"
                    >
                      <Download className="h-4 w-4" />
                      Download the guide (PDF)
                    </a>
                  </div>
                ) : (
                  <>
                    <div className="w-14 h-14 rounded-2xl bg-background/10 flex items-center justify-center mb-6">
                      <FileText className="h-7 w-7 text-background" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-background">
                      Get the free guide.
                    </h3>
                    <p className="text-background/55 text-sm mt-2 leading-relaxed">
                      Enter your phone number and the full docket is yours — instantly.
                    </p>
                    <form onSubmit={handleSubmit} className="mt-7 space-y-3">
                      <Input
                        type="tel"
                        placeholder="Phone number"
                        value={phone}
                        onChange={(e) => {
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setPhone(value);
                        }}
                        className="h-12 rounded-full px-5 bg-background/10 border-background/20 text-background placeholder:text-background/40 focus-visible:ring-background/40"
                        required
                        maxLength={10}
                        inputMode="numeric"
                        pattern="[0-9]*"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 rounded-full bg-background text-foreground font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-background/90 transition-colors disabled:opacity-60"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Processing…
                          </>
                        ) : (
                          <>
                            <Phone className="h-4 w-4" />
                            Get the guide
                          </>
                        )}
                      </button>
                      <p className="text-center text-[11px] text-background/40 pt-1">
                        Free PDF · No spam · Unsubscribe anytime
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
};
