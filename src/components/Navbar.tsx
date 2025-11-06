"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  IconMenu2,
  IconX,
  IconSend,
  IconArrowRight,
  IconHome,
  IconUser,
  IconCode,
  IconVideo,
  IconSchool,
  IconMail,
  IconChevronRight,
  IconBriefcase,
} from "@tabler/icons-react";

const NAV = [
  { href: "#home", label: "Home", icon: IconHome },
  { href: "#about", label: "About", icon: IconUser },
  { href: "#skills", label: "Skills", icon: IconCode },
  { href: "#projects", label: "Projects", icon: IconBriefcase },
  { href: "#content", label: "Content", icon: IconVideo },
  { href: "#education", label: "Education", icon: IconSchool },
  { href: "#contact", label: "Contact", icon: IconMail },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b-2 border-black bg-white shadow-lg dark:border-white dark:bg-black"
          : "border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-black/80"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-3 transition-transform hover:scale-105"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border-2 border-black dark:border-white lg:h-12 lg:w-12">
              <Image
                src="/assets/logo.png"
                alt="Logo"
                width={48}
                height={48}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="hidden text-xl font-bold tracking-tight text-black dark:text-white sm:inline-block">
              Hasith S Karunarathne
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-semibold text-neutral-700 transition-colors hover:text-black dark:text-neutral-300 dark:hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 scale-0 rounded-lg bg-neutral-100 transition-transform group-hover:scale-100 dark:bg-neutral-900"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 hover:shadow-lg dark:bg-white dark:text-black"
            >
              <IconSend size={16} />
              <span>Let&apos;s Talk</span>
              <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-black text-black transition-all hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IconX size={20} className="transition-all duration-300 rotate-90" />
            ) : (
              <IconMenu2 size={20} className="transition-all duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out lg:hidden ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-neutral-200 py-4 dark:border-neutral-800">
            <div className="grid gap-1">
              {NAV.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-neutral-700 transition-all hover:bg-black hover:text-white dark:text-neutral-300 dark:hover:bg-white dark:hover:text-black"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <item.icon size={18} />
                  <span>{item.label}</span>
                  <IconChevronRight size={14} className="ml-auto opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </a>
              ))}
            </div>
            <div className="mt-4 px-4">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-black py-3 text-sm font-bold text-white transition-all hover:scale-105 dark:bg-white dark:text-black"
              >
                <IconSend size={16} />
                <span>Get In Touch</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
