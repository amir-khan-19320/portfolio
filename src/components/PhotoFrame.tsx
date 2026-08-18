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
    <div className={`relative mx-auto w-full max-w-[280px] pb-3 pr-3 sm:max-w-[340px] sm:pb-4 sm:pr-4 lg:max-w-[420px] ${className}`}>
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[calc(100%-0.75rem)] w-[calc(100%-0.75rem)] rounded-md border-2 border-accent photo-glow sm:h-[calc(100%-1rem)] sm:w-[calc(100%-1rem)]"
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
