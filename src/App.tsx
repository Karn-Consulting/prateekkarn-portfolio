import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import NotFound from "./pages/NotFound";
import MyWork from "./pages/MyWork";
import EnterpriseAIPreparedness from "./pages/EnterpriseAIPreparedness";
import WebInfrastructure from "./pages/WebInfrastructure";
import ExecVentureGauge from "./pages/ExecVentureGauge";
import ExecVentureGaugeApp from "./pages/ExecVentureGaugeApp";
import Insights from "./pages/Insights";
import InsightPost from "./pages/InsightPost";
import CookieConsent from "./components/CookieConsent";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/mywork" element={<MyWork />} />
            <Route path="/mywork/enterprise-ai-preparedness" element={<EnterpriseAIPreparedness />} />
            <Route path="/mywork/web-infrastructure" element={<WebInfrastructure />} />
            <Route path="/mywork/exec-venture-gauge" element={<ExecVentureGauge />} />
            <Route path="/mywork/exec-venture-gauge/app" element={<ExecVentureGaugeApp />} />
            {/* Insights/Blog Routes */}
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
