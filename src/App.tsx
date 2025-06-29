
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import HomePage from "./pages/Index";
import SobrePage from "./pages/Sobre";
import OndeBuscarAjudaPage from "./pages/OndeBuscarAjuda";
import DepoimentosPage from "./pages/Depoimentos";
import ComoAgirPage from "./pages/ComoAgir";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sobre" element={<SobrePage />} />
            <Route path="/onde-buscar-ajuda" element={<OndeBuscarAjudaPage />} />
            <Route path="/depoimentos" element={<DepoimentosPage />} />
            <Route path="/como-agir" element={<ComoAgirPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
