import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Search, Heart, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import logo from "@/assets/logo.png";
const searchablePages = [{
  title: "Why Hyderabad",
  path: "/why-hyderabad",
  keywords: ["why", "move", "reasons", "benefits", "cost", "living"]
}, {
  title: "Living Here",
  path: "/living-here",
  keywords: ["living", "housing", "rent", "accommodation", "settle"]
}, {
  title: "Work & Tech",
  path: "/work-tech",
  keywords: ["work", "tech", "jobs", "career", "IT", "companies", "salary"]
}, {
  title: "Culture",
  path: "/culture",
  keywords: ["culture", "food", "festivals", "heritage", "cuisine", "biryani"]
}, {
  title: "Heritage",
  path: "/heritage",
  keywords: ["heritage", "charminar", "golconda", "history", "monuments"]
}, {
  title: "Cuisine",
  path: "/cuisine",
  keywords: ["food", "cuisine", "biryani", "haleem", "restaurants", "eat"]
}, {
  title: "Shopping",
  path: "/shopping",
  keywords: ["shopping", "malls", "markets", "bazaar", "clothes"]
}, {
  title: "Nightlife",
  path: "/nightlife",
  keywords: ["nightlife", "bars", "clubs", "pubs", "party", "entertainment"]
}, {
  title: "Tech Hub",
  path: "/tech-hub",
  keywords: ["tech", "startups", "innovation", "IT", "hitec city"]
}, {
  title: "Ambassador Program",
  path: "/ambassador",
  keywords: ["ambassador", "share", "refer", "iphone", "contest"]
}];
const favoritePages = [{
  title: "Why Hyderabad",
  path: "/why-hyderabad",
  description: "Discover the benefits"
}, {
  title: "Living Here",
  path: "/living-here",
  description: "Housing & lifestyle guide"
}, {
  title: "Work & Tech",
  path: "/work-tech",
  description: "Career opportunities"
}, {
  title: "Culture & Food",
  path: "/culture",
  description: "Experience the culture"
}];
export const Navigation = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const filteredPages = searchablePages.filter(page => page.title.toLowerCase().includes(searchQuery.toLowerCase()) || page.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())));
  const handleSearch = (path: string) => {
    setSearchOpen(false);
    setSearchQuery("");
    navigate(path);
  };
  const scrollToMoveGuide = () => {
    setMobileMenuOpen(false);
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById('move-guide');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  return <>
      {/* ASBL Initiative Banner */}
      <div className="fixed top-0 left-0 right-0 z-[1100] bg-primary text-primary-foreground text-center text-[11px] tracking-wide py-1.5">
        <span className="opacity-80">An </span>
        <a href="https://asbl.in" target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">ASBL</a>
        <span className="opacity-80"> Initiative</span>
      </div>
      <nav className={`fixed top-7 left-0 right-0 z-[1100] backdrop-blur-md border-b transition-all duration-500 ${
        scrolled ? "bg-background/90 border-border shadow-[0_4px_24px_rgba(0,0,0,0.06)]" : "bg-background/70 border-transparent"
      }`}>
        <div className="container mx-auto px-4 py-2 max-w-6xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link to="/">
                <img alt="Move2 Hyderabad" className="h-8 w-44 object-contain cursor-pointer rounded-none" src="/lovable-uploads/2ca0e23d-0289-4169-9e72-8bc34ab3ac67.png" />
              </Link>
              <div className="hidden md:flex items-center gap-5 text-sm font-medium">
                <Link to="/why-hyderabad" className="link-underline hover:text-primary transition-colors">Why Hyderabad</Link>
                <Link to="/living-here" className="link-underline hover:text-primary transition-colors">Living Here</Link>
                <Link to="/work-tech" className="link-underline hover:text-primary transition-colors">Work & Tech</Link>
                <Link to="/culture" className="link-underline hover:text-primary transition-colors">Culture</Link>
                <Link to="/properties" className="link-underline hover:text-primary transition-colors">Properties</Link>
                <Link to="/ambassador" className="link-underline hover:text-primary transition-colors">Ambassador</Link>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Search Button */}
              <Button variant="ghost" size="icon" className="hidden md:flex" onClick={() => setSearchOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>

              {/* Favorites Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="ghost" size="icon" className="hidden md:flex">
                    <Heart className="h-5 w-5" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72" align="end">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Quick Links</h4>
                    <div className="space-y-2">
                      {favoritePages.map(page => <Link key={page.path} to={page.path} className="flex flex-col p-2 rounded-lg hover:bg-muted transition-colors">
                          <span className="font-medium text-sm">{page.title}</span>
                          <span className="text-xs text-muted-foreground">{page.description}</span>
                        </Link>)}
                    </div>
                    <div className="pt-2 border-t">
                      <Link to="/ambassador" className="text-xs text-primary hover:underline flex items-center gap-1">
                        <Heart className="h-3 w-3 fill-primary" />
                        Share & Win iPhone 17!
                      </Link>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <ThemeToggle />

              {/* Plan Your Move Button */}
              <Button variant="hero" size="sm" className="hidden md:flex" onClick={scrollToMoveGuide}>
                Plan Your Move
              </Button>

              {/* Mobile Menu Button */}
              <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && <div className="md:hidden pt-4 pb-2 space-y-2 animate-fade-in">
              <Link to="/why-hyderabad" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Why Hyderabad
              </Link>
              <Link to="/living-here" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Living Here
              </Link>
              <Link to="/work-tech" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Work & Tech
              </Link>
              <Link to="/culture" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Culture
              </Link>
              <Link to="/properties" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Properties
              </Link>
              <Link to="/ambassador" className="block py-2 hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Ambassador
              </Link>
              <div className="pt-2 border-t">
                <Button variant="ghost" size="sm" className="w-full justify-start" onClick={() => {
              setMobileMenuOpen(false);
              setSearchOpen(true);
            }}>
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
              <Button variant="hero" size="sm" className="w-full mt-2" onClick={scrollToMoveGuide}>
                Plan Your Move
              </Button>
            </div>}
        </div>
      </nav>

      {/* Search Dialog */}
      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input placeholder="Search pages, topics..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} autoFocus />
            <div className="space-y-1 max-h-64 overflow-y-auto">
              {searchQuery.length > 0 ? filteredPages.length > 0 ? filteredPages.map(page => <button key={page.path} onClick={() => handleSearch(page.path)} className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-3">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <span>{page.title}</span>
                    </button>) : <p className="text-sm text-muted-foreground text-center py-4">
                    No results found for "{searchQuery}"
                  </p> : <div className="space-y-1">
                  <p className="text-xs text-muted-foreground mb-2">Popular searches</p>
                  {searchablePages.slice(0, 5).map(page => <button key={page.path} onClick={() => handleSearch(page.path)} className="w-full text-left p-3 rounded-lg hover:bg-muted transition-colors flex items-center gap-3">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <span>{page.title}</span>
                    </button>)}
                </div>}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>;
};