import { motion } from "framer-motion";
import SkillBar from "@/components/SkillBar";
import { siteConfig } from "@/config/siteConfig";
import { Sparkles, Zap, Target, Rocket, Brain } from "lucide-react";

const AboutPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const abilityIcons = [Sparkles, Zap, Target, Rocket, Brain];

  return (
    <section className="min-h-screen pt-44 pb-28 snap-start">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-body text-primary text-lg uppercase tracking-widest">
              Get to know me
            </span>
            <h1 className="section-title gradient-text mt-2">About Me</h1>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Who I Am
                </h2>
                <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
                  {siteConfig.about.bio}
                </p>

                {/* Abilities */}
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  My Abilities
                </h3>
                <ul className="space-y-3">
                  {siteConfig.about.abilities.map((ability, index) => {
                    const Icon = abilityIcons[index % abilityIcons.length];
                    return (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 font-body text-foreground group"
                      >
                        <span className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                          <Icon className="w-4 h-4" />
                        </span>
                        {ability}
                      </motion.li>
                    );
                  })}
                </ul>
              </div>
            </motion.div>

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-8">
                  Skills & Expertise
                </h2>
                <div className="space-y-6">
                  {siteConfig.skills.map((skill, index) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      category={skill.category}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {[
            
              { label: "Projects Completed", value: "4+" },
              { label: "Hackathon participated", value: "7+" },
              { label: "Tools learned", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-xl p-6 text-center glow-border"
              >
                <span className="font-display text-4xl font-bold gradient-text">
                  {stat.value}
                </span>
                <p className="font-body text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;
