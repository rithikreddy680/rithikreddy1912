import { BlankIntro } from "../components/site/blank-intro";
import { Container } from "../components/site/container";

const contact = {
  name: "Rithik Reddy Singireddy (21)",
  location: "Williams Landing, 3027",
  email: "rithikreddy680@gmail.com",
  phoneAu: "+61 450 933 183",
  phoneIn: "+91 9059712351"
};

const experiences = [
  {
    title: "Software and IT Engineer",
    org: "Knowbal Migration and Education",
    dates: "Mar 2025 – Present",
    bullets: [
      "Developed and maintained the company website, ensuring high performance and a user-friendly interface.",
      "Optimized the proprietary CRM (KnowbalOne) by integrating automated workflows including smart document checklists and an applicant eligibility checker.",
      "Designed and implemented automated email triggers to improve client communication efficiency and reduce manual overhead.",
      "Developed and configured the StudyKnowbal learning platform with structured levels and curated educational hierarchies."
    ]
  },
  {
    title: "Software Development Head",
    org: "Enigma Technical Society",
    dates: "Jul 2023 – Jun 2024",
    bullets: [
      "Led the software development team and ensured timely delivery of high-quality solutions aligned with project goals.",
      "Oversaw project lifecycles from concept to deployment, providing technical guidance and driving best practices.",
      "Coordinated with product, design, and QA teams for smooth execution.",
      "Mentored developers and drove adoption of new technologies to improve development workflows."
    ]
  },
  {
    title: "Academic Mentor",
    org: "ICAS, MAHE",
    dates: "2022 – 2024",
    bullets: [
      "Mentored underperforming students with personalized strategies and learning plans.",
      "Built study and time management frameworks and collaborated with educators to monitor progress.",
      "Created a supportive environment to build confidence and growth mindset."
    ]
  },
  {
    title: "Sports Secretary",
    org: "ICAS, MAHE",
    dates: "Oct 2022 – Jun 2024",
    bullets: [
      "Progressed from Joint Sports Secretary to Sports Secretary.",
      "Organized major sports events including logistics, scheduling, registrations, and resource allocation.",
      "Partnered with departments to ensure smooth event execution and grow participation."
    ]
  }
];

const projects = [
  {
    title: "Skilltree (Social Skill-Building Platform)",
    dates: "Feb 2025 – Nov 2025",
    stack: "Next.js, NestJS, PostgreSQL, Prisma, Tailwind",
    bullets: [
      "Architected a scalable full-stack platform with a Next.js frontend and NestJS backend communicating via a REST API.",
      "Designed a relational schema in PostgreSQL/Prisma modeling Skill Trees/Forests, progression, verification workflows, and community relationships.",
      "Implemented ranked events, XP calculation using consistency metrics, and dynamic leaderboards.",
      "Built a reusable, type-safe UI library using shadcn/ui + Radix with compound components and custom hooks.",
      "Implemented JWT-based auth and peer verification for proof-of-practice uploads."
    ]
  },
  {
    title: "Santorini Board Game Engine",
    dates: "Feb 2025 – May 2025",
    stack: "Java, Swing, Design Patterns",
    bullets: [
      "Engineered a real-time turn constraint system using asynchronous threading for responsive UI updates.",
      "Implemented a flexible God Power system that overrides core movement/build rules for unique interactions.",
      "Applied Factory and Visitor patterns to decouple action generation from rule validation for extensibility."
    ]
  },
  {
    title: "Medicine Shop Software",
    dates: "Oct 2023 – Nov 2023",
    stack: "C++, StarUML",
    bullets: [
      "Built a console pharmacy management system to automate inventory, sales logging, and stock management.",
      "Executed full SDLC from requirements analysis through implementation.",
      "Designed UML artifacts (Use Case, Class, Sequence, Activity, Component) to guide development.",
      "Implemented OOP principles for maintainable architecture."
    ]
  },
  {
    title: "Online School Attendance System",
    dates: "Aug 2023 – Oct 2023",
    stack: "PHP, SQL, JavaScript, HTML/CSS",
    bullets: [
      "Co-engineered a full-stack system to digitize school attendance workflows.",
      "Designed a normalized SQL schema modeling students, classes, and attendance records.",
      "Built Role-Based Access Control (RBAC) for strict privacy across admins, teachers, and students.",
      "Implemented dynamic reporting to view/export attendance trends in a responsive UI."
    ]
  }
];

