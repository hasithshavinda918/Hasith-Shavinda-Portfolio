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
    <Section id="contact" title="Get In Touch" className="pt-8 sm:pt-10 pb-10 sm:pb-14 relative z-10">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Left: Channels */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl font-extrabold text-white">Let&apos;s work together</h3>
            <p className="text-neutral-400">
              Choose a channel below or send me a message. I usually reply within a day.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {/* Email */}
            <div className="card card-hover flex items-center gap-4 rounded-3xl p-5 border border-white/10 bg-black/40 backdrop-blur-md glowing-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-md">
                <IconMail size={22} className="text-cyan-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Email</div>
                <div className="truncate font-bold text-white">{contact.email}</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-white/10 hover:border-cyan-400"
                  >
                    <IconExternalLink size={14} /> Open
                  </a>
                  <button
                    onClick={() => copyToClipboard(contact.email)}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-transparent px-3 py-1.5 text-xs font-bold text-neutral-300 transition-colors hover:border-white hover:text-white"
                  >
                    <IconCopy size={14} /> Copy
                  </button>
                </div>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="card card-hover flex items-center gap-4 rounded-3xl p-5 border border-white/10 bg-black/40 backdrop-blur-md glowing-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-md">
                <IconBrandWhatsapp size={22} className="text-green-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">WhatsApp</div>
                <div className="truncate font-bold text-white">Quick Chat</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={`https://wa.me/${contact.whatsapp.replace(/[^\d]/g, "")}`}
                    target="_blank"
                    className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-white/10 hover:border-green-400"
                  >
                    <IconExternalLink size={14} /> Open
                  </a>
                  <button
                    onClick={() => copyToClipboard(contact.whatsapp)}
                    className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-transparent px-3 py-1.5 text-xs font-bold text-neutral-300 transition-colors hover:border-white hover:text-white"
                  >
                    <IconCopy size={14} /> Copy
                  </button>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="card card-hover flex items-center gap-4 rounded-3xl p-5 border border-white/10 bg-black/40 backdrop-blur-md glowing-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-md">
                <IconBrandLinkedin size={22} className="text-blue-500" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">LinkedIn</div>
                <div className="truncate font-bold text-white">Connect</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-white/10 hover:border-blue-500"
                  >
                    <IconExternalLink size={14} /> Open
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub */}
            <div className="card card-hover flex items-center gap-4 rounded-3xl p-5 border border-white/10 bg-black/40 backdrop-blur-md glowing-border">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/20 bg-white/5 shadow-md">
                <IconBrandGithub size={22} className="text-purple-400" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-semibold uppercase tracking-wide text-neutral-500">GitHub</div>
                <div className="truncate font-bold text-white">View Projects</div>
                <div className="mt-3 flex gap-2">
                  <a
                    href={contact.github}
                    target="_blank"
                    className="inline-flex items-center gap-1 rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-bold text-white transition-colors hover:bg-white/10 hover:border-purple-400"
                  >
                    <IconExternalLink size={14} /> Open
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-4 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            <IconCircleCheck size={20} className="text-cyan-400" />
            <div className="text-sm text-neutral-300">
              <span className="font-semibold text-white">{contact.status}</span>
              <span className="mx-2">•</span>
              {contact.responseTime}
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur-md p-8 shadow-[0_0_30px_rgba(188,19,254,0.1)] glowing-border">
          <h3 className="mb-6 text-2xl font-extrabold text-white">Send a message</h3>
          <form ref={formRef} onSubmit={onSubmit} className="space-y-5">
            {/* Hidden routing for EmailJS */}
            <input type="hidden" name="to_email" value="hasithshavinda918@gmail.com" />
            <input type="hidden" name="to_name" value="Hasith Karunarathne" />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Name</label>
                <input
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder-neutral-500 outline-none transition-all focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                  name="user_name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Email</label>
                <input
                  className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder-neutral-500 outline-none transition-all focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
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
                className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder-neutral-500 outline-none transition-all focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                name="subject"
                placeholder="How can I help?"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Message</label>
              <textarea
                className="min-h-32 w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm font-medium text-white placeholder-neutral-500 outline-none transition-all focus:border-cyan-400 focus:bg-white/10 focus:shadow-[0_0_15px_rgba(0,243,255,0.3)]"
                name="message"
                placeholder="Write your message..."
                required
              />
            </div>
            <button
              disabled={sending}
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:opacity-50"
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
                className={`rounded-xl border p-4 text-center text-sm font-semibold ${
                  status.type === "ok"
                    ? "border-cyan-400 bg-cyan-400/10 text-cyan-300"
                    : "border-red-500 bg-red-500/10 text-red-400"
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
