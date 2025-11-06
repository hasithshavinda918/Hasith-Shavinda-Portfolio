import { Section } from "@/components/Section";
import {
  IconBriefcase,
  IconShieldCheck,
  IconDatabase,
  IconWorld,
  IconUpload,
  IconMail,
  IconPhoto,
  IconCode,
  IconExternalLink,
  IconRoute,
  IconCar,
  IconChartBar,
} from "@tabler/icons-react";

export function Projects() {
  return (
    <Section id="projects" title="Projects" className="pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="grid gap-6 lg:grid-cols-1">
        {/* D&T Job Agency */}
        <article className="card card-hover rounded-3xl p-8">
          <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white dark:border-white dark:bg-black">
                <IconBriefcase size={20} className="text-black dark:text-white" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-black dark:text-white">D&amp;T Job Agency – Full‑Stack Website</h3>
                <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">Built from scratch • No template • Deployed</p>
              </div>
            </div>
          </header>

          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            Excited to share a project I completed: the full‑stack development and deployment of the
            D&amp;T Job Agency website. This is a fully dynamic web application powered by PHP and MySQL,
            crafted end‑to‑end to match the client’s exact needs.
          </p>

          <ul className="mb-6 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconShieldCheck size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Secure Admin Panel</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Full CRUD to manage job vacancies, latest news, and image gallery.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconWorld size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Dynamic Frontend</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">All public pages pull jobs, news, and gallery data directly from the database.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconUpload size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Custom Forms</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Job application with CV upload and a contact form wired to the backend.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconPhoto size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Clean, Responsive UI</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Styled with Tailwind CSS for a modern, mobile‑first experience.</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-2">
            {["PHP (Prepared Statements)", "MySQL", "Tailwind CSS"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-bold text-black dark:border-neutral-800 dark:bg-black dark:text-white"
              >
                <IconCode size={14} className="text-black dark:text-white" /> {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://www.dandtjobagency.com"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 dark:border-white dark:bg-white dark:text-black"
            >
              <IconExternalLink size={16} className="text-white dark:text-black" /> Visit Website
            </a>
          </div>
        </article>

        {/* Portfolio Website (this site) */}
        <article className="card card-hover rounded-3xl p-8">
          <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white dark:border-white dark:bg-black">
                <IconWorld size={20} className="text-black dark:text-white" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-black dark:text-white">Personal Portfolio – Next.js</h3>
                <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">Black &amp; White minimal UI • Responsive • Static Export</p>
              </div>
            </div>
          </header>

          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            A modern portfolio site built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS 4.
            Features a professional black &amp; white theme, smooth section navigation, and a robust contact experience
            with EmailJS (and a graceful mailto fallback) suitable for shared hosting via static export.
          </p>

          <ul className="mb-6 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconShieldCheck size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Clean, Responsive UI</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Minimal B&amp;W theme, mobile‑first layout, clear typography and spacing.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconMail size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Contact with Fallback</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">EmailJS integration, plus automatic mailto fallback if env keys are missing.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconDatabase size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Static Export for Shared Hosting</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Optimized for Namecheap cPanel by exporting to plain HTML/CSS/JS.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconPhoto size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Modern Sections &amp; Icons</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Hero, About, Skills, Projects, Content, Education, Contact using Tabler Icons.</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-2">
            {["Next.js 16 (App Router)", "React 19", "TypeScript 5", "Tailwind CSS 4", "Tabler Icons"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-bold text-black dark:border-neutral-800 dark:bg-black dark:text-white"
              >
                <IconCode size={14} className="text-black dark:text-white" /> {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://www.hasithkarunarathne.me"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 dark:border-white dark:bg-white dark:text-black"
            >
              <IconExternalLink size={16} className="text-white dark:text-black" /> Visit Website
            </a>
          </div>
        </article>

        {/* Lanka Tour Gate – Final Year Project */}
        <article className="card card-hover rounded-3xl p-8">
          <header className="mb-6 flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-white dark:border-white dark:bg-black">
                <IconWorld size={20} className="text-black dark:text-white" />
              </span>
              <div>
                <h3 className="text-2xl font-extrabold text-black dark:text-white">Lanka Tour Gate – Tourism Platform</h3>
                <p className="text-sm font-semibold text-neutral-600 dark:text-neutral-400">Final Year Project • Secure, Role‑based platform</p>
              </div>
            </div>
          </header>

          <p className="mb-6 text-neutral-700 dark:text-neutral-300">
            A comprehensive web application designed to streamline custom tour planning in Sri Lanka by connecting
            tourists, verified drivers, and administrators in one secure ecosystem. Replaces scattered spreadsheets
            and informal social media bookings with a centralized, trustworthy workflow.
          </p>

          <ul className="mb-6 grid gap-3 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconRoute size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">For Tourists</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Interactive multi‑day itinerary builder with attractions and hotels, plus choosing a verified driver.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconChartBar size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">For Admins</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Analytics dashboard to manage tour requests (approve/reject), assign drivers, manage users and content.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconCar size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">For Drivers</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Personal portal to view assigned tours, manage vehicle information, and track schedules.</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-md border border-black bg-white dark:border-white dark:bg-black">
                <IconShieldCheck size={14} className="text-black dark:text-white" />
              </span>
              <div>
                <div className="font-semibold text-black dark:text-white">Security &amp; Roles</div>
                <p className="text-sm text-neutral-700 dark:text-neutral-300">Bcrypt password hashing, prepared statements (SQLi protection), and full RBAC.</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap items-center gap-2">
            {["PHP", "MySQL", "Bootstrap 5", "JavaScript", "AOS", "RBAC", "Bcrypt"].map((t) => (
              <span
                key={t}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-1.5 text-xs font-bold text-black dark:border-neutral-800 dark:bg-black dark:text-white"
              >
                <IconCode size={14} className="text-black dark:text-white" /> {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href="https://lankatourgate.free.nf/index.php"
              target="_blank"
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-sm font-bold text-white transition-all hover:scale-105 dark:border-white dark:bg-white dark:text-black"
            >
              <IconExternalLink size={16} className="text-white dark:text-black" /> Visit Website
            </a>
          </div>
        </article>
      </div>
    </Section>
  );
}