const skillGroups = [
  {
    label: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "JavaScript", "SQL"]
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "HTML5", "CSS3"]
  },
  {
    label: "Backend",
    items: ["Node.js", "Express.js", "NestJS", "Spring Boot", "Django", "Flask"]
  },
  {
    label: "Databases & ORM",
    items: ["PostgreSQL", "Prisma", "MongoDB", "SQL"]
  },
  {
    label: "Cloud & Services",
    items: ["AWS", "Firebase"]
  },
  {
    label: "Core Concepts",
    items: ["DSA", "OOP", "Agile/Scrum", "SAFe", "CRM Integration", "Performance Optimization"]
  },
  {
    label: "Data & Analytics",
    items: ["Tableau", "Power BI", "Jupyter Notebooks", "Data Visualization"]
  },
  {
    label: "Leadership",
    items: ["Technical Leadership", "Team Management", "Mentoring"]
  }
];

export default function HomePage() {
  return (
    <main className="pb-24">
      <BlankIntro />

      <section id="about" className="scroll-mt-28 pt-24 pb-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:items-start">
            <section className="md:col-span-7">
              <div className="text-xs tracking-[0.35em] text-neutral-500">ABOUT</div>
              <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">{contact.name}</h2>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700">
                Dedicated Software Engineering student at Monash University with a strong foundation
                in Computer Science and Applied Mathematics. Experienced in full-cycle software
                development including system automation, web application deployment, and
                performance optimization. Proven leader as a Software Development Head, skilled in
                managing technical teams and overseeing project lifecycles from concept to
                execution. Passionate about building scalable solutions and solving complex
                technical challenges.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-4 text-sm text-neutral-700 sm:grid-cols-2">
                <div className="border border-black/5 bg-white p-5">
                  <div className="text-xs tracking-[0.35em] text-neutral-500">LOCATION</div>
                  <div className="mt-2 text-neutral-800">{contact.location}</div>
                </div>
                <div className="border border-black/5 bg-white p-5">
                  <div className="text-xs tracking-[0.35em] text-neutral-500">EMAIL</div>
                  <a
                    className="mt-2 inline-block text-neutral-800 hover:text-black"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </section>

            <aside className="md:col-span-5">
              <div className="overflow-hidden rounded-2xl bg-neutral-100">
                <img
                  alt="Rithik portrait"
                  src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 text-xs tracking-[0.22em] text-neutral-500">
                To use your photo in the intro, add <span className="text-neutral-700">apps/web/public/rithik.jpg</span>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <section id="education" className="scroll-mt-28 pb-20">
        <Container>
          <div className="text-xs tracking-[0.35em] text-neutral-500">EDUCATION</div>
          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">Education</h2>

          <div className="mt-10 grid grid-cols-1 gap-6">
            <div className="border border-black/5 bg-white p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <div className="text-lg font-medium text-neutral-900">
                  Bachelor of Software Engineering (Honours)
                </div>
                <div className="text-sm text-neutral-600">Monash University · 4th year</div>
              </div>
            </div>

            <div className="border border-black/5 bg-white p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                <div className="text-lg font-medium text-neutral-900">
                  B.Sc. (Applied Sciences) in Computer Science and Engineering
                </div>
                <div className="text-sm text-neutral-600">ICAS MAHE · 2022–2024</div>
              </div>
              <div className="mt-2 text-sm text-neutral-700">CGPA: 3.82/4.00 (transferred to Monash)</div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="border border-black/5 bg-white p-6">
                <div className="text-sm tracking-[0.22em] text-neutral-500">GRADE 12</div>
                <div className="mt-2 text-lg font-medium text-neutral-900">98.2%</div>
              </div>
              <div className="border border-black/5 bg-white p-6">
                <div className="text-sm tracking-[0.22em] text-neutral-500">GRADE 10</div>
                <div className="mt-2 text-lg font-medium text-neutral-900">93.8%</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="experience" className="scroll-mt-28 pb-20">
        <Container>
          <div className="text-xs tracking-[0.35em] text-neutral-500">EXPERIENCE</div>
          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">Experience</h2>

          <div className="mt-10 grid grid-cols-1 gap-6">
            {experiences.map((xp) => (
              <div key={xp.title + xp.org} className="border border-black/5 bg-white p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <div>
                    <div className="text-lg font-medium text-neutral-900">{xp.title}</div>
                    <div className="text-sm text-neutral-700">{xp.org}</div>
                  </div>
                  <div className="text-sm text-neutral-600">{xp.dates}</div>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
                  {xp.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="projects" className="scroll-mt-28 pb-20">
        <Container>
          <div className="text-xs tracking-[0.35em] text-neutral-500">PROJECTS</div>
          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">Projects</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700">
            A selection of work across full-stack platforms, automation, and systems built with
            strong engineering fundamentals and a focus on scalability.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6">
            {projects.map((p) => (
              <article key={p.title} className="border border-black/5 bg-white p-6">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <h3 className="text-lg font-medium text-neutral-900">{p.title}</h3>
                  <div className="text-sm text-neutral-600">{p.dates}</div>
                </div>
                <div className="mt-2 text-sm text-neutral-700">{p.stack}</div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-700">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="skills" className="scroll-mt-28 pb-20">
        <Container>
          <div className="text-xs tracking-[0.35em] text-neutral-500">SKILLS</div>
          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">Skills</h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.label} className="border border-black/5 bg-white p-6">
                <div className="text-xs tracking-[0.35em] text-neutral-500">{g.label}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-28 pb-24">
        <Container>
          <div className="text-xs tracking-[0.35em] text-neutral-500">CONTACT</div>
          <h2 className="mt-6 font-serif text-5xl leading-tight sm:text-6xl">Let’s talk</h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-neutral-700">
            Reach out for internships, full-time roles, freelance work, or collaboration on
            engineering projects.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="border border-black/5 bg-white p-6">
              <div className="text-xs tracking-[0.35em] text-neutral-500">EMAIL</div>
              <a className="mt-2 inline-block text-sm text-neutral-800 hover:text-black" href={`mailto:${contact.email}`}>
                {contact.email}
              </a>
              <div className="mt-6 text-xs tracking-[0.35em] text-neutral-500">LOCATION</div>
              <div className="mt-2 text-sm text-neutral-800">{contact.location}</div>
            </div>

            <div className="border border-black/5 bg-white p-6">
              <div className="text-xs tracking-[0.35em] text-neutral-500">PHONE</div>
              <div className="mt-2 space-y-2 text-sm">
                <a className="block text-neutral-800 hover:text-black" href={`tel:${contact.phoneAu.replace(/\s/g, "")}`}>
                  {contact.phoneAu}
                </a>
                <a className="block text-neutral-800 hover:text-black" href={`tel:${contact.phoneIn.replace(/\s/g, "")}`}>
                  {contact.phoneIn}
                </a>
              </div>

              <div className="mt-6 text-xs tracking-[0.35em] text-neutral-500">NAME</div>
              <div className="mt-2 text-sm text-neutral-800">{contact.name}</div>
            </div>
          </div>

          <div className="mt-14 text-xs tracking-[0.22em] text-neutral-500">© {contact.name}</div>
        </Container>
      </section>
    </main>
  );
}
