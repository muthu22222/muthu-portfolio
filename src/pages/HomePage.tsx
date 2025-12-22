import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Hero3D from "@/components/Hero3D";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

// Pages (also shown as sections on Home for single-page layout)
import AboutPage from "@/pages/AboutPage";
import ProjectsPage from "@/pages/ProjectsPage";
import ProfilesPage from "@/pages/ProfilesPage";
import ArticlesPage from "@/pages/ArticlesPage";
import ContactPage from "@/pages/ContactPage";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 snap-start">
      {/* 3D Background */}
      <Hero3D />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 text-center"
      >
        {/* Greeting */}
        <motion.div
          variants={itemVariants}
          className="inline-block mb-4 px-4 py-2 rounded-full glass-card"
        >
          <span className="font-body text-muted-foreground">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        {/*  Image */}
        <motion.div variants={itemVariants} className="mb-8">
          <img
            src={siteConfig.profileImage}
            alt={`${siteConfig.name} photo`}
            className="mx-auto w-36 h-36 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/30 shadow-lg"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6"
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="gradient-text animate-glow-pulse">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <Link to="/contact">
            <Button
              size="lg"
              className="group font-display text-lg px-8 py-6 bg-gradient-to-r from-primary to-accent text-primary-foreground hover:opacity-90 animate-pulse-glow"
            >
              Hire Me
              <motion.span
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Button>
          </Link>

          <a href={siteConfig.resumePath} download>
            <Button
              size="lg"
              variant="outline"
              className="group font-display text-lg px-8 py-6 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={itemVariants} className="mb-8">
          <SocialLinks variant="horizontal" size="md" />
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-body text-sm text-muted-foreground">
              Scroll to explore
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1.5 h-1.5 rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Duplicate main pages as in-page sections (no content changes) */}
      <div id="about">
        <AboutPage />
      </div>

      <div id="projects">
        <ProjectsPage />
      </div>

      <div id="profiles">
        <ProfilesPage />
      </div>

      <div id="articles">
        <ArticlesPage />
      </div>

      <div id="contact">
        <ContactPage />
      </div>
    </section>
  );
};

// Scroll to hash when landing on Home with a hash (e.g. /#projects)
// This ensures direct links and router hash navigation scroll to the section.
const HomePageWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      // small delay to allow page layout to settle
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location.hash]);

  return <HomePage />;
};

export default HomePageWrapper;
