import { profile } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { Section } from "./Section";

export function Certs() {
  return (
    <Section
      id="certs"
      eyebrow="Education"
      title="Education and certification"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {profile.education.map((item) => (
          <FadeIn key={item.school}>
            <article className="glow-card h-full rounded-xl p-7 sm:p-8">
              <p className="text-sm text-accent">Education</p>
              <h3 className="mt-5 font-serif text-2xl tracking-tight text-foreground">
                {item.school}
              </h3>
              <p className="mt-3 text-muted">{item.credential}</p>
            </article>
          </FadeIn>
        ))}
        {profile.certifications.map((item, index) => (
          <FadeIn key={item.name} delay={(index + 1) * 0.06}>
            <article className="glow-card h-full rounded-xl p-7 sm:p-8">
              <p className="text-sm text-accent">Certification</p>
              <h3 className="mt-5 font-serif text-2xl tracking-tight text-foreground">
                {item.name}
              </h3>
              <p className="mt-3 text-muted">{item.issuer}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
