import { motion } from "framer-motion";
import { siteConfig } from "@/config/siteConfig";
import { ExternalLink } from "lucide-react";

const ProfilesPage = () => {
  const profiles = [
    {
      name: "LeetCode",
      url: siteConfig.codingProfiles.leetcode,
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-leetcode-3521542-2944960.png",
      color: "#FFA116",
      description: "Algorithmic problem solving",
    },
    {
      name: "HackerRank",
      url: siteConfig.codingProfiles.hackerrank,
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-hackerrank-3521541-2944959.png",
      color: "#00EA64",
      description: "Coding challenges & certifications",
    },
    {
      name: "CodeChef",
      url: siteConfig.codingProfiles.codechef,
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-codechef-3521537-2944957.png",
      color: "#5B4638",
      description: "Competitive programming",
    },
    {
      name: "Codeforces",
      url: siteConfig.codingProfiles.codeforces,
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-codeforces-3628695-3029920.png",
      color: "#1F8ACB",
      description: "Competitive contests",
    },
    {
      name: "GitHub",
      url: siteConfig.socials.github,
      icon: "https://cdn.iconscout.com/icon/free/png-256/free-github-1521500-1288242.png",
      color: "#FFFFFF",
      description: "Open source contributions",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 150, damping: 20 },
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
              Competitive Coding
            </span>
            <h1 className="section-title gradient-text mt-2">
              Coding Profiles
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Check out my profiles on various competitive programming and
              coding platforms.
            </p>
          </motion.div>

          {/* Profiles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {profiles.map((profile, index) => (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  rotateY: 10,
                  rotateX: 5,
                }}
                whileTap={{ scale: 0.95 }}
                className="group glass-card rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,245,255,0.2)] glow-border"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl p-4 glass-card"
                  style={{
                    boxShadow: `0 0 30px ${profile.color}30`,
                  }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <img
                    src={profile.icon}
                    alt={profile.name}
                    className="w-full h-full object-contain filter brightness-100"
                  />
                </motion.div>

                {/* Name */}
                <h3 className="font-display text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                  {profile.name}
                </h3>

                {/* Description */}
                <p className="font-body text-muted-foreground mb-4">
                  {profile.description}
                </p>

                {/* Link Indicator */}
                <div className="flex items-center justify-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-body text-sm">Visit Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProfilesPage;
