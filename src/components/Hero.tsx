import { personal, cta } from "@/data/site";
import { Typewriter } from "@/components/Typewriter";
import Image from "next/image";
import {
  IconSend,
  IconArrowRight,
  IconDownload,
  IconChevronDown,
} from "@tabler/icons-react";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        {/* Left Content */}
        <div className="fade-in-up space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-2 text-sm font-medium text-white shadow-[0_0_15px_rgba(0,243,255,0.2)]">
              <span className="text-base">👋</span>
              <span>Hello, I&apos;m</span>
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
              <span className="text-white drop-shadow-[0_0_20px_rgba(188,19,254,0.3)]">{personal.name}</span>
            </h1>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-white rounded"></div>
              <div className="text-xl font-bold text-white sm:text-2xl">
                <Typewriter
                  words={[
                    personal.profession,
                    "Next.js & Laravel Expert",
                    "Content Creator",
                    "Prompt Engineer",
                  ]}
                />
              </div>
            </div>
          </div>

          <p className="max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg">
            {personal.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={`#${cta.getInTouchId}`}
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-black transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <IconSend size={18} />
              Let&apos;s Talk
              <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={cta.cvPath}
              download
              className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 backdrop-blur-md px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-white/10 hover:border-white/40"
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
            <div className="card-hover relative aspect-square overflow-hidden rounded-3xl border border-white/20 bg-black/50 backdrop-blur-sm shadow-[0_0_40px_rgba(188,19,254,0.2)] glowing-border">
              <Image
                src="/assets/herophoto.png"
                alt={personal.name}
                width={400}
                height={400}
                className="h-full w-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            </div>

            {/* Floating tech badges */}
            <div className="absolute -top-4 -right-4 z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.3)] sm:h-20 sm:w-20">
              <span className="font-bold text-[10px] text-white">Next.js</span>
            </div>
            <div className="absolute -bottom-4 -left-4 z-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(255,45,32,0.3)] sm:h-20 sm:w-20 text-red-500">
              <span className="font-bold text-[10px]">Laravel</span>
            </div>
            <div className="absolute -top-6 left-1/4 z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(119,123,179,0.3)] sm:h-16 sm:w-16 text-indigo-400" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <span className="font-bold text-[12px]">PHP</span>
            </div>
            <div className="absolute -bottom-6 right-1/4 z-10 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-black/80 backdrop-blur-md shadow-[0_0_20px_rgba(188,19,254,0.3)] sm:h-16 sm:w-16 text-purple-400" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
              <span className="font-bold text-[12px]">AI</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-neutral-400 hover:text-white transition-colors">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll Down</span>
          <IconChevronDown size={14} />
        </a>
      </div>
    </div>
  );
}
