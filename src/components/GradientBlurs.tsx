import { motion } from "framer-motion";

const GradientBlurs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Top Left */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(185 100% 50% / 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top Right */}
      <motion.div
        className="absolute -top-20 -right-40 w-[600px] h-[600px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(300 100% 60% / 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(185 100% 50% / 0.3) 0%, hsl(300 100% 60% / 0.2) 50%, transparent 70%)",
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 60, repeat: Infinity, ease: "linear" },
          scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      {/* Bottom Left */}
      <motion.div
        className="absolute -bottom-40 -left-20 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(140 100% 50% / 0.4) 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom Right */}
      <motion.div
        className="absolute -bottom-20 -right-40 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(185 100% 50% / 0.3) 0%, hsl(300 100% 60% / 0.2) 50%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default GradientBlurs;
