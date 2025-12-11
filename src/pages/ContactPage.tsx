import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig } from "@/config/siteConfig";
import { Mail, MapPin, Send } from "lucide-react";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="font-body text-primary text-lg uppercase tracking-widest">
              Let's Connect
            </span>
            <h1 className="section-title gradient-text mt-2">Get In Touch</h1>
            <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto mt-4">
              Have a project in mind or want to collaborate? I'd love to hear
              from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>

                {/* Email */}
                <motion.a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/10 transition-all group"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">
                      Email
                    </p>
                    <p className="font-body text-lg text-foreground">
                      {siteConfig.email}
                    </p>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  className="flex items-center gap-4 p-4 rounded-xl"
                  whileHover={{ x: 10 }}
                >
                  <div className="p-3 rounded-full bg-accent/10 text-accent">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-body text-sm text-muted-foreground">
                      Location
                    </p>
                    <p className="font-body text-lg text-foreground">
                      {siteConfig.location}
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl font-bold text-foreground mb-6">
                  Follow Me
                </h3>
                <SocialLinks variant="horizontal" size="lg" />
              </div>

              {/* Quick Message */}
              <motion.div
                className="glass-card rounded-2xl p-8 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <div className="relative z-10">
                  <Send className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    Open for Opportunities
                  </h3>
                  <p className="font-body text-muted-foreground">
                    I'm currently available for freelance work and exciting
                    collaborations. Let's build something amazing together!
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-card rounded-2xl p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                  Send a Message
                </h2>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactPage;
