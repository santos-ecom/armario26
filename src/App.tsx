import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ProductPage from "./pages/ProductPage";
import ProductPageUSA from "./pages/ProductPageUSA";
import ProductPageBES from "./pages/ProductPageBES";
import ProductPagePRIME from "./pages/ProductPagePRIME";
import ProductPageEASY from "./pages/ProductPageEASY";
import ProductPageBOX from "./pages/ProductPageBOX";
import ProductPageLOJA7 from "./pages/ProductPageLOJA7";
import ProductPageLOJA8 from "./pages/ProductPageLOJA8";
import ProductPagePP from "./pages/ProductPagePP";
import ProductPageBESTLICENCAS from "./pages/ProductPageBESTLICENCAS";
import HomePage from "./pages/HomePage";
import PasswordGate from "./components/PasswordGate";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PasswordGate>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pt" element={<ProductPage />} />
            <Route path="/usa" element={<ProductPageEASY />} />
            <Route path="/bes" element={<ProductPageBES />} />
            <Route path="/prime" element={<ProductPagePRIME />} />
            <Route path="/easy" element={<ProductPageEASY />} />
            <Route path="/box" element={<ProductPageBOX />} />
            <Route path="/loja7" element={<ProductPageLOJA7 />} />
            <Route path="/loja8" element={<ProductPageLOJA8 />} />
            <Route path="/pp" element={<ProductPagePP />} />
            <Route path="/bestlicencas" element={<ProductPageBESTLICENCAS />} />
            <Route path="/index" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </PasswordGate>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
