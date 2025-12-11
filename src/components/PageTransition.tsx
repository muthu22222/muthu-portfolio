import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 20,
  },
  enter: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Different transition styles for different pages
const getPageTransition = (pathname: string) => {
  switch (pathname) {
    case "/":
      return {
        initial: { opacity: 0, scale: 0.9 },
        enter: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
        },
        exit: { 
          opacity: 0, 
          scale: 1.1,
          transition: { duration: 0.4 }
        },
      };
    case "/about":
      return {
        initial: { opacity: 0, x: -100 },
        enter: { 
          opacity: 1, 
          x: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 100 }
        },
        exit: { 
          opacity: 0, 
          x: 100,
          transition: { duration: 0.3 }
        },
      };
    case "/projects":
      return {
        initial: { opacity: 0, y: 100, rotateX: -10 },
        enter: { 
          opacity: 1, 
          y: 0,
          rotateX: 0,
          transition: { duration: 0.6, type: "spring", stiffness: 80 }
        },
        exit: { 
          opacity: 0, 
          y: -100,
          rotateX: 10,
          transition: { duration: 0.4 }
        },
      };
    case "/profiles":
      return {
        initial: { opacity: 0, scale: 0.8, rotate: -5 },
        enter: { 
          opacity: 1, 
          scale: 1,
          rotate: 0,
          transition: { duration: 0.5, type: "spring", stiffness: 150 }
        },
        exit: { 
          opacity: 0, 
          scale: 1.2,
          rotate: 5,
          transition: { duration: 0.3 }
        },
      };
    case "/articles":
      return {
        initial: { opacity: 0, x: 100, skewX: -10 },
        enter: { 
          opacity: 1, 
          x: 0,
          skewX: 0,
          transition: { duration: 0.5, ease: "easeOut" }
        },
        exit: { 
          opacity: 0, 
          x: -100,
          skewX: 10,
          transition: { duration: 0.3 }
        },
      };
    case "/contact":
      return {
        initial: { opacity: 0, y: 50, filter: "blur(10px)" },
        enter: { 
          opacity: 1, 
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.6, ease: "easeOut" }
        },
        exit: { 
          opacity: 0, 
          y: -50,
          filter: "blur(10px)",
          transition: { duration: 0.3 }
        },
      };
    default:
      return pageVariants;
  }
};

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const transition = getPageTransition(location.pathname);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={transition}
        initial="initial"
        animate="enter"
        exit="exit"
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
