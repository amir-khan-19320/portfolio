import Image from "next/image";
import { profile, withBase } from "@/content/profile";

export function BrandLogo({
  size = 44,
  className = "",
  priority = false,
}: {
  size?: number;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={withBase(profile.logo)}
      alt={`${profile.name} logo`}
      width={size}
      height={size}
      className={`rounded-lg ${className}`}
      priority={priority}
    />
  );
}
