import Link from "next/link";
import { profile, type Project } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { Section } from "./Section";
import { WorkCarousel } from "./WorkCarousel";

function FeaturedRow({
  project,
  reverse,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-start gap-8 lg:grid-cols-2 lg:gap-14 ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
    >
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          {project.tagline}
        </p>
        <h3 className="mt-3 font-serif text-2xl text-foreground sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
        <ul className="mt-5 space-y-2 text-sm text-muted">
          {project.highlights.slice(0, 2).map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        <Link
          href={`/work/${project.slug}/`}
          className="btn-glow mt-6 inline-flex h-11 items-center rounded-md px-6 text-sm tracking-wide"
        >
          Case study
        </Link>
      </div>
      <div className="glow-card rounded-xl p-8">
        <p className="text-sm uppercase tracking-[0.2em] text-accent">
          {project.domain}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {project.stack.join(" · ")}
        </p>
        <ul className="mt-5 space-y-2 text-sm text-muted">
          {project.highlights.slice(2).map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Work() {
  const featured = profile.projects.filter((project) => project.featured);
  const rest = profile.projects.filter((project) => !project.featured);

  return (
    <Section id="work" eyebrow="Work" title="Selected work">
      <div className="space-y-16">
        {featured.map((project, index) => (
          <FadeIn key={project.slug} delay={index * 0.05}>
            <FeaturedRow project={project} reverse={index % 2 === 1} />
          </FadeIn>
        ))}
      </div>
      <FadeIn className="mt-16">
        <h3 className="font-serif text-2xl text-foreground sm:text-3xl">More projects</h3>
        <p className="mt-2 max-w-2xl text-muted">
          Magento stores, OMS, payments, GCC retail, and a realtime travel stack.
        </p>
        <div className="mt-8">
          <WorkCarousel projects={rest} startIndex={featured.length} />
        </div>
      </FadeIn>
    </Section>
  );
}
