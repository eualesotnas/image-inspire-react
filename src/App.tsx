
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PetProvider } from "./context/PetContext";
import MapPage from "./pages/MapPage";
import NewReportPage from "./pages/NewReportPage";
import HeroDataPage from "./pages/HeroDataPage";
import PetDetailsPage from "./pages/PetDetailsPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import ReportsPage from "./pages/ReportsPage";
import CharacteristicsPage from "./pages/CharacteristicsPage";
import { AnimatePresence } from 'framer-motion';
import NotFound from "./pages/NotFound";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <PetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/new-report" element={<NewReportPage />} />
              <Route path="/hero-data" element={<HeroDataPage />} />
              <Route path="/pet-details" element={<PetDetailsPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/search" element={<CharacteristicsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </PetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
