import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { ScrollToTop } from "./components/ScrollToTop";

// Route-level code splitting: each page ships as its own chunk and loads
// on demand, keeping the initial bundle small (better mobile load times).
const Index = lazy(() => import("./pages/Index"));
const WhyHyderabad = lazy(() => import("./pages/WhyHyderabad"));
const LivingHere = lazy(() => import("./pages/LivingHere"));
const WorkTech = lazy(() => import("./pages/WorkTech"));
const Culture = lazy(() => import("./pages/Culture"));
const Heritage = lazy(() => import("./pages/Heritage"));
const Cuisine = lazy(() => import("./pages/Cuisine"));
const Shopping = lazy(() => import("./pages/Shopping"));
const Nightlife = lazy(() => import("./pages/Nightlife"));
const TechHub = lazy(() => import("./pages/TechHub"));
const Ambassador = lazy(() => import("./pages/Ambassador"));
const Properties = lazy(() => import("./pages/Properties"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/why-hyderabad" element={<WhyHyderabad />} />
              <Route path="/living-here" element={<LivingHere />} />
              <Route path="/work-tech" element={<WorkTech />} />
              <Route path="/culture" element={<Culture />} />
              <Route path="/heritage" element={<Heritage />} />
              <Route path="/cuisine" element={<Cuisine />} />
              <Route path="/shopping" element={<Shopping />} />
              <Route path="/nightlife" element={<Nightlife />} />
              <Route path="/tech-hub" element={<TechHub />} />
              <Route path="/ambassador" element={<Ambassador />} />
              <Route path="/properties" element={<Properties />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/admin" element={<AdminDashboard />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
