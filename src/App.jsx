
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PetProvider } from "./context/PetContext.jsx";
import MapPage from "./pages/MapPage.jsx";
import NewReportPage from "./pages/NewReportPage.jsx";
import HeroDataPage from "./pages/HeroDataPage.jsx";
import PetDetailsPage from "./pages/PetDetailsPage.jsx";
import ConfirmationPage from "./pages/ConfirmationPage.jsx";
import ReportsPage from "./pages/ReportsPage.jsx";
import CharacteristicsPage from "./pages/CharacteristicsPage.jsx";
import { AnimatePresence } from 'framer-motion';
import NotFound from "./pages/NotFound.jsx";
import Index from "./pages/Index.jsx";

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
