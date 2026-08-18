import Link from "next/link";
import { profile } from "@/content/profile";
import { BrandLogo } from "./BrandLogo";
import { LinkedInIcon, MailIcon } from "./LinkedInIcon";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/40 px-6 py-10 sm:px-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <BrandLogo size={40} />
          <span className="font-serif text-lg text-foreground">{profile.name}</span>
        </Link>
        <p className="text-sm text-muted">© 2026 {profile.name}</p>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent hover:text-accent"
            aria-label="Email"
          >
            <MailIcon />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition hover:border-accent hover:text-accent"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
