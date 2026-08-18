import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import {
  getAdjacentProjects,
  getCaseStudies,
  getProject,
  profile,
} from "@/content/profile";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCaseStudies().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.caseStudy) {
    return { title: "Not found" };
  }

  const description = `${project.title} — ${project.tagline}. ${project.summary} Stack: ${project.stack.join(", ")}.`;

  return {
    title: `${project.title} | ${project.domain} case study`,
    description,
    keywords: [project.title, project.domain, ...project.stack],
    alternates: {
      canonical: `/work/${project.slug}/`,
    },
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description,
      type: "article",
      url: `/work/${project.slug}/`,
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <main id="main" className="px-5 pb-20 pt-10 sm:px-10 sm:pb-24 sm:pt-16">
      <div className="mx-auto w-full max-w-6xl">
        <FadeIn>
          <Link
            href="/#work"
            className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted transition hover:text-accent"
          >
            ← Back to work
          </Link>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Case study · {project.tagline}
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {project.summary}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <li
                key={item}
                className="rounded-full bg-card px-3 py-1.5 text-sm text-muted shadow-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn delay={0.08} className="mt-16">
          <h2 className="font-serif text-3xl tracking-tight text-foreground">
            Highlights
          </h2>
          <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-muted">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>
        </FadeIn>

        {"modules" in project && project.modules ? (
          <FadeIn delay={0.1} className="mt-16">
            <h2 className="font-serif text-3xl tracking-tight text-foreground">
              Modules
            </h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {project.modules.map((item) => (
                <li
                  key={item}
                  className="rounded-full bg-card px-3 py-1.5 text-sm text-muted shadow-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ) : null}

        {"architecture" in project && project.architecture ? (
          <FadeIn delay={0.12} className="mt-16">
            <h2 className="font-serif text-3xl tracking-tight text-foreground">
              Architecture
            </h2>
            <ol className="mt-6 max-w-2xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card shadow-[0_18px_40px_-28px_rgba(15,23,42,0.16)]">
              {project.architecture.map((edge) => (
                <li
                  key={`${edge.from}-${edge.to}`}
                  className="grid gap-1 px-5 py-4 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-4"
                >
                  <span className="text-foreground">{edge.from}</span>
                  <span className="text-accent">→</span>
                  <span className="text-muted sm:text-right">{edge.to}</span>
                </li>
              ))}
            </ol>
          </FadeIn>
        ) : null}

        {"outcomes" in project && project.outcomes ? (
          <FadeIn delay={0.16} className="mt-16">
            <h2 className="font-serif text-3xl tracking-tight text-foreground">
              Outcomes
            </h2>
            <ul className="mt-6 max-w-2xl space-y-3 text-base leading-relaxed text-muted">
              {project.outcomes.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
        ) : null}

        <FadeIn delay={0.2} className="mt-16 border-t border-border pt-8">
          <p className="text-sm text-muted">
            Built in the same production stack {profile.name} ships at{" "}
            {profile.experience[0].company}.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between">
            {prev ? (
              <Link
                href={`/work/${prev.slug}/`}
                className="text-sm text-muted transition hover:text-accent"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/work/${next.slug}/`}
                className="text-sm text-muted transition hover:text-accent sm:text-right"
              >
                {next.title} →
              </Link>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
