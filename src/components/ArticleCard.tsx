import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  link: string;
}

interface ArticleCardProps {
  article: Article;
  index: number;
}

const ArticleCard = ({ article, index }: ArticleCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group"
    >
      <a
        href={article.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block glass-card rounded-xl p-6 h-full transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.2)] glow-border"
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-body px-2 py-1 rounded-full bg-accent/20 text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
          {article.title}
        </h3>

        {/* Excerpt */}
        <p className="font-body text-muted-foreground text-sm mb-4 line-clamp-3">
          {article.excerpt}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-body">
              {new Date(article.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span className="font-body">{article.readTime}</span>
            </div>
          </div>

          <motion.div
            className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
            whileHover={{ x: 5 }}
          >
            <span className="font-body text-sm">Read</span>
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </a>
    </motion.article>
  );
};

export default ArticleCard;
