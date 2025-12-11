import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import AnimatedNav from "@/components/AnimatedNav";
import ParticleBackground from "@/components/ParticleBackground";
import GradientBlurs from "@/components/GradientBlurs";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProfilesPage from "@/pages/ProfilesPage";
import ArticlesPage from "@/pages/ArticlesPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/profiles" element={<ProfilesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </PageTransition>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Background Effects */}
        <ParticleBackground />
        <GradientBlurs />
        
        {/* Navigation */}
        <AnimatedNav />
        
        {/* Main Content */}
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
