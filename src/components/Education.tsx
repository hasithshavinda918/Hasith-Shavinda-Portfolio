import { Section } from "@/components/Section";
import { education } from "@/data/site";
import { IconSchool, IconBuilding } from "@tabler/icons-react";

export function Education() {
  return (
    <Section id="education" title="Educational Journey" className="pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-8 top-0 h-full w-0.5 bg-neutral-200 dark:bg-neutral-800"></div>
        <ol className="space-y-12">
          {education.map((e, idx) => (
            <li
              key={idx}
              className="card-hover fade-in-up relative ml-16"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              <span className="absolute -left-[4.5rem] flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black bg-white text-2xl shadow-xl dark:border-white dark:bg-black">
                <IconSchool size={22} className="text-black dark:text-white" />
              </span>
              <div className="card rounded-2xl p-8 shadow-lg">
                <div className="mb-2 inline-block rounded-full border border-black bg-white px-4 py-1 text-xs font-semibold text-black dark:border-white dark:bg-black dark:text-white">
                  {e.period}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-black dark:text-white">{e.title}</h3>
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  <IconBuilding size={16} className="text-black dark:text-white" />
                  {e.place}
                </div>
                <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">
                  {e.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
