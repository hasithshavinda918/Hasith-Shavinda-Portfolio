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
          ? "border-b border-white/10 glass-nav shadow-lg"
          : "bg-transparent"
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
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/20 lg:h-12 lg:w-12 shadow-[0_0_15px_rgba(188,19,254,0.3)]">
              <Image src="/assets/logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <span className="hidden text-xl font-bold tracking-tight text-white sm:inline-block">
              Hasith Karunarathne
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute inset-0 scale-0 rounded-lg bg-white/10 transition-transform group-hover:scale-100"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              <IconSend size={16} />
              <span>Let&apos;s Talk</span>
              <IconArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 text-white transition-all hover:bg-white/10 lg:hidden"
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
          <nav className="border-t border-white/10 py-4 glass-nav rounded-b-2xl px-2">
            <div className="grid gap-1">
              {NAV.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="group flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-neutral-300 transition-all hover:bg-white/10 hover:text-white"
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
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-white py-3 text-sm font-bold text-black transition-all hover:scale-105"
              >
                <IconSend size={16} />
                <span>Let&apos;s Talk</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
