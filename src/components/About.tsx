import { profile, withBase } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="About">
      <FadeIn className="max-w-3xl space-y-5 text-muted">
        {profile.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <p>
          {profile.experience[0].role} at {profile.experience[0].company}. Based in{" "}
          {profile.location}.
        </p>
        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap">
          <a
            href={withBase(profile.resume)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex h-11 items-center justify-center rounded-md px-6 text-sm tracking-wide"
          >
            Resume
          </a>
          <a
            href={withBase(profile.resume)}
            download="Amir_Khan_Resume.pdf"
            className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm tracking-wide transition hover:border-accent hover:text-accent"
          >
            Download
          </a>
          <a
            href={`mailto:${profile.email}?subject=Hire%20${encodeURIComponent(profile.name)}`}
            className="inline-flex h-11 items-center justify-center rounded-md border border-border bg-card px-6 text-sm tracking-wide transition hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
        </div>
      </FadeIn>
    </Section>
  );
}
