import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative mt-20 border-t border-border/30"
    >
      {/* Gradient blur background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="gradient-blur w-[400px] h-[200px] -left-20 top-0 bg-primary/20" />
        <div className="gradient-blur w-[300px] h-[150px] right-0 bottom-0 bg-accent/20" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/"
              className="font-display text-2xl font-bold gradient-text"
            >
              {siteConfig.name.split(" ")[0]}
              <span className="text-accent">.</span>
            </Link>
            <p className="font-body text-muted-foreground mt-4 max-w-xs">
              Building innovative digital experiences with cutting-edge
              technology.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="font-body text-muted-foreground hover:text-primary transition-colors animated-underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-display text-lg font-bold text-foreground mb-4">
              Connect
            </h4>
            <SocialLinks variant="horizontal" size="sm" />
            <p className="font-body text-muted-foreground mt-4">
              {siteConfig.email}
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-border/30 text-center"
        >
          <p className="font-body text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} {siteConfig.name}. Made with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <Heart className="w-4 h-4 text-accent fill-accent" />
            </motion.span>{" "}
            All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
