import { formatPhone, profile, telHref, withBase } from "@/content/profile";
import { FadeIn } from "./FadeIn";
import { LinkedInIcon, MailIcon, PhoneIcon } from "./LinkedInIcon";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-20 sm:px-10 sm:py-24">
      <FadeIn>
        <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Contact
              </p>
              <h2 className="mt-3 font-serif text-4xl text-foreground sm:text-5xl">
                Let’s talk
              </h2>
              <p className="mt-4 max-w-md text-muted">
                Magento, Laravel, OMS, or a production commerce problem — email,
                call, or LinkedIn.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-foreground">
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-accent">
                    <PhoneIcon />
                  </span>
                  <span>
                    {profile.phones.map((phone, index) => (
                      <span key={phone}>
                        {index > 0 ? " · " : ""}
                        <a href={telHref(phone)} className="hover:text-accent hover:underline">
                          {formatPhone(phone)}
                        </a>
                      </span>
                    ))}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-accent">
                    <MailIcon />
                  </span>
                  <a
                    href={`mailto:${profile.email}`}
                    className="hover:text-accent hover:underline"
                  >
                    {profile.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-accent">
                    <LinkedInIcon />
                  </span>
                  <span>{profile.location}</span>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl bg-background p-6">
              <p className="font-serif text-2xl text-foreground">Get in touch</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Open mail or LinkedIn and I will reply. Resume is a one-page PDF
                of the same work shown here.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${profile.email}?subject=Hire%20${encodeURIComponent(profile.name)}`}
                  className="btn-glow inline-flex h-11 items-center rounded-md px-6 text-sm tracking-wide"
                >
                  Send email
                </a>
                <a
                  href={withBase(profile.resume)}
                  download="Amir_Khan_Resume.pdf"
                  className="inline-flex h-11 items-center rounded-md border border-border bg-card px-6 text-sm tracking-wide transition hover:border-accent hover:text-accent"
                >
                  Download resume
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center rounded-md border border-border bg-card px-6 text-sm tracking-wide transition hover:border-accent hover:text-accent"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
