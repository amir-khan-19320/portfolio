import { profile, withBase } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { PhotoFrame } from "./PhotoFrame";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pb-24 pt-16 sm:px-10 sm:pb-32 sm:pt-24">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <FadeIn>
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Mumbai · Adobe Commerce certified
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {profile.role}
          </h1>
          <p className="mt-4 text-lg text-muted sm:text-xl">
            Magento 2.4 · Laravel · OMS
          </p>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            {profile.pitch}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="btn-glow inline-flex h-12 items-center rounded-md px-7 text-sm tracking-wide"
            >
              View work
            </a>
            <a
              href={withBase(profile.resume)}
              download="Amir_Khan_Resume.pdf"
              className="inline-flex h-12 items-center rounded-md border border-border bg-card px-7 text-sm tracking-wide transition hover:border-accent hover:text-accent"
            >
              Download resume
            </a>
          </div>
        </FadeIn>
        <FadeIn delay={0.08} className="lg:justify-self-end">
          <PhotoFrame />
        </FadeIn>
      </div>
    </section>
  );
}
