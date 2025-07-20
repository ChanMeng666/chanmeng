import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Chan",
  lastName: "Meng",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Web/Mobile App & AI/ML Infrastructure Engineer",
  avatar: "/images/avatar.jpg",
  email: "chanmeng.career@gmail.com",
  location: "Pacific/Auckland", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about web development, AI/ML infrastructure, and share insights on building
      impactful technology solutions for women&apos;s health and workplace wellness.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/chanmeng666",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/chanmeng666/",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}&apos;s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building impactful solutions at the intersection of AI and women&apos;s health</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Sanicle.Cloud</strong></>,
    href: "/work/sanicle-cloud-workplace-womens-health",
  },
  subline: (
    <>
      I&apos;m Chan Meng, a full-stack developer specializing in women&apos;s health technology.
      <br />Currently driving innovation as CTO at FreePeriod and AI/ML Infrastructure Engineer at Sanicle,
      <br />delivering enterprise-grade solutions with AI integration.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Full-stack developer with specialized expertise in women&apos;s health technology, combining
        React/Next.js, TypeScript, Python, and cloud infrastructure to build impactful web
        applications. Distinguished speaker at the UN CSW 69 Beyond Beijing 30 Conference,
        showcasing how AI technology effectively addresses workplace gender inequities.
        <br /><br />
        Passionate mentor dedicated to supporting women in STEM through the Forward with Her program,
        with proven impact across a diverse network of mentees from prestigious universities.
        Master&apos;s graduate with Distinction from Lincoln University, bringing academic excellence
        and practical implementation skills to every project.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Sanicle",
        timeframe: "Mar 2025 - Present",
        role: "Senior AI/ML Infrastructure Engineer",
        achievements: [
          <>
            Led the development of two key products that helped Sanicle achieve IBM Silver Partner
            certification through close collaboration with the IBM team.
          </>,
          <>
            Designed and developed Sanicle&apos;s corporate website using Next.js 15 and React 19,
            integrating IBM Cloud watsonx AI as an interactive customer service assistant.
          </>,
          <>
            Engineered Sanicle.Cloud, a comprehensive SaaS platform for workplace women&apos;s health
            management with predictive absenteeism alerts and AI-powered health consultations.
          </>,
          <>
            Built secure multi-tenant architecture with end-to-end encryption and GDPR compliance,
            ensuring complete data isolation between organizations.
          </>,
        ],
        images: [],
      },
      {
        company: "FreePeriod",
        timeframe: "Nov 2024 - Present",
        role: "Full-Stack Developer & CTO",
        achievements: [
          <>
            Leading software development for a HKUST(GZ)-incubated startup that builds smart
            vending systems for feminine hygiene products in public spaces.
          </>,
          <>
            Architected full-stack solution using Next.js 14 with App Router, built responsive
            interface using React 18, Tailwind CSS, and shadcn/ui.
          </>,
          <>
            Created custom i18n solution for English-Chinese localization and implemented
            location services with Google Maps API and analytics dashboard.
          </>,
        ],
        images: [],
      },
      {
        company: "ByteDance",
        timeframe: "Nov 2024 - Mar 2025",
        role: "Backend Developer",
        achievements: [
          <>
            Contributed to TikTok&apos;s microservices-based ecommerce platform development,
            integrating AI recommendations within a 7-member team.
          </>,
          <>
            Developed core microservices using Spring Cloud for user authentication,
            product management, and order processing.
          </>,
          <>
            Integrated Qwen LLM API for intelligent product recommendations and
            built responsive UI components with Vue3 and Element Plus.
          </>,
        ],
        images: [],
      },
      {
        company: "CORDE",
        timeframe: "Jun 2024 - Nov 2024",
        role: "Mobile Application Developer",
        achievements: [
          <>
            Led frontend development and database architecture of offline-first mobile
            application for field maintenance operations.
          </>,
          <>
            Designed SQLite database schema scaling to 18 tables for offline data management
            with automated background sync and real-time status monitoring.
          </>,
          <>
            Developed React Native mobile UI with dark/light themes and integrated
            ArcGIS mapping services with GPS tracking.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lincoln University",
        description: <>Master of Applied Computing (Nov 2023 - Dec 2024) - Dean&apos;s List Honoree (top 5%) with Distinction (GPA above 80%)</>,
      },
      {
        name: "Jiangsu Normal University",
        description: <>Bachelor of Geography Science (Sep 2012 - Jun 2016) - with Distinction (GPA above 80%)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Frontend Development",
        description: <>React, Next.js, Angular, TypeScript, JavaScript, Tailwind CSS, Redux, Framer Motion, Three.js</>,
        images: [],
      },
      {
        title: "Backend Development",
        description: <>Node.js, Express, Python (Flask, FastAPI), Java (Spring Cloud), REST API, WebSocket, Real-time Data Processing</>,
        images: [],
      },
      {
        title: "AI/ML Infrastructure",
        description: <>IBM Cloud watsonx AI integration, LLM API implementation, predictive analytics, AI-powered recommendation systems</>,
        images: [],
      },
      {
        title: "Databases & DevOps",
        description: <>PostgreSQL, MongoDB, MySQL, SQLite, Database Design, Query Optimization, Docker, Agile Methodologies</>,
        images: [],
      },
      {
        title: "Languages",
        description: <>TypeScript, JavaScript, Python, Java, Go, HTML, CSS, SQL, R</>,
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about web development, AI/ML, and women's health tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Full-stack development and AI/ML projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
