import { profile } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="TechSevin journey">
      <ol className="relative space-y-0 border-l-2 border-accent/20 pl-8 sm:pl-10">
        {profile.experience.map((job, index) => (
          <li key={`${job.role}-${job.period}`} className="relative pb-12 last:pb-0">
            <span
              className="absolute -left-[39px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-card bg-accent sm:-left-[47px]"
              aria-hidden
            />
            <FadeIn delay={index * 0.06}>
              <p className="text-sm font-medium text-accent">{job.period}</p>
              <h3 className="mt-2 font-serif text-3xl tracking-tight text-foreground">
                {job.role}
              </h3>
              <p className="mt-1 text-muted">
                {job.company}
                <span className="text-muted"> · </span>
                {job.location}
              </p>
              <ul className="mt-5 max-w-2xl space-y-2 leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </li>
        ))}
      </ol>
    </Section>
  );
}
