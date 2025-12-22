import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      viewport={{ once: true }}
      className="perspective-1000"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group cursor-pointer"
      >
        <div className="glass-card rounded-xl overflow-hidden transform-gpu transition-all duration-300 group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
          {/* Image Container */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{ transform: "translateZ(20px)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
            
            {/* Hover Overlay (actions removed) */}
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-gradient-to-t from-primary/30 to-accent/20 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-6" style={{ transform: "translateZ(30px)" }}>
            <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-2">
              {project.description}
            </p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 + 0.3 }}
                  className="text-xs font-body px-2 py-1 rounded-full border border-primary/30 text-primary bg-primary/10"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"
          style={{
            background: "linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3))",
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
