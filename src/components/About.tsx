import { Section } from "@/components/Section";
import { personal, stats } from "@/data/site";
import { IconSchool, IconCode, IconMapPin, IconCheck } from "@tabler/icons-react";

export function About() {
  return (
    <Section id="about" title="About Me" className="pt-6 sm:pt-8 pb-10 sm:pb-14">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* Left: Intro + Highlights */}
        <div className="space-y-8">
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
            {personal.description}
          </p>

          {/* Quick facts */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="card card-hover group flex items-center gap-3 rounded-2xl p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-md dark:border-white dark:bg-black">
                <IconSchool size={22} className="text-black dark:text-white" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Education
                </div>
                <div className="text-sm font-bold text-black dark:text-white">Cardiff Met</div>
              </div>
            </div>
            <div className="card card-hover group flex items-center gap-3 rounded-2xl p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-md dark:border-white dark:bg-black">
                <IconCode size={22} className="text-black dark:text-white" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">Stack</div>
                <div className="text-sm font-bold text-black dark:text-white">MERN</div>
              </div>
            </div>
            <div className="card card-hover group flex items-center gap-3 rounded-2xl p-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-md dark:border-white dark:bg-black">
                <IconMapPin size={22} className="text-black dark:text-white" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Location
                </div>
                <div className="text-sm font-bold text-black dark:text-white">
                  {personal.location.split(",")[0]}
                </div>
              </div>
            </div>
          </div>

          {/* Values / Focus list */}
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Clean, maintainable code",
              "Performance-first mindset",
              "Responsive, accessible UI",
              "End-to-end ownership",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white shadow-sm dark:border-white dark:bg-black">
                  <IconCheck size={14} className="text-black dark:text-white" />
                </span>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Stats */}
        <div className="space-y-6">
          <h3 className="text-2xl font-extrabold text-black dark:text-white">By the numbers</h3>
          <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className="group rounded-2xl border-2 border-neutral-200 bg-white p-6 text-center transition-all hover:border-black dark:border-neutral-800 dark:bg-black dark:hover:border-white"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <dt className="text-4xl font-extrabold tracking-tight text-black dark:text-white">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-600 dark:text-neutral-400">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Section>
  );
}
