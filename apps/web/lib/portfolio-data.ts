export const portfolioData = {
  hero: {
    name: "Rithik Reddy",
    title: "Software Engineer & SAP Specialist",
    tagline: "Building scalable solutions from Next.js frontends to Enterprise Backends.",
    contact: {
      email: "rithikreddy680@gmail.com",
      phone: "+61 450 933 183",
      location: "Williams Landing, Victoria, Australia"
    }
  },

  experience: [
    {
      id: 1,
      role: "Software and IT Engineer",
      company: "Knowbal Migration and Education",
      date: "Mar 2025 - Present",
      summary:
        "Leading full-cycle web development and CRM automation to streamline migration workflows.",
      details: [
        "Developed and maintained the company website, ensuring high performance and user-friendly interfaces for prospective students.",
        "Optimized the proprietary CRM (KnowbalOne) by integrating automated workflows, smart document checklists, and eligibility checkers.",
        "Engineered automation solutions including email triggers that reduced manual administrative overhead.",
        "Configured the 'StudyKnowbal' e-learning platform, structuring learning hierarchies for a seamless student experience."
      ]
    },
    {
      id: 2,
      role: "Software Development Head",
      company: "Enigma Technical Society",
      date: "July 2023 - June 2024",
      summary:
        "Managed technical teams and oversaw software lifecycles from concept to execution.",
      details: [
        "Led the software development team to deliver high-quality solutions aligned with project goals.",
        "Coordinated cross-functional efforts with product, design, and QA teams for seamless project execution.",
        "Mentored developers and drove the adoption of new technologies to enhance development processes."
      ]
    },
    {
      id: 3,
      role: "Academic Mentor",
      company: "ICAS, MAHE",
      date: "2022 - 2024",
      summary:
        "Provided personalized mentoring and strategies to enhance student academic performance.",
      details: [
        "Identified learning gaps and created personalized strategies for underperforming students.",
        "Developed tailored learning plans and tools to improve study habits and time management."
      ]
    }
  ],

  education: [
    {
      id: 1,
      degree: "Bachelor of Software Engineering (Honours)",
      institution: "Monash University",
      date: "Current (4th Year)",
      details: "Specializing in advanced software architecture and system design."
    },
    {
      id: 2,
      degree: "B.Sc. (Applied Sciences) in CS & Engineering",
      institution: "ICAS, MAHE",
      date: "2022 - 2024",
      details:
        "Achieved CGPA 3.82/4.00 before transferring to Monash University."
    }
  ],

  projects: [
    {
      id: 1,
      title: "Skilltree",
      category: "Full Stack Social Platform",
      tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Tailwind"],
      image: "/projects/skilltree-preview.jpg",
      summary:
        "A scalable social skill-building platform featuring 'Skill Forests' and gamification.",
      details: {
        architecture:
          "Architected a separation of concerns between Next.js frontend and NestJS backend via RESTful API.",
        database:
          "Designed complex relational schema in PostgreSQL/Prisma tracking user progression and community verification.",
        features:
          "Implemented gamification logic (XP, Leaderboards) and a JWT-based peer-verification system.",
        ui: "Built a reusable type-safe UI library using shadcn/ui and Radix primitives."
      }
    },
    {
      id: 2,
      title: "Santorini Board Game Engine",
      category: "Game Development",
      tech: ["Java", "Swing", "Design Patterns"],
      image: "/projects/santorini-preview.jpg",
      summary:
        "Real-time board game engine with complex constraint systems and asynchronous threading.",
      details: {
        core: "Engineered a real-time turn constraint system using asynchronous threading for responsive UI.",
        mechanics:
          "Implemented a 'God Power' system overriding core rules to enable unique player interactions.",
        design:
          "Applied Factory and Visitor patterns to decouple action generation from rule validation."
      }
    },
    {
      id: 3,
      title: "Medicine Shop Software",
      category: "System Architecture",
      tech: ["C++", "StarUML", "OOP"],
      image: "/projects/medshop-preview.jpg",
      summary:
        "Console-based pharmacy management application automating inventory and sales logging.",
      details: {
        lifecycle:
          "Executed full SDLC from requirements analysis to system constraints.",
        modeling:
          "Designed comprehensive UML models (Use Case, Class, Sequence) using StarUML."
      }
    },
    {
      id: 4,
      title: "Online School Attendance System",
      category: "Web Application",
      tech: ["PHP", "SQL", "JavaScript", "RBAC"],
      image: "/projects/attendance-preview.jpg",
      summary:
        "Digitized attendance system with Role-Based Access Control and report generation.",
      details: {
        security:
          "Built a secure Role-Based Access Control (RBAC) system for admins, teachers, and students.",
        database:
          "Designed a normalized SQL schema to manage complex relationships and minimize redundancy."
      }
    }
  ],

  skills: {
    languages: ["Python", "Java", "C", "C++", "JavaScript", "SQL"],
    frontend: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3"],
    backend: ["Node.js", "NestJS", "Express.js", "Spring Boot", "Django/Flask"],
    database: ["PostgreSQL", "Prisma", "MongoDB", "SQL"],
    cloud_enterprise: ["AWS", "Firebase", "SAP S/4HANA", "CRM Integration"],
    tools: ["Docker", "Git", "Tableau", "Power BI", "StarUML"]
  }
} as const;

export type PortfolioData = typeof portfolioData;
