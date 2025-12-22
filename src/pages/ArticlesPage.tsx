import { motion } from "framer-motion";
import ArticleCard from "@/components/ArticleCard";
import { siteConfig } from "@/config/siteConfig";

const ArticlesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 100, skewX: -10 },
    visible: {
      opacity: 1,
      x: 0,
      skewX: 0,
      transition: { type: "spring", stiffness: 100 },
    },
  };

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
              Insights & Tutorials
            </span>
            <h1 className="section-title gradient-text mt-2">Articles</h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Thoughts, tutorials, and insights on web development, design, and
              technology.
            </p>
          </motion.div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {siteConfig.articles.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>

          {/* More Articles CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <p className="font-body text-muted-foreground mb-4">
              More articles coming soon!
            </p>
            <motion.button
              className="font-display text-lg px-8 py-4 rounded-full glass-card text-foreground hover:text-primary transition-all glow-border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe for Updates
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesPage;
