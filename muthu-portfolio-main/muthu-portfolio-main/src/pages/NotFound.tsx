import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center px-4"
      >
        {/* 404 Number */}
        <motion.h1
          className="font-display text-[150px] md:text-[200px] font-black leading-none gradient-text"
          animate={{ 
            textShadow: [
              "0 0 20px hsl(185 100% 50%)",
              "0 0 40px hsl(300 100% 60%)",
              "0 0 20px hsl(185 100% 50%)",
            ]
          }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          404
        </motion.h1>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-2xl text-muted-foreground mb-8"
        >
          Oops! This page got lost in the matrix.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 font-display text-lg px-8 py-4 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground"
            >
              <Home className="w-5 h-5" />
              Go Home
            </motion.button>
          </Link>
          
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 font-display text-lg px-8 py-4 rounded-full glass-card text-foreground glow-border"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-3xl -z-10"
          style={{
            background: "radial-gradient(circle, hsl(185 100% 50%), hsl(300 100% 60%))",
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    </div>
  );
};

export default NotFound;
