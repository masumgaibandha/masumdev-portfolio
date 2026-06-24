export const featuredProjects = [
  {
    id: 1,
    slug: "toytopia",
    title: "ToyTopia",
    category: "E-Commerce Platform",
    description:
      "A full-featured toy marketplace where users can browse products, manage inventory, and explore category-based collections through a responsive user experience.",
    overview:
      "ToyTopia is an e-commerce style toy marketplace built to help users explore toy products through a clean, responsive, and user-friendly interface.",
    problem:
      "The goal was to create a polished product browsing experience with structured product data, category-based discovery, and a clean frontend layout suitable for an online marketplace.",
    solution:
      "I built a responsive marketplace interface with reusable components, product cards, category sections, and a clean navigation experience.",
    features: [
      "Product browsing experience",
      "Category-based product sections",
      "Responsive UI design",
      "Reusable React components",
      "Clean product card layout",
    ],
    stack: ["React", "Node.js", "MongoDB"],
    liveLink: "https://toytopia-masum.netlify.app/",
    githubLink: "https://github.com/masumgaibandha/toy-topia",
  },
  {
    id: 2,
    slug: "taskforge",
    title: "TaskForge",
    category: "Freelance Marketplace",
    description:
      "A micro-task marketplace with Stripe payments, freelancer proposals, client dashboards, and admin management.",
    overview:
      "TaskForge is a full-stack freelance micro-task marketplace where clients can post tasks, freelancers can submit proposals, and projects are completed through a secure payment workflow.",
    problem:
      "Clients need a simple way to post small tasks, receive proposals, hire freelancers, and manage payments while freelancers need a dedicated system to track proposals, active work, and earnings.",
    solution:
      "I built a role-based marketplace with Client, Freelancer, and Admin dashboards, Stripe Checkout payment flow, proposal management, review system, and responsive UI.",
    features: [
      "Role-based dashboards",
      "Task posting and proposal system",
      "Stripe Checkout payment flow",
      "Freelancer review and rating system",
      "Admin user and transaction management",
      "Responsive dashboard layout",
    ],
    stack: ["Next.js", "MongoDB", "Stripe", "Better Auth", "HeroUI"],
    liveLink: "https://taskforge-client.vercel.app/",
    githubLink: "https://github.com/masumgaibandha/taskforge-client",
  },
  {
    id: 3,
    slug: "assetverse",
    title: "AssetVerse",
    category: "Asset Management",
    description:
      "Enterprise asset management system with role-based access, tracking, and reporting.",
    overview:
      "AssetVerse is an asset management application designed to help organizations track and manage internal assets efficiently.",
    problem:
      "Businesses need a structured system to organize assets, assign responsibility, and manage asset lifecycle data from a central dashboard.",
    solution:
      "I developed a role-focused asset management interface with database-backed records, clean dashboard views, and responsive layouts.",
    features: [
      "Asset tracking system",
      "Role-based access",
      "Dashboard-style interface",
      "Database-backed asset records",
      "Responsive layout",
    ],
    stack: ["React", "Node.js", "MongoDB"],
    liveLink: "https://asset-verse-b5fc2.web.app/",
    githubLink: "https://github.com/masumgaibandha/asset-verse-client",
  },
  {
    id: 4,
    slug: "studynook",
    title: "StudyNook",
    category: "Learning Platform",
    description:
      "Online study and learning platform with course management and interactive features.",
    overview:
      "StudyNook is a learning-focused web application built to organize study resources and provide a clean experience for learners.",
    problem:
      "Students need a simple and organized way to access learning materials, browse resources, and interact with educational content.",
    solution:
      "I built a responsive learning platform interface with structured content sections, clean navigation, and database-powered features.",
    features: [
      "Learning resource browsing",
      "Responsive education platform UI",
      "Structured content sections",
      "Clean user experience",
      "Database integration",
    ],
    stack: ["React", "Firebase", "MongoDB"],
    liveLink: "https://studynook-omega.vercel.app",
    githubLink: "https://github.com/masumgaibandha/studynook",
  },
];

export const getProjectBySlug = (slug) => {
  return featuredProjects.find((project) => project.slug === slug);
};
