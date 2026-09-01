import { Section } from "@/components/Section";
import { projects } from "@/data/site";
import {
  IconBriefcase,
  IconCode,
  IconExternalLink,
  IconBrandGithub,
} from "@tabler/icons-react";

export function Projects() {
  return (
    <Section id="projects" title="Projects" className="pt-8 sm:pt-10 pb-10 sm:pb-14 relative z-10">
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, idx) => (
          <article 
            key={idx} 
            className="card card-hover rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-md glowing-border flex flex-col h-full"
          >
            <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                  <IconBriefcase size={24} className="text-cyan-400" />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
                </div>
              </div>
            </header>

            <p className="mb-8 text-neutral-300 flex-grow text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap items-center gap-2 mb-8">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-bold text-neutral-300 hover:text-white hover:border-cyan-400 transition-colors"
                >
                  <IconCode size={14} className="text-purple-400" /> {t}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-4">
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-transparent bg-white px-5 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)]"
              >
                <IconExternalLink size={16} /> Visit Website
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/20 bg-transparent px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/40"
              >
                <IconBrandGithub size={16} /> View GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
