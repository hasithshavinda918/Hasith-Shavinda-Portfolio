"use client";
import { Section } from "@/components/Section";
import { contact } from "@/data/site";
import { useRef, useState } from "react";
import {
  IconMail,
  IconBrandWhatsapp,
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
  IconArrowRight,
  IconCircleCheck,
  IconLoader2,
  IconCopy,
  IconExternalLink,
} from "@tabler/icons-react";
import emailjs from "@emailjs/browser";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<null | { type: "ok" | "err"; msg: string }>(null);
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setStatus({ type: "ok", msg: "Copied to clipboard" });
      setTimeout(() => setStatus(null), 1500);
    } catch {
      setStatus({ type: "err", msg: "Copy failed" });
      setTimeout(() => setStatus(null), 1500);
    }
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    if (!serviceId || !templateId || !publicKey) {
      // Fallback: open default mail client with prefilled content
      const fd = new FormData(formRef.current);
      const name = String(fd.get("user_name") || "");
      const from = String(fd.get("user_email") || "");
      const subject = String(fd.get("subject") || "New message from portfolio");
      const message = String(fd.get("message") || "");
      const to = "hasithshavinda918@gmail.com";

      const body = `Name: ${name}%0D%0AEmail: ${from}%0D%0A%0D%0A${encodeURIComponent(message)}`;
      const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = mailto;
      setStatus({ type: "ok", msg: "Opening your email app to send the message." });
      return;
    }

    setSending(true);
    setStatus(null);
    try {
      const result = await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      if (result.status === 200) {
        setStatus({ type: "ok", msg: "Message sent successfully!" });
        formRef.current.reset();
      } else {
        throw new Error("Failed to send");
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message";
      setStatus({ type: "err", msg: message });
    } finally {
      setSending(false);
    }
  };

  return (
    <Section id="contact" title="Get In Touch" className="pt-8 sm:pt-10 pb-10 sm:pb-14">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: Channels */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-black dark:text-white">Let&apos;s work together</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Choose a channel below or send me a message. I usually reply within a day.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email */}
            <div className="card card-hover flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-sm dark:border-white dark:bg-black">
                <IconMail size={22} className="text-black dark:text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Email</div>
                <div className="truncate font-bold text-black dark:text-white">{contact.email}</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-1 rounded-lg border-2 border-black px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    <IconExternalLink size={14} /> Open
                  </a>
                  <button
                    onClick={() => copyToClipboard(contact.email)}
                    className="inline-flex items-center gap-1 rounded-lg border-2 border-neutral-300 px-3 py-1.5 text-xs font-bold text-neutral-700 transition-colors hover:border-black hover:text-black dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
                  >
                    <IconCopy size={14} /> Copy
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="card card-hover flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-sm dark:border-white dark:bg-black">
                <IconBrandWhatsapp size={22} className="text-black dark:text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">WhatsApp</div>
                <div className="truncate font-bold text-black dark:text-white">Quick Chat</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 rounded-lg border-2 border-black px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    <IconExternalLink size={14} /> Open
                  </a>
                  <button
                    onClick={() => copyToClipboard(contact.whatsapp)}
                    className="inline-flex items-center gap-1 rounded-lg border-2 border-neutral-300 px-3 py-1.5 text-xs font-bold text-neutral-700 transition-colors hover:border-black hover:text-black dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-white dark:hover:text-white"
                  >
                    <IconCopy size={14} /> Copy
                  </button>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="card card-hover flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-sm dark:border-white dark:bg-black">
                <IconBrandLinkedin size={22} className="text-black dark:text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">LinkedIn</div>
                <div className="truncate font-bold text-black dark:text-white">Connect Professionally</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    className="inline-flex items-center gap-1 rounded-lg border-2 border-black px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    <IconExternalLink size={14} /> Open
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="card card-hover flex items-center gap-4 rounded-2xl p-5">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black bg-white shadow-sm dark:border-white dark:bg-black">
                <IconBrandGithub size={22} className="text-black dark:text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">GitHub</div>
                <div className="truncate font-bold text-black dark:text-white">View Projects</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    className="inline-flex items-center gap-1 rounded-lg border-2 border-black px-3 py-1.5 text-xs font-bold text-black transition-colors hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black"
                  >
                    <IconExternalLink size={14} /> Open
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-xl border-2 border-neutral-200 bg-white p-4 dark:border-neutral-800 dark:bg-black">
            <IconCircleCheck size={20} className="text-black dark:text-white" />
            <div className="text-sm text-neutral-700 dark:text-neutral-300">
              <span className="font-semibold text-black dark:text-white">{contact.status}</span>
              <span className="mx-2">•</span>
              {contact.responseTime}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-3xl border-2 border-neutral-200 bg-white p-8 shadow-xl dark:border-neutral-800 dark:bg-black">
          <h3 className="mb-6 text-2xl font-extrabold text-black dark:text-white">Send a message</h3>
          <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
            {/* Hidden routing for EmailJS (ensure template uses these) */}
            <input type="hidden" name="to_email" value="hasithshavinda918@gmail.com" />
            <input type="hidden" name="to_name" value="Hasith S Karunarathne" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Name</label>
                <input
                  className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-black placeholder-neutral-400 outline-none transition-all focus:border-black dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder-neutral-500 dark:focus:border-white"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Email</label>
                <input
                  className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-black placeholder-neutral-400 outline-none transition-all focus:border-black dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder-neutral-500 dark:focus:border-white"
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Subject</label>
              <input
                className="w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-black placeholder-neutral-400 outline-none transition-all focus:border-black dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder-neutral-500 dark:focus:border-white"
                name="subject"
                placeholder="How can I help?"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Message</label>
              <textarea
                className="min-h-32 w-full rounded-xl border-2 border-neutral-200 bg-white px-4 py-3 text-sm font-medium text-black placeholder-neutral-400 outline-none transition-all focus:border-black dark:border-neutral-700 dark:bg-black dark:text-white dark:placeholder-neutral-500 dark:focus:border-white"
                name="message"
                placeholder="Write your message..."
                required
              />
            </div>
            <button
              disabled={sending}
              className="group inline-flex items-center gap-2 rounded-xl border-2 border-black bg-black px-6 py-3 font-bold text-white transition-all hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 dark:border-white dark:bg-white dark:text-black"
            >
              {sending ? (
                <>
                  <IconLoader2 className="animate-spin" size={18} /> Sending...
                </>
              ) : (
                <>
                  <IconSend size={18} /> Send Message
                  <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {status && (
              <div
                className={`rounded-xl border-2 p-4 text-center text-sm font-semibold ${
                  status.type === "ok"
                    ? "border-black bg-white text-black dark:border-white dark:bg-black dark:text-white"
                    : "border-red-500 bg-white text-red-600 dark:border-red-500 dark:bg-black dark:text-red-300"
                }`}
              >
                {status.msg}
              </div>
            )}
          </form>
        </div>
      </div>
    </Section>
  );
}
