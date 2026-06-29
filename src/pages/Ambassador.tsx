import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Share2, Copy, Check, Heart, Award, Gift, MapPin, Briefcase, Quote, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-hyderabad.jpg";

const SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL as string | undefined;

const postToSheets = (params: Record<string, string>) => {
  if (!SCRIPT_URL) return;
  const url = new URL(SCRIPT_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  fetch(url.toString(), { mode: "no-cors" }).catch(() => {});
};

const trackShare = async (method: string, phone?: string) => {
  try {
    await supabase.from("ambassador_shares").insert({
      share_method: method,
      user_agent: navigator.userAgent,
    });
    if (phone) {
      await supabase.from("move_guide_leads").insert({
        phone,
        name: `ambassador:${method}`,
      });
      postToSheets({ type: "ambassador", phone, method });
    }
  } catch (error) {
    console.error("Failed to track share:", error);
  }
};

const Ambassador = () => {
  const [copied, setCopied] = useState(false);
  const [phoneDialogOpen, setPhoneDialogOpen] = useState(false);
  const [phone, setPhone] = useState("");
  const [pendingAction, setPendingAction] = useState<((phone: string) => void) | null>(null);
  const shareUrl = window.location.origin;
  const shareTitle = "Discover Hyderabad - The City of Pearls";
  const shareText = "Discover why Hyderabad is India's most exciting city for tech, culture, and quality of life.";

  const gateShare = (action: (phone: string) => void) => {
    setPendingAction(() => action);
    setPhoneDialogOpen(true);
  };

  const handlePhoneSubmit = async () => {
    if (!phone.trim()) {
      toast.error("Please enter your phone number");
      return;
    }
    setPhoneDialogOpen(false);
    if (pendingAction) pendingAction(phone.trim());
    setPhone("");
    setPendingAction(null);
  };

  const handleCopyLink = () => gateShare(async (ph) => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast.success("Link copied! You're entered in the draw.");
      trackShare("copy_link", ph);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  });

  const handleWhatsAppShare = () => gateShare((ph) => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
    window.open(whatsappUrl, "_blank");
    trackShare("whatsapp", ph);
  });

  const handleFacebookShare = () => gateShare((ph) => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(facebookUrl, "_blank");
    trackShare("facebook", ph);
  });

  const handleTwitterShare = () => gateShare((ph) => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(twitterUrl, "_blank");
    trackShare("twitter", ph);
  });

  const handleLinkedInShare = () => gateShare((ph) => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(linkedInUrl, "_blank");
    trackShare("linkedin", ph);
  });

  const handleEmailShare = () => gateShare((ph) => {
    const emailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText + "\n\n" + shareUrl)}`;
    window.location.href = emailUrl;
    trackShare("email", ph);
  });

  const testimonials = [
    {
      quote: "A friend shared this guide with me before my move. It made all the difference in finding the right neighborhood and understanding the city.",
      name: "Priya Sharma",
      role: "Software Engineer",
      from: "Moved from Bangalore"
    },
    {
      quote: "I wish I had this resource when I moved. Now I share it with everyone considering Hyderabad. The cost of living comparison alone is invaluable.",
      name: "Rahul Mehta",
      role: "Product Manager",
      from: "Moved from Mumbai"
    },
    {
      quote: "The neighborhood recommendations helped me find the perfect area near my office. I've recommended this to three colleagues already.",
      name: "Ananya Reddy",
      role: "Data Scientist",
      from: "Moved from Chennai"
    }
  ];

  const howItWorks = [
    {
      step: "01",
      title: "Share the link",
      description: "Send the guide to friends, family, or colleagues considering a move"
    },
    {
      step: "02",
      title: "They explore",
      description: "They discover neighborhoods, costs, and opportunities in Hyderabad"
    },
    {
      step: "03",
      title: "Informed decisions",
      description: "Help them plan their move with real data and local insights"
    }
  ];

  const whyShare = [
    {
      icon: Heart,
      title: "Help friends decide with confidence",
      text: "Moving cities is a big decision. This guide provides real data on costs, neighborhoods, and opportunities."
    },
    {
      icon: MapPin,
      title: "Neighborhood recommendations",
      text: "Our comparison tool helps find the right area based on budget, commute, and lifestyle preferences."
    },
    {
      icon: Briefcase,
      title: "Career opportunities",
      text: "Comprehensive info on tech companies, salaries, and the job market in Hyderabad."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <PageHero
        eyebrow="Ambassador Program"
        title="Help someone find their new home."
        subtitle="Know someone considering a move? Share this guide and help them discover everything Hyderabad has to offer."
        image={heroImage}
        imageAlt="Hyderabad skyline"
        video="/videos/shamshabad-orr.mp4"
      >
        <div className="flex flex-wrap items-center gap-5">
          <Button
            size="lg"
            onClick={handleCopyLink}
            className="gap-2 rounded-full bg-white text-foreground hover:bg-white/90 px-8 shadow-xl hover:scale-100"
          >
            {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
            {copied ? "Link Copied!" : "Share This Guide"}
          </Button>
          <div className="flex gap-6">
            {[
              { value: "10K+", label: "People Helped" },
              { value: "50K+", label: "Total Shares" },
              { value: "100+", label: "Countries" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-bold text-base leading-none">{stat.value}</p>
                <p className="text-white/45 text-[10px] uppercase tracking-[0.15em] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </PageHero>

      {/* iPhone Giveaway Band */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-7xl px-6 sm:px-10 py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold tracking-tight">Win an iPhone 17</h3>
                <p className="text-sm text-primary-foreground/70">
                  Share this guide and you're automatically entered into our monthly draw
                </p>
              </div>
            </div>
            <Button
              onClick={handleCopyLink}
              className="gap-2 whitespace-nowrap rounded-full bg-white text-primary hover:bg-white/90 shadow-none hover:scale-100"
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              {copied ? "Entered!" : "Share to Enter"}
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 px-6 sm:px-10 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-14">
            <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
              <span className="text-muted-foreground/60 mr-3">01</span>How It Works
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.05]">
              One share, one new beginning.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-0 border-t border-border">
            {howItWorks.map((item, index) => (
              <Reveal key={index} delay={index * 110}>
                <div className="pt-8 pb-6 md:pr-10 md:border-r border-border last:border-r-0 h-full">
                  <p className="text-5xl font-bold tracking-tight text-muted-foreground/20 mb-5">{item.step}</p>
                  <h3 className="font-bold text-lg tracking-tight mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-20 sm:py-28 px-6 sm:px-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">

            {/* Share Card */}
            <Reveal className="lg:sticky lg:top-28">
              <Card className="rounded-3xl border border-border shadow-none overflow-hidden">
                <CardContent className="p-7 md:p-9">
                  <div className="mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-5">
                      <Share2 className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Share this guide</h2>
                    <p className="text-muted-foreground text-sm mt-1.5">
                      Choose your preferred way to share
                    </p>
                  </div>

                  {/* Copy Link */}
                  <div className="mb-5 p-4 rounded-2xl bg-muted/50">
                    <p className="text-xs uppercase tracking-[0.15em] font-medium mb-2.5 text-muted-foreground">Copy link</p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={shareUrl}
                        readOnly
                        className="flex-1 min-w-0 px-4 py-2.5 rounded-full bg-background border border-border text-sm"
                      />
                      <Button
                        onClick={handleCopyLink}
                        className="gap-2"
                        variant={copied ? "secondary" : "default"}
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Social Media Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={handleWhatsAppShare}
                      className="gap-2 h-11 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-none hover:scale-100"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp
                    </Button>

                    <Button
                      onClick={handleFacebookShare}
                      className="gap-2 h-11 rounded-full bg-[#1877F2] hover:bg-[#166FE5] text-white shadow-none hover:scale-100"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>

                    <Button
                      onClick={handleTwitterShare}
                      className="gap-2 h-11 rounded-full bg-[#1DA1F2] hover:bg-[#1A94DA] text-white shadow-none hover:scale-100"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      Twitter
                    </Button>

                    <Button
                      onClick={handleLinkedInShare}
                      className="gap-2 h-11 rounded-full bg-[#0A66C2] hover:bg-[#095196] text-white shadow-none hover:scale-100"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      LinkedIn
                    </Button>
                  </div>

                  <Button
                    onClick={handleEmailShare}
                    className="w-full gap-2 h-11 mt-2"
                    variant="outline"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Share via Email
                  </Button>

                </CardContent>
              </Card>
            </Reveal>

            {/* Why Share + Testimonials */}
            <div className="space-y-12">
              <Reveal delay={100}>
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
                  <span className="text-muted-foreground/60 mr-3">02</span>Why Share
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-8">
                  Your share goes further than you think.
                </h2>
                <div className="divide-y divide-border border-t border-border">
                  {whyShare.map((item) => (
                    <div key={item.title} className="flex gap-4 py-5">
                      <item.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-sm sm:text-base mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={150}>
                <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">
                  <span className="text-muted-foreground/60 mr-3">03</span>What People Say
                </p>
                <div className="space-y-4">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="rounded-2xl border border-border bg-card p-6">
                      <Quote className="w-6 h-6 text-primary/25 mb-3" />
                      <p className="text-sm mb-5 leading-relaxed">"{testimonial.quote}"</p>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-sm font-semibold text-primary">
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role} · {testimonial.from}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — dark band */}
      <section className="relative bg-foreground text-background overflow-hidden grain">
        <div className="relative z-10 container mx-auto max-w-7xl px-6 sm:px-10 py-20 sm:py-24">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.05] text-background">
                Ready to help someone?
              </h2>
              <p className="text-background/50 text-base mt-4 leading-relaxed">
                Your share could be the start of someone's new chapter in Hyderabad.
              </p>
            </div>
            <Button
              size="lg"
              onClick={handleCopyLink}
              className="gap-2 rounded-full bg-background text-foreground hover:bg-background/90 px-8 self-start md:self-auto shadow-none hover:scale-100"
            >
              {copied ? <Check className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
              {copied ? "Link Copied!" : "Share This Guide"}
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Phone number gate dialog */}
      <Dialog open={phoneDialogOpen} onOpenChange={setPhoneDialogOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <div className="w-11 h-11 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <DialogTitle className="text-xl">One quick step</DialogTitle>
            <DialogDescription className="text-sm leading-relaxed mt-1">
              Enter your phone number to share and be entered into the monthly iPhone 17 draw.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 pt-2">
            <Input
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handlePhoneSubmit()}
              className="h-11 rounded-full px-4"
              autoFocus
            />
            <Button onClick={handlePhoneSubmit} className="w-full rounded-full h-11">
              Continue & Share
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Ambassador;
