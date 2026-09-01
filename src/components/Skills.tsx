import { Section } from "@/components/Section";
import { skills } from "@/data/site";
import type { ReactElement } from "react";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandLaravel,
  IconApi,
  IconBrain,
  IconRobot,
  IconBrandMysql,
  IconBrandFirebase,
  IconBrandGithub,
  IconBrandFigma,
  IconCode,
} from "@tabler/icons-react";

function SkillIcon({ name }: { name: string }): ReactElement {
  const map: Record<string, ReactElement> = {
    "Next.js": <IconBrandNextjs size={18} className="text-white" />,
    "React.js": <IconBrandReact size={18} className="text-cyan-400" />,
    "Tailwind CSS": <IconBrandTailwind size={18} className="text-cyan-300" />,
    JavaScript: <IconBrandJavascript size={18} className="text-yellow-400" />,
    PHP: <IconBrandPhp size={18} className="text-indigo-400" />,
    Laravel: <IconBrandLaravel size={18} className="text-red-500" />,
    "Node.js": <IconBrandNodejs size={18} className="text-green-500" />,
    "REST APIs": <IconApi size={18} className="text-gray-300" />,
    "Prompt Engineering": <IconBrain size={18} className="text-purple-400" />,
    "AI Tool Integration": <IconRobot size={18} className="text-cyan-400" />,
    "Git/GitHub": <IconBrandGithub size={18} className="text-white" />,
    Figma: <IconBrandFigma size={18} className="text-pink-400" />,
    MySQL: <IconBrandMysql size={18} className="text-blue-400" />,
    Firebase: <IconBrandFirebase size={18} className="text-yellow-500" />,
  };
  return map[name] ?? <IconCode size={18} className="text-gray-400" />;
}

function SkillGroup({ title, items, className = "" }: { title: string; items: { name: string }[], className?: string }) {
  return (
    <div className={`card card-hover rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-md glowing-border ${className}`}>
      <h4 className="mb-6 text-xl font-bold text-white">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {items.map((s, idx) => (
          <span
            key={s.name}
            className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-neutral-300 transition-all hover:border-cyan-400 hover:text-white hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <span className="transition-transform group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_currentColor]">
              <SkillIcon name={s.name} />
            </span>
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies" className="pt-8 sm:pt-10 pb-10 sm:pb-14 relative z-10">
      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title="Frontend Development" items={skills.frontend} />
        <SkillGroup title="Backend Development" items={skills.backend} />
        <SkillGroup title="AI & Tools" items={skills.ai_tools} />
        <SkillGroup title="Databases" items={skills.databases} />
      </div>
    </Section>
  );
}
