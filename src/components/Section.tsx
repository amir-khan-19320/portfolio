import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-5 py-14 sm:px-10 sm:py-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
        {title ? (
          <h2 className="mt-3 max-w-3xl font-serif text-3xl leading-[1.15] tracking-tight text-foreground sm:text-5xl">
            {title}
          </h2>
        ) : null}
        <div className={title ? "mt-12" : "mt-8"}>{children}</div>
      </div>
    </section>
  );
}
