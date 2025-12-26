import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero3D from "@/components/Hero3D";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import AboutPage from "./AboutPage";
import AchievementsPage from "./AchievementsPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";


const HomePage = () => {
  return (
    <main className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
      {/* Hero / Landing Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 snap-start">
        <Hero3D />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          {/* ...existing hero content... */}
          <motion.div className="inline-block mb-4 px-4 py-2 rounded-full glass-card">
            <span className="font-body text-muted-foreground">👋 Welcome to my portfolio</span>
          </motion.div>
          <div className="mb-6">
            <img src={siteConfig.profileImage} alt={`${siteConfig.name} photo`} className="mx-auto w-28 h-28 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg" />
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="gradient-text animate-glow-pulse">{siteConfig.name}</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">{siteConfig.tagline}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12">
            <Link to="/contact">
              <Button size="lg" className="group font-display text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 animate-pulse-glow">
                Hire Me
                <span className="ml-2"><ArrowRight className="w-5 h-5" /></span>
              </Button>
            </Link>
            <a href={siteConfig.resumePath} download>
              <Button size="lg" variant="outline" className="group font-display text-lg px-8 py-6 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary">
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>
          <div className="mb-8">
            <SocialLinks variant="horizontal" size="md" />
          </div>
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
            <div className="flex flex-col items-center gap-2">
              <span className="font-body text-sm text-muted-foreground">Scroll to explore</span>
              <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="min-h-screen snap-start flex items-center justify-center">
        <AboutPage />
      </section>
      {/* Achievements Section */}
      <section className="min-h-screen snap-start flex items-center justify-center">
        <AchievementsPage />
      </section>
      {/* Projects Section */}
      <section className="min-h-screen snap-start flex items-center justify-center">
        <ProjectsPage />
      </section>
      {/* Contact Section */}
      <section className="min-h-screen snap-start flex items-center justify-center">
        <ContactPage />
      </section>
    </main>
  );
};

export default HomePage;
