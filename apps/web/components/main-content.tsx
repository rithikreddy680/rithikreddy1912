"use client";

import { motion } from "framer-motion";

import { portfolioData } from "@/lib/data";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from "@/components/ui/card";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const sectionMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.5, ease: "easeOut" }
};

function ExperienceSection() {
  return (
    <section id="experience" className="mx-auto mb-20 max-w-4xl space-y-6">
      <motion.div {...sectionMotion}>
        <header className="space-y-2">
          <p className="text-xs tracking-[0.3em] text-neutral-400">EXPERIENCE</p>
          <h2 className="font-serif text-3xl text-neutral-50 sm:text-4xl">
            Where I&apos;ve been building.
          </h2>
        </header>

        <div className="mt-6 space-y-4">
          {portfolioData.experience.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <button className="w-full text-left">
                  <Card className="border-neutral-800 bg-neutral-900/60 hover:border-neutral-600 hover:bg-neutral-900">
                    <CardHeader>
                      <CardTitle>{item.role}</CardTitle>
                      <CardDescription>{item.company}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs tracking-[0.2em] text-neutral-500">
                        {item.date}
                      </p>
                    </CardContent>
                  </Card>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>
                    {item.role} · {item.company}
                  </DialogTitle>
                  <DialogDescription>{item.date}</DialogDescription>
                </DialogHeader>
                <p className="mb-4 text-sm italic text-neutral-300">
                  {item.summary}
                </p>
                <ul className="space-y-2 text-sm text-neutral-100">
                  {item.details.map((detail, index) => (
                    <li key={index} className="flex gap-2">
                      <span className="mt-[7px] h-[3px] w-[3px] rounded-full bg-neutral-500" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function EducationSection() {
  return (
    <section id="education" className="mx-auto mb-20 max-w-5xl space-y-6">
      <motion.div {...sectionMotion}>
        <header className="space-y-2">
          <p className="text-xs tracking-[0.3em] text-neutral-400">EDUCATION</p>
          <h2 className="font-serif text-3xl text-neutral-50 sm:text-4xl">
            How I&apos;m grounding the theory.
          </h2>
        </header>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {portfolioData.education.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <button className="h-full text-left">
                  <Card className="flex h-full flex-col justify-between border-neutral-800 bg-neutral-900/60 hover:border-neutral-600 hover:bg-neutral-900">
                    <CardHeader>
                      <CardTitle>{item.degree}</CardTitle>
                      <CardDescription>{item.institution}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs tracking-[0.2em] text-neutral-500">
                        {item.date}
                      </p>
                    </CardContent>
                  </Card>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{item.degree}</DialogTitle>
                  <DialogDescription>{item.institution}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-xs font-semibold uppercase tracking-[0.2em]">
                    {item.institution
                      .split(" ")
                      .map((w) => w[0])
                      .join("")
                      .slice(0, 3)}
                  </div>
                  <p className="text-sm text-neutral-100">{item.details}</p>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function SkillsSection() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="mx-auto mb-20 max-w-5xl space-y-6">
      <motion.div {...sectionMotion}>
        <header className="space-y-2">
          <p className="text-xs tracking-[0.3em] text-neutral-400">SKILLS</p>
          <h2 className="font-serif text-3xl text-neutral-50 sm:text-4xl">
            The toolkit I reach for.
          </h2>
        </header>

        <div className="mt-6 grid gap-8 md:grid-cols-2">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-neutral-500">
                {group.replaceAll("_", " ")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Badge key={item} variant="outline">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ContactSection() {
  const { contact } = portfolioData.hero;

  return (
    <section id="contact" className="mx-auto mb-24 max-w-5xl">
      <motion.div {...sectionMotion}>
        <header className="mb-6 space-y-2">
          <p className="text-xs tracking-[0.3em] text-neutral-400">CONTACT</p>
          <h2 className="font-serif text-3xl text-neutral-50 sm:text-4xl">
            Let&apos;s build something together.
          </h2>
        </header>

        <div className="rounded-xl border border-neutral-800 bg-[#020617] text-neutral-100 shadow-lg">
          <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-neutral-500">contact.tsx</span>
          </div>

          <div className="grid gap-8 px-6 py-6 md:grid-cols-2 md:py-8">
            <div className="space-y-4 text-sm">
              <p className="font-mono text-xs text-emerald-300">
                // Reach Rithik via:
              </p>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                  EMAIL
                </p>
                <p className="font-mono text-sm text-neutral-50">
                  {contact.email}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                  PHONE
                </p>
                <p className="font-mono text-sm text-neutral-50">
                  {contact.phone}
                </p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                  LOCATION
                </p>
                <p className="font-mono text-sm text-neutral-50">
                  {contact.location}
                </p>
              </div>
            </div>

            <form className="space-y-4 text-sm">
              <p className="font-mono text-xs text-emerald-300">
                // Send a message
              </p>
              <div className="space-y-1">
                <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                  const name =
                </label>
                <Input
                  placeholder='"Your Name"'
                  className="font-mono text-xs"
                />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                  const email =
                </label>
                <Input
                  type="email"
                  placeholder='"you@example.com"'
                  className="font-mono text-xs"
                />
              </div>
              <div className="space-y-1">
                <label className="font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-500">
                  const message =
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-3 py-2 font-mono text-xs text-neutral-50 shadow-sm outline-none ring-offset-slate-950 placeholder:text-neutral-500 focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
                  placeholder='"Tell me about what you want to build..."'
                />
              </div>
              <Button
                type="button"
                className="mt-3 w-full justify-center bg-emerald-500 text-black hover:bg-emerald-400"
              >
                Execute Send
              </Button>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export function MainContent() {
  return (
    <div className="bg-slate-950 px-6 pb-24 pt-10 text-neutral-50 sm:px-10 lg:px-24">
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

