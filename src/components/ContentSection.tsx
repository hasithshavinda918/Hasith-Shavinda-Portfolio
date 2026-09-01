import { Section } from "@/components/Section";
import { videos } from "@/data/site";
import { IconBrandYoutube, IconBrandTiktok, IconBrandInstagram, IconPlayerPlayFilled } from "@tabler/icons-react";

export function ContentSection() {
  return (
    <Section id="content" title="Content Creation" className="pt-8 sm:pt-10 pb-10 sm:pb-14 relative z-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Featured Video */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-[0_0_15px_rgba(255,0,0,0.3)]">
              <IconBrandYoutube size={24} className="text-red-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Featured Content</h3>
              <p className="text-sm text-neutral-400">
                {videos.featured.description}
              </p>
            </div>
          </div>
          <div className="card card-hover overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(188,19,254,0.1)] glowing-border">
            <iframe
              className="aspect-video w-full"
              src={videos.featured.url}
              title={videos.featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Shorts Grid */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-[0_0_15px_rgba(0,243,255,0.3)]">
              <IconBrandTiktok size={24} className="text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Short-Form Content</h3>
              <p className="text-sm text-neutral-400">AI Agents, Tools, and Engineering</p>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {videos.shorts.map((v, idx) => (
              <div
                key={v.url}
                className="card card-hover overflow-hidden rounded-3xl border border-white/10 shadow-[0_0_20px_rgba(0,243,255,0.1)] glowing-border relative group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Platform Icons */}
                <div className="absolute top-2 left-2 z-10 flex gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/70 backdrop-blur-sm text-white">
                    {idx === 0 ? <IconBrandTiktok size={14} className="text-cyan-400"/> : idx === 1 ? <IconBrandInstagram size={14} className="text-pink-500"/> : <IconBrandYoutube size={14} className="text-red-500"/>}
                  </span>
                </div>
                
                {/* The Video */}
                <iframe
                  className="aspect-video sm:aspect-[9/16] w-full pointer-events-none"
                  src={v.url}
                  title={v.title}
                  loading="lazy"
                  allowFullScreen
                />

                {/* Simulated Play Overlay */}
                <a href={v.url} target="_blank" rel="noreferrer" className="absolute inset-0 z-20 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-400/90 text-black shadow-[0_0_20px_rgba(0,243,255,0.8)] scale-75 group-hover:scale-100 transition-transform">
                    <IconPlayerPlayFilled size={20} />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
