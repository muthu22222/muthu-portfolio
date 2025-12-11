import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface SkillBarProps {
  name: string;
  level: number;
  category: string;
  index: number;
}

const SkillBar = ({ name, level, category, index }: SkillBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3">
          <span className="font-body text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </span>
          <span className="text-xs font-body px-2 py-0.5 rounded-full bg-accent/20 text-accent">
            {category}
          </span>
        </div>
        <motion.span
          className="font-display text-primary text-glow-cyan"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{
            delay: index * 0.1 + 0.2,
            duration: 1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
