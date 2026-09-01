import Image from "next/image";
import { personal, contact } from "@/data/site";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconSend,
  IconArrowRight,
  IconArrowUp,
  IconMail,
  IconBrandWhatsapp,
  IconMapPin,
} from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/80 backdrop-blur-md relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top CTA */}
        <div className="mb-10 rounded-3xl border border-white/20 bg-black/40 p-6 shadow-[0_0_20px_rgba(0,243,255,0.1)] glowing-border">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-xl font-extrabold text-white">Have a project in mind?</h4>
              <p className="text-sm text-neutral-400">Let’s build something great together.</p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
            >
              <IconSend size={16} /> Let&apos;s Talk
              <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/20 lg:h-12 lg:w-12 shadow-[0_0_15px_rgba(188,19,254,0.3)]">
                <Image src="/assets/logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <div className="text-lg font-extrabold text-white">Hasith Karunarathne</div>
            </div>
            <p className="text-sm text-neutral-400">
              Building modern, minimal, and performant web experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white">
                <IconMapPin size={14} className="text-cyan-400" /> {contact.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-1 text-xs font-semibold text-neutral-300">
                {personal.availability}
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h5 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white">Explore</h5>
            <ul className="grid gap-2 text-sm">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#projects", label: "Projects" },
                { href: "#content", label: "Content" },
                { href: "#education", label: "Education" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="group inline-flex items-center gap-2 text-neutral-400 transition-colors hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-neutral-600 transition-colors group-hover:bg-cyan-400"></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white">Contact</h5>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5">
                  <IconMail size={16} className="text-cyan-400" />
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5">
                  <IconBrandWhatsapp size={16} className="text-green-400" />
                </span>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  className="font-medium text-neutral-300 transition-colors hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/20 bg-white/5">
                  <IconMapPin size={16} className="text-red-400" />
                </span>
                <span className="font-medium text-neutral-300">{contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-white">Follow</h5>
            <div className="flex flex-wrap gap-3">
              <a
                href={contact.github}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] hover:border-white"
              >
                <IconBrandGithub size={18} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,119,181,0.4)] hover:border-blue-500"
              >
                <IconBrandLinkedin size={18} className="text-blue-500" />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-white/5 text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(225,48,108,0.4)] hover:border-pink-500"
              >
                <IconBrandInstagram size={18} className="text-pink-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-neutral-400 sm:flex-row">
          <div>
            Copyright © 2026 <span className="font-semibold text-white">Hasith Karunarathne</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 font-bold text-white transition-colors hover:bg-white/10 hover:border-cyan-400"
            >
              <IconArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5 text-cyan-400" />
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
