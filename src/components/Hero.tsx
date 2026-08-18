import { profile, withBase } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { PhotoFrame } from "./PhotoFrame";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-14 pt-8 sm:px-10 sm:pb-32 sm:pt-24">
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <FadeIn className="order-1 lg:order-2 lg:justify-self-end">
          <PhotoFrame />
        </FadeIn>
        <FadeIn className="order-2 text-center lg:order-1 lg:text-left">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Mumbai · Adobe Commerce certified
          </p>
          <p className="mt-4 font-serif text-2xl tracking-tight text-foreground sm:text-3xl lg:hidden">
            {profile.name}
          </p>
          <h1 className="mt-2 font-serif text-4xl leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:mt-4 lg:text-7xl">
            {profile.role}
          </h1>
          <p className="mt-3 text-base text-muted sm:mt-4 sm:text-xl">
            Magento 2.4 · Laravel · OMS
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg lg:mx-0">
            {profile.pitch}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center lg:justify-start">
            <a
              href="#work"
              className="btn-glow inline-flex h-12 items-center justify-center rounded-md px-7 text-sm tracking-wide"
            >
              View work
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
