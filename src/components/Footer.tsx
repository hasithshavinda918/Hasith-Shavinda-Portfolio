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
    <footer className="mt-24 border-t border-neutral-200 bg-white dark:border-neutral-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top CTA */}
        <div className="mb-10 rounded-3xl border-2 border-black bg-white p-6 shadow-sm dark:border-white dark:bg-black">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h4 className="text-xl font-extrabold text-black dark:text-white">Have a project in mind?</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">Let’s build something great together.</p>
            </div>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 dark:border-white dark:bg-white dark:text-black"
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
              <div className="relative h-12 w-12 overflow-hidden rounded-xl border-2 border-black dark:border-white">
                <Image src="/assets/logo.png" alt="Logo" width={48} height={48} className="h-full w-full object-cover" />
              </div>
              <div className="text-lg font-extrabold text-black dark:text-white">{personal.name}</div>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Building modern, minimal, and performant web experiences.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg border border-black bg-white px-3 py-1 text-xs font-semibold text-black dark:border-white dark:bg-black dark:text-white">
                <IconMapPin size={14} className="text-black dark:text-white" /> {contact.location}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-1 text-xs font-semibold text-neutral-700 dark:border-neutral-700 dark:text-neutral-300">
                {personal.availability}
              </span>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h5 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-black dark:text-white">Explore</h5>
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
                    className="group inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-black dark:text-neutral-400 dark:hover:text-white"
                  >
                    <span className="h-1 w-1 rounded-full bg-neutral-400 transition-colors group-hover:bg-black dark:group-hover:bg-white"></span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-black dark:text-white">Contact</h5>
            <ul className="grid gap-3 text-sm">
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-white dark:border-white dark:bg-black">
                  <IconMail size={16} className="text-black dark:text-white" />
                </span>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-medium text-neutral-700 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-white dark:border-white dark:bg-black">
                  <IconBrandWhatsapp size={16} className="text-black dark:text-white" />
                </span>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                  target="_blank"
                  className="font-medium text-neutral-700 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border-2 border-black bg-white dark:border-white dark:bg-black">
                  <IconMapPin size={16} className="text-black dark:text-white" />
                </span>
                <span className="font-medium text-neutral-700 dark:text-neutral-300">{contact.location}</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h5 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-black dark:text-white">Follow</h5>
            <div className="flex flex-wrap gap-3">
              <a
                href={contact.github}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-white text-black transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white dark:bg-black dark:text-white"
              >
                <IconBrandGithub size={18} className="text-black dark:text-white" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-white text-black transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white dark:bg-black dark:text-white"
              >
                <IconBrandLinkedin size={18} className="text-black dark:text-white" />
              </a>
              <a
                href={contact.instagram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black bg-white text-black transition-all hover:-translate-y-0.5 hover:shadow-md dark:border-white dark:bg-black dark:text-white"
              >
                <IconBrandInstagram size={18} className="text-black dark:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-6 text-sm text-neutral-600 dark:border-neutral-800 dark:text-neutral-400 sm:flex-row">
          <div>
            © {new Date().getFullYear()} <span className="font-semibold text-black dark:text-white">{personal.name}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="group inline-flex items-center gap-2 rounded-lg border-2 border-black bg-white px-3 py-1.5 font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
            >
              <IconArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
