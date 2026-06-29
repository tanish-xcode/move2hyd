import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import WhyHyderabad from "./pages/WhyHyderabad";
import LivingHere from "./pages/LivingHere";
import WorkTech from "./pages/WorkTech";
import Culture from "./pages/Culture";
import Heritage from "./pages/Heritage";
import Cuisine from "./pages/Cuisine";
import Shopping from "./pages/Shopping";
import Nightlife from "./pages/Nightlife";
import TechHub from "./pages/TechHub";
import Ambassador from "./pages/Ambassador";
import Properties from "./pages/Properties";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
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
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
