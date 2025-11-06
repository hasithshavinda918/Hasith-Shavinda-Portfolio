import { Section } from "@/components/Section";
import { videos } from "@/data/site";
import { IconBrandYoutube, IconVideo } from "@tabler/icons-react";

export function ContentSection() {
  return (
    <Section id="content" title="Content Creation" className="pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white text-2xl dark:border-white dark:bg-black">
              <IconBrandYoutube size={22} className="text-black dark:text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">Featured Video</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Showcasing my creative work
              </p>
            </div>
          </div>
          <div className="card card-hover overflow-hidden rounded-2xl shadow-xl">
            <iframe
              className="aspect-video w-full"
              src={videos.featured.url}
              title={videos.featured.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="text-sm italic text-neutral-600 dark:text-neutral-400">
            {videos.featured.description}
          </p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white text-2xl dark:border-white dark:bg-black">
              <IconVideo size={22} className="text-black dark:text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-black dark:text-white">YouTube Shorts</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Quick creative content</p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {videos.shorts.map((v, idx) => (
              <div
                key={v.url}
                className="card card-hover overflow-hidden rounded-2xl shadow-lg"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <iframe
                  className="aspect-video w-full"
                  src={v.url}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  loading="lazy"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
