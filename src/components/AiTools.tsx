import { profile } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { Section } from "./Section";

export function AiTools() {
  return (
    <Section
      id="ai"
      eyebrow="AI tools"
      title="How I use AI on the job"
    >
      <FadeIn>
        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {profile.aiTools.intro}
        </p>
      </FadeIn>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {profile.aiTools.items.map((tool, index) => (
          <FadeIn key={tool.name} delay={index * 0.04}>
            <article className="glow-card h-full rounded-xl p-7 sm:p-8">
              <p className="font-serif text-2xl tracking-tight text-foreground">
                {tool.name}
              </p>
              <p className="mt-3 leading-relaxed text-muted">{tool.use}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
