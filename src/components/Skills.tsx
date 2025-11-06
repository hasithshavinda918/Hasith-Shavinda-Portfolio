import { Section } from "@/components/Section";
import { skills } from "@/data/site";
import type { ReactElement } from "react";
import {
  IconBrandReact,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandNodejs,
  IconCoffee,
  IconBrandPhp,
  IconApi,
  IconBrandPython,
  IconBrandCpp,
  IconBrandMysql,
  IconBrandFirebase,
  IconBrandGithub,
  IconBrandFigma,
  IconCode,
} from "@tabler/icons-react";

function SkillIcon({ name }: { name: string }): ReactElement {
  const map: Record<string, ReactElement> = {
    "React.js": <IconBrandReact size={18} />,
    JavaScript: <IconBrandJavascript size={18} />,
    HTML5: <IconBrandHtml5 size={18} />,
    CSS3: <IconBrandCss3 size={18} />,
    "Tailwind CSS": <IconBrandTailwind size={18} />,
    "Node.js": <IconBrandNodejs size={18} />,
    Java: <IconCoffee size={18} />,
    PHP: <IconBrandPhp size={18} />,
    "REST APIs": <IconApi size={18} />,
    Python: <IconBrandPython size={18} />,
    "C++": <IconBrandCpp size={18} />,
    MySQL: <IconBrandMysql size={18} />,
    Firebase: <IconBrandFirebase size={18} />,
    "Git/GitHub": <IconBrandGithub size={18} />,
    Figma: <IconBrandFigma size={18} />,
  };
  return map[name] ?? <IconCode size={18} />;
}

function SkillGroup({ title, items }: { title: string; items: { name: string }[] }) {
  return (
    <div className="card card-hover rounded-3xl p-8">
      <h4 className="mb-6 text-xl font-bold text-black dark:text-white">{title}</h4>
      <div className="flex flex-wrap gap-3">
        {items.map((s, idx) => (
          <span
            key={s.name}
            className="group inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-4 py-2.5 text-sm font-medium text-black transition-all hover:border-black hover:shadow-sm dark:border-neutral-800 dark:bg-black dark:text-white dark:hover:border-white"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <span className="transition-transform group-hover:scale-125">
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
    <Section id="skills" title="Skills & Technologies" className="pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title="Frontend Development" items={skills.frontend} />
        <SkillGroup title="Backend Development" items={skills.backend} />
        <SkillGroup title="Programming Languages" items={skills.languages} />
        <SkillGroup title="Databases & Tools" items={skills.tools} />
      </div>
    </Section>
  );
}
