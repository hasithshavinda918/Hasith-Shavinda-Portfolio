import { Section } from "@/components/Section";
import { education } from "@/data/site";
import { IconSchool, IconBuilding } from "@tabler/icons-react";

export function Education() {
  return (
    <Section id="education" title="Educational Journey" className="pt-8 sm:pt-10 pb-10 sm:pb-14 relative z-10">
      <div className="relative mx-auto max-w-4xl">
        {/* Glowing Timeline Line */}
        <div className="absolute left-8 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-purple-500 to-transparent shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>
        <ol className="space-y-12">
          {education.map((e, idx) => (
            <li
              key={idx}
              className="card-hover fade-in-up relative ml-16 group"
              style={{ animationDelay: `${idx * 0.2}s` }}
            >
              {/* Glowing Icon Container */}
              <span className="absolute -left-[4.5rem] flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(188,19,254,0.4)] group-hover:scale-110 transition-transform z-10">
                <IconSchool size={22} className="text-white" />
              </span>
              <div className="card rounded-3xl p-8 border border-white/10 bg-black/40 backdrop-blur-md glowing-border">
                <div className="mb-4 inline-block rounded-full border border-cyan-400/50 bg-cyan-400/10 px-4 py-1 text-xs font-semibold text-cyan-300 shadow-[0_0_10px_rgba(0,243,255,0.2)]">
                  {e.period}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">{e.title}</h3>
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-neutral-400">
                  <IconBuilding size={16} className="text-purple-400" />
                  {e.place}
                </div>
                <p className="leading-relaxed text-neutral-300">
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
