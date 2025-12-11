// ============================================
// SITE CONFIGURATION FILE
// Edit this file to customize your portfolio
// ============================================

export const siteConfig = {
  // Personal Information
  name: "John Doe",
  tagline: "Full-Stack Developer & Creative Technologist",
  email: "your.email@example.com",
  location: "San Francisco, CA",
  
  // Resume PDF (place in public folder)
  resumePath: "/resume.pdf",
  
  // Social Links
  socials: {
    facebook: "https://facebook.com/yourprofile",
    instagram: "https://instagram.com/yourprofile",
    twitter: "https://twitter.com/yourprofile",
    github: "https://github.com/yourprofile",
    youtube: "https://youtube.com/@yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  
  // Coding Profiles
  codingProfiles: {
    leetcode: "https://leetcode.com/yourprofile",
    hackerrank: "https://hackerrank.com/yourprofile",
    codechef: "https://codechef.com/users/yourprofile",
    codeforces: "https://codeforces.com/profile/yourprofile",
  },
  
  // About Section
  about: {
    bio: `I'm a passionate full-stack developer with 5+ years of experience building 
    innovative web applications. I specialize in React, Node.js, and cloud technologies. 
    When I'm not coding, you'll find me exploring new technologies, contributing to 
    open-source projects, or sharing knowledge through tech blogs and tutorials.`,
    
    abilities: [
      "Building scalable web applications",
      "Creating intuitive user experiences",
      "Optimizing performance & accessibility",
      "Leading agile development teams",
      "Cloud architecture & deployment",
    ],
  },
  
  // Skills with proficiency percentage
  skills: [
    { name: "React / Next.js", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 90, category: "Language" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 85, category: "Language" },
    { name: "Three.js / WebGL", level: 80, category: "3D/Graphics" },
    { name: "AWS / Cloud", level: 82, category: "DevOps" },
    { name: "PostgreSQL", level: 85, category: "Database" },
    { name: "Docker / K8s", level: 78, category: "DevOps" },
  ],
  
  // Projects
  projects: [
    {
      id: 1,
      title: "AI Dashboard",
      description: "Real-time analytics dashboard with AI-powered insights and predictions. Features interactive charts, natural language queries, and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      techStack: ["React", "Python", "TensorFlow", "D3.js"],
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/yourprofile/project1",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce solution with payment processing, inventory management, and real-time order tracking.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      techStack: ["Next.js", "Stripe", "PostgreSQL", "Redis"],
      liveUrl: "https://example.com/project2",
      githubUrl: "https://github.com/yourprofile/project2",
    },
    {
      id: 3,
      title: "3D Portfolio Viewer",
      description: "Interactive 3D portfolio viewer with WebGL rendering, custom shaders, and immersive navigation experience.",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=600&fit=crop",
      techStack: ["Three.js", "React", "GSAP", "WebGL"],
      liveUrl: "https://example.com/project3",
      githubUrl: "https://github.com/yourprofile/project3",
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Real-time social platform with live chat, stories, and content sharing. Built with modern serverless architecture.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      techStack: ["React Native", "Firebase", "Node.js", "Socket.io"],
      liveUrl: "https://example.com/project4",
      githubUrl: "https://github.com/yourprofile/project4",
    },
    {
      id: 5,
      title: "DevOps Dashboard",
      description: "Comprehensive DevOps monitoring solution with CI/CD pipeline visualization, metrics tracking, and alerting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      techStack: ["Vue.js", "Go", "Kubernetes", "Prometheus"],
      liveUrl: "https://example.com/project5",
      githubUrl: "https://github.com/yourprofile/project5",
    },
    {
      id: 6,
      title: "ML Code Generator",
      description: "AI-powered code generation tool that converts natural language to production-ready code with documentation.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
      techStack: ["Python", "OpenAI", "FastAPI", "React"],
      liveUrl: "https://example.com/project6",
      githubUrl: "https://github.com/yourprofile/project6",
    },
  ],
  
  // Articles / Blog Posts
  articles: [
    {
      id: 1,
      title: "Building Scalable React Applications",
      excerpt: "Learn the best practices for building large-scale React apps with proper architecture, state management, and performance optimization.",
      date: "2024-01-15",
      readTime: "8 min read",
      tags: ["React", "Architecture"],
      link: "#",
    },
    {
      id: 2,
      title: "Introduction to Three.js for Web Developers",
      excerpt: "A comprehensive guide to getting started with 3D graphics on the web using Three.js and React Three Fiber.",
      date: "2024-01-08",
      readTime: "12 min read",
      tags: ["Three.js", "WebGL"],
      link: "#",
    },
    {
      id: 3,
      title: "Mastering TypeScript Generics",
      excerpt: "Deep dive into TypeScript generics with practical examples and advanced patterns for type-safe code.",
      date: "2023-12-20",
      readTime: "10 min read",
      tags: ["TypeScript", "Tutorial"],
      link: "#",
    },
    {
      id: 4,
      title: "The Future of Web Animation",
      excerpt: "Exploring modern animation techniques with Framer Motion, GSAP, and CSS animations for stunning user experiences.",
      date: "2023-12-10",
      readTime: "6 min read",
      tags: ["Animation", "UX"],
      link: "#",
    },
  ],
  
  // EmailJS Configuration (for contact form)
  emailjs: {
    serviceId: "YOUR_SERVICE_ID",
    templateId: "YOUR_TEMPLATE_ID",
    publicKey: "YOUR_PUBLIC_KEY",
  },
  
  // Navigation Items
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Profiles", path: "/profiles" },
    { name: "Articles", path: "/articles" },
    { name: "Contact", path: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
