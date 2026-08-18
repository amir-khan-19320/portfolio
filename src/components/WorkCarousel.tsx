"use client";

import Link from "next/link";
import { useCallback, useRef } from "react";
import type { Project } from "@/content/profile";

function pad(index: number) {
  return String(index + 1).padStart(2, "0");
}

export function WorkCarousel({
  projects,
  startIndex,
}: {
  projects: readonly Project[];
  startIndex: number;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  const scrollByCard = useCallback((direction: -1 | 1) => {
    const root = scroller.current;
    if (!root) return;
    const card = root.querySelector<HTMLElement>("[data-carousel-card]");
    const amount = card ? card.offsetWidth + 20 : 340;
    root.scrollBy({ left: direction * amount, behavior: "smooth" });
  }, []);

  return (
    <div>
      <div className="mb-5 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-accent hover:text-accent"
          aria-label="Previous project"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-accent hover:text-accent"
          aria-label="Next project"
        >
          →
        </button>
      </div>
      <div
        ref={scroller}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <Link
            key={project.slug}
            href={`/work/${project.slug}/`}
            data-carousel-card
            className="group w-[min(100%,22rem)] shrink-0 snap-start"
          >
            <article className="glow-card flex h-full min-h-[22rem] flex-col rounded-xl p-6 transition duration-300 group-hover:-translate-y-1">
              <div className="flex items-center justify-between gap-3">
                <p className="rounded-full bg-background px-3 py-1 text-xs font-medium uppercase tracking-wide text-accent">
                  {pad(startIndex + index)} · {project.domain}
                </p>
                <p className="text-xs text-muted">{project.tagline}</p>
              </div>
              <h4 className="mt-6 font-serif text-2xl tracking-tight text-foreground">
                {project.title}
              </h4>
              <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
                {project.summary}
              </p>
              <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {project.stack.slice(0, 4).map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-background px-2.5 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm font-medium text-accent">
                Read case study →
              </p>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
