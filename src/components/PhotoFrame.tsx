import Image from "next/image";
import { profile, withBase } from "@/content/profile";

export function PhotoFrame({
  className = "",
  size = 420,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <div className={`relative mx-auto w-full max-w-[420px] ${className}`}>
      <div
        className="pointer-events-none absolute -bottom-4 -right-4 h-full w-full rounded-md border-2 border-accent photo-glow"
        aria-hidden
      />
      <div className="relative overflow-hidden rounded-md bg-card">
        <Image
          src={withBase(profile.photo)}
          alt={`${profile.name}, ${profile.role}`}
          width={size}
          height={size}
          priority
          className="aspect-square w-full object-cover object-[50%_12%]"
        />
      </div>
    </div>
  );
}
