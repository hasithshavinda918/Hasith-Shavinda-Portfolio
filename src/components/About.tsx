import { Section } from "@/components/Section";
import { stats } from "@/data/site";
import { IconSchool, IconCode, IconMapPin, IconCheck } from "@tabler/icons-react";

export function About() {
  return (
    <Section id="about" title="About Me" className="pt-6 sm:pt-8 pb-10 sm:pb-14 relative z-10">
      <div className="grid items-start gap-12 lg:grid-cols-2">
        {/* Left: Intro + Highlights */}
        <div className="space-y-8">
          <p className="max-w-2xl text-lg leading-relaxed text-neutral-300">
            I bridge the gap between creative design and robust backend architecture. As the founder of Nexalyth Solutions based in Walasmulla, Sri Lanka, I lead projects from ideation to deployment. My expertise lies in seamless full-stack integrations and leveraging AI to optimize modern workflows.
          </p>

          {/* Quick facts */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="card card-hover group flex items-center gap-3 rounded-2xl p-4 glowing-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-md">
                <IconSchool size={22} className="text-cyan-400" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Education
                </div>
                <div className="text-sm font-bold text-white">BSc Computer Science</div>
              </div>
            </div>
            <div className="card card-hover group flex items-center gap-3 rounded-2xl p-4 glowing-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-md">
                <IconCode size={22} className="text-purple-400" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">Stack</div>
                <div className="text-sm font-bold text-white">Next.js & Laravel</div>
              </div>
            </div>
            <div className="card card-hover group flex items-center gap-3 rounded-2xl p-4 glowing-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-md">
                <IconMapPin size={22} className="text-red-400" />
              </div>
              <div>
                <div className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                  Location
                </div>
                <div className="text-sm font-bold text-white">
                  Sri Lanka
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
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-white/20 bg-white/5 shadow-sm">
                  <IconCheck size={14} className="text-cyan-400" />
                </span>
                <span className="text-sm font-medium text-neutral-300">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Stats */}
        <div className="space-y-6">
          <h3 className="text-2xl font-extrabold text-white">By the numbers</h3>
          <dl className="grid grid-cols-2 gap-4">
            {stats.map((s, idx) => (
              <div
                key={s.label}
                className="group rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 text-center transition-all hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(0,243,255,0.2)] glowing-border"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <dt className="text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_10px_rgba(188,19,254,0.4)]">
                  {s.value}
                </dt>
                <dd className="mt-2 text-xs font-semibold uppercase tracking-wide text-neutral-400 group-hover:text-cyan-300 transition-colors">
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
