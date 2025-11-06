import { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  className,
}: {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="inline-block text-4xl font-bold tracking-tight text-black sm:text-5xl dark:text-white">
              {title}
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-black dark:bg-white"></div>
          </div>
        )}
        <div className="fade-in-up">{children}</div>
      </div>
    </section>
  );
}
