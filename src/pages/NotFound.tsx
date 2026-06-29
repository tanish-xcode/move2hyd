import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-1 flex items-center px-6 sm:px-10 pt-24">
        <div className="container mx-auto max-w-7xl hero-stagger">
          <p className="text-xs uppercase tracking-[0.25em] text-primary font-semibold mb-4">Page not found</p>
          <h1 className="text-[22vw] sm:text-[16vw] font-extrabold tracking-tighter leading-[0.85] text-foreground/[0.07] select-none">
            404
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-md -mt-4 sm:-mt-8 leading-relaxed">
            This street doesn't exist — even in Hyderabad. Let's get you back somewhere familiar.
          </p>
          <Link
            to="/"
            className="group mt-8 inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-[hsl(var(--luxury-accent-hover))] transition-colors mb-20"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
