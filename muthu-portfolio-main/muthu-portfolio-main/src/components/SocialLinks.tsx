import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Github, Youtube, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

interface SocialLinksProps {
  variant?: "horizontal" | "vertical";
  size?: "sm" | "md" | "lg";
}

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  github: Github,
  youtube: Youtube,
  linkedin: Linkedin,
};

const SocialLinks = ({ variant = "horizontal", size = "md" }: SocialLinksProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  const containerClasses = {
    horizontal: "flex items-center gap-4",
    vertical: "flex flex-col items-center gap-4",
  };

  const socials = Object.entries(siteConfig.socials).filter(([_, url]) => url);

  return (
    <div className={containerClasses[variant]}>
      {socials.map(([key, url], index) => {
        const Icon = iconMap[key as keyof typeof iconMap];
        if (!Icon) return null;

        return (
          <motion.a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-3 rounded-full glass-card glow-border transition-all duration-300"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.2, rotate: 360 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon
              className={`${sizeClasses[size]} text-foreground group-hover:text-primary transition-colors duration-300`}
            />
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
              initial={false}
            />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
