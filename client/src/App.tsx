import { Toaster } from "@/components/ui/sonner";
import ScrollToTop from "@/components/ScrollToTop";
import { LightboxProvider } from "@/components/ImageLightbox";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { lazy, Suspense } from "react";

// Eager load only the homepage for fast initial render
import Home from "./pages/Home";

// Lazy load all other pages for better code splitting
const Gallery = lazy(() => import("./pages/Gallery"));
const Oceanco = lazy(() => import("./pages/Oceanco"));
const History = lazy(() => import("./pages/History"));
const ExteriorDesignerPage = lazy(() => import("./pages/ExteriorDesignerPage"));
const InteriorDesignerPage = lazy(() => import("./pages/InteriorDesignerPage"));
const WellnessPage = lazy(() => import("./pages/WellnessPage"));
const MasterCabinPage = lazy(() => import("./pages/MasterCabinPage"));
const DeckSpacePage = lazy(() => import("./pages/DeckSpacePage"));
const TechnicalPage = lazy(() => import("./pages/TechnicalPage"));
const CrewSpacesPage = lazy(() => import("./pages/CrewSpacesPage"));
const BrokerPage = lazy(() => import("./pages/BrokerPage"));
const GuestAccommodationsPage = lazy(() => import("./pages/GuestAccommodationsPage"));
const EntertainmentPage = lazy(() => import("./pages/EntertainmentPage"));
const WaterToysPage = lazy(() => import("./pages/WaterToysPage"));
const DiningPage = lazy(() => import("./pages/DiningPage"));
const FullTourPage = lazy(() => import("./pages/FullTourPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="animate-pulse text-foreground/60">Loading...</div>
  </div>
);



function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/gallery"} component={Gallery} />

      
      {/* Content pages */}
      <Route path={"/history"} component={History} />
      <Route path={"/exterior-designer"} component={ExteriorDesignerPage} />
      <Route path={"/interior-designer"} component={InteriorDesignerPage} />
      <Route path={"/interior"} component={InteriorDesignerPage} />
      <Route path={"/exterior"} component={ExteriorDesignerPage} />
      <Route path={"/shipyard"} component={Oceanco} />
      <Route path={"/oceanco"} component={Oceanco} />
      <Route path={"/wellness"} component={WellnessPage} />
      <Route path={"/master-cabin"} component={MasterCabinPage} />
      <Route path={"/guest-accommodations"} component={GuestAccommodationsPage} />
      <Route path={"/deck-space"} component={DeckSpacePage} />
      <Route path={"/technical"} component={TechnicalPage} />
      <Route path={"/crew-spaces"} component={CrewSpacesPage} />
      <Route path={"/entertainment"} component={EntertainmentPage} />
      <Route path={"/dining"} component={DiningPage} />
      <Route path={"/water-toys"} component={WaterToysPage} />
      <Route path={"/broker"} component={BrokerPage} />
      <Route path={"/full-tour"} component={FullTourPage} />
      <Route path={"/tour"} component={FullTourPage} />
      <Route path={"/video-tour"} component={FullTourPage} />
      <Route path={"/design/oceanco"} component={Oceanco} />
      
      
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <LightboxProvider>
            <Toaster />
            <ScrollToTop />
            <Router />
          </LightboxProvider>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
