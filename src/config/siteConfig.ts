// ============================================
// SITE CONFIGURATION FILE
// Edit this file to customize your portfolio
// ============================================

export const siteConfig = {
  // Personal Information
  name: "MUTHUKUMARAN ",
  tagline: "Computer Science and Design Student",
  email: "sureshmuthu1212@gmail.com",
  location: "COIMBATORE ,INDIA",
  
  // Resume PDF (place in public folder)
  resumePath: "cv.jpg",
  // Profile image (place file in public/, path is root-relative)
  profileImage: "qwe.jpg",
  
  // Social Links
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61568072990813",
    instagram: "https://www.instagram.com/frozynnnn/",
    twitter: "https://x.com/MMuthu27884",
    github: "https://github.com/muthu22222",
    youtube: "https://www.youtube.com/@mkcreation1912",
    linkedin: "https://linkedin.com/in/yourprofile",
  },
  
  // Coding Profiles
  codingProfiles: {
    leetcode: "https://leetcode.com/u/MUTHU77/",
    hackerrank: "https://hackerrank.com/yourprofile",
    codechef: "https://www.codechef.com/users/brave_note_75",
   
  },
  
  // About Section
  about: {
    bio: `I am a second-year student with a strong interest in full stack development.
I build responsive and scalable web applications using modern frontend and backend technologies.
I enjoy learning new frameworks and continuously improving my coding skills.
I focus on writing clean, efficient, and maintainable code.
I aspire to grow as a professional software developer through real-world projects.`,
    
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
    { name: "c", level: 90, category: "Language" },
    { name: "Node.js", level: 88, category: "Backend" },
    { name: "Python", level: 85, category: "Language" },
    { name: "Blender", level: 80, category: "3D/Graphics" },
    { name: "Java", level: 82, category: "Language" },
    { name: "MY SQL", level: 85, category: "Database" },
  
  ],
  
  // Projects
  projects: [
    {
      id: 1,
      title: "ZOOTON",
      description: "Zootone is an E-commerce app designed for a seamless shopping experience.It offers a wide range of products with easy browsing and secure checkout.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      techStack: ["React", "Python", "TensorFlow", "D3.js"],
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/yourprofile/project1",
    },
    {
      id: 2,
      title: "ZOOTON",
      description: "Zootone is an E-commerce app designed for a seamless shopping experience.It offers a wide range of products with easy browsing and secure checkout",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      techStack: ["react", "firebase", "flutterflow"],
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

  // Achievements
  achievements: [
    {
      id: 1,
      title: "Winner - Hackathon XYZ",
      year: "2024",
      description: "Led a 4-person team to build an AI-driven accessibility tool and won first place.",
    },
    {
      id: 2,
      title: "Top 10 - College Coding Contest",
      year: "2023",
      description: "Placed in the top 10 among 500+ participants in a multi-round algorithmic contest.",
    },
    {
      id: 3,
      title: "Open Source Contributor",
      year: "2022",
      description: "Contributed significant bug fixes and features to a popular open-source library.",
    },
  ],
  
  // EmailJS Configuration (for contact form)
  emailjs: {
    serviceId: "service_1oy0ibw",
    templateId: "template_53orn09",
    publicKey: "47VFjHdCtMY45bHxU",
  },
  
  // Navigation Items
  navigation: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Profiles", path: "/profiles" },
    { name: "Achievements", path: "/achievements" },
    { name: "Contact", path: "/contact" },
  ],
};

export type SiteConfig = typeof siteConfig;
