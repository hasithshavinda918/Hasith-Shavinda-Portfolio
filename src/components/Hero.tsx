import { personal, cta } from "@/data/site";
import { Typewriter } from "@/components/Typewriter";
import Image from "next/image";
import {
  IconSend,
  IconArrowRight,
  IconDownload,
  IconChevronDown,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandJavascript,
  IconBrandPython,
} from "@tabler/icons-react";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Left Content */}
        <div className="fade-in-up space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-black bg-white px-4 py-2 text-sm font-semibold text-black dark:border-white dark:bg-black dark:text-white">
              <span className="text-base">👋</span>
              <span>Hello, I&apos;m</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-black dark:text-white">{personal.name}</span>
            </h1>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-black dark:bg-white"></div>
              <div className="text-xl font-bold text-black sm:text-2xl dark:text-white">
                <Typewriter
                  words={[
                    "Software Engineering Undergraduate",
                    "MERN Stack Specialist",
                    "Full-Stack Developer",
                    "Content Creator",
                  ]}
                />
              </div>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg dark:text-neutral-400">
            {personal.description}
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={`#${cta.getInTouchId}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black"
            >
              <IconSend size={18} />
              Get In Touch
              <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            {/* <a
              href={`#${cta.learnMoreId}`}
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-black bg-white px-6 py-3 text-sm font-bold text-black transition-all hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <i className="fa-solid fa-user"></i>
              About Me
            </a> */}
            <a
              href={cta.cvPath}
              download
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-neutral-300 bg-white px-6 py-3 text-sm font-bold text-neutral-700 transition-all hover:border-black hover:text-black dark:border-neutral-700 dark:bg-black dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
            >
              <IconDownload size={18} className="transition-transform group-hover:scale-110" />
              Download CV
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="float relative order-first lg:order-last">
          <div className="relative mx-auto w-64 sm:w-80 lg:w-96">
            {/* Main photo container */}
            <div className="card-hover relative aspect-square overflow-hidden rounded-3xl border-4 border-black bg-white shadow-2xl dark:border-white dark:bg-black">
              <Image
                src="/assets/herophoto.png"
                alt={personal.name}
                width={400}
                height={400}
                className="h-full w-full object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent dark:from-white/10"></div>
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-4 -right-4 z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-black bg-white shadow-2xl dark:border-white dark:bg-black sm:h-20 sm:w-20">
              <IconBrandReact size={36} className="animate-spin text-black dark:text-white" style={{ animationDuration: '8s' }} />
            </div>
            <div className="absolute -bottom-4 -left-4 z-10 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-black bg-white shadow-2xl dark:border-white dark:bg-black sm:h-20 sm:w-20">
              <IconBrandNodejs size={36} className="animate-pulse text-black dark:text-white" />
            </div>
            <div className="absolute -top-6 left-1/4 z-10 flex h-14 w-14 items-center justify-center rounded-xl border-4 border-black bg-white shadow-2xl dark:border-white dark:bg-black sm:h-16 sm:w-16" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <IconBrandJavascript size={30} className="text-black dark:text-white" />
            </div>
            <div className="absolute -bottom-6 right-1/4 z-10 flex h-14 w-14 items-center justify-center rounded-xl border-4 border-black bg-white shadow-2xl dark:border-white dark:bg-black sm:h-16 sm:w-16" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
              <IconBrandPython size={30} className="text-black dark:text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-400">
          <span className="text-xs font-medium">Scroll Down</span>
          <IconChevronDown size={14} />
        </a>
      </div>
    </div>
  );
}
