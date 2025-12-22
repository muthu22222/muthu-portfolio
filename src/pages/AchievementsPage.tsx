import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";

const AchievementsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-body text-primary text-lg uppercase tracking-widest">Achievements</span>
            <h1 className="section-title gradient-text mt-2">Achievements</h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Notable milestones and recognitions from my work and competitions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.achievements.map((ach) => (
              <motion.div
                key={ach.id}
                variants={itemVariants}
                className="glass-card rounded-2xl p-6"
              >
                <h3 className="font-display text-lg font-bold mb-2">{ach.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-3">{ach.description}</p>
                <div className="text-sm text-primary">{ach.year}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsPage;
