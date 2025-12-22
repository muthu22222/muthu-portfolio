import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Hero3D from "@/components/Hero3D";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";  

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 snap-start">
      {/* 3D Background */}
      <Hero3D />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 relative z-10 text-center max-w-3xl"
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
        <motion.div variants={itemVariants} className="mb-6">
          <img
            src={siteConfig.profileImage}
            alt={`${siteConfig.name} photo`}
            className="mx-auto w-28 h-28 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="gradient-text animate-glow-pulse">
            {siteConfig.name}
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={itemVariants}
          className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          {siteConfig.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12"
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
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
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

      {/* Highlights: short about, featured projects, contact CTA */}
      <section className="w-full mt-12 pt-8 pb-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="section-title gradient-text mb-2">Highlights</h2>
            <p className="font-body text-muted-foreground">
              A short overview of my work and what I build. I'm focused on building clean, performant apps with a focus on UX and modern tooling.
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.projects.slice(0, 3).map((project) => (
              <div key={project.id} className="glass-card rounded-xl p-4 text-left">
                <img src={project.image} alt={project.title} className="w-full h-32 object-cover rounded-md mb-3" />
                <h3 className="font-display text-lg font-bold mb-1">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">{project.description.slice(0, 90)}...</p>
                <div className="flex items-center justify-between">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-primary">GitHub</a>
                  <Link to="/projects" className="text-foreground hover:text-primary">View</Link>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-10">
            <p className="font-body text-muted-foreground mb-4">Want to work together or learn more?</p>
            <Link to="/contact">
              <Button size="lg" className="px-8 py-3 font-display">Contact Me</Button>
            </Link>
            <Link to="/projects" className="ml-4">
              <Button variant="outline" size="lg" className="px-8 py-3">See All Projects</Button>
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default HomePage; 
