import { cn } from "@/lib/utils";

interface MouseAppsLmsLogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function MouseAppsLmsLogo({
  size = "md",
  className,
}: MouseAppsLmsLogoProps) {
  const iconSize = { sm: 28, md: 36, lg: 44 }[size];
  const textSize = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  }[size];
  const subSize = {
    sm: "text-[8px]",
    md: "text-[9px]",
    lg: "text-[11px]",
  }[size];

  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {/* Icon Mark */}
      <div className="relative shrink-0">
        <svg
          aria-hidden="true"
          focusable="false"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background shape */}
          <rect width="44" height="44" rx="10" fill="url(#grad)" />
          {/* Mouse cursor shape */}
          <path
            d="M14 12L14 30L19.5 24.5L22.5 31L25 30L22 23.5L29 23.5L14 12Z"
            fill="white"
            fillOpacity="0.95"
          />
          {/* Play dot accent */}
          <circle cx="32" cy="32" r="5" fill="url(#gradAccent)" />
          <defs>
            <linearGradient
              id="grad"
              x1="0"
              y1="0"
              x2="44"
              y2="44"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#7C3AED" />
              <stop offset="1" stopColor="#C026D3" />
            </linearGradient>
            <linearGradient
              id="gradAccent"
              x1="27"
              y1="27"
              x2="37"
              y2="37"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#22D3EE" />
              <stop offset="1" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-extrabold tracking-tight text-white",
            textSize,
          )}
        >
          Mouse<span className="text-violet-400">Apps</span>
        </span>
        <span
          className={cn(
            "uppercase tracking-[0.18em] text-zinc-400 font-medium mt-0.5",
            subSize,
          )}
        >
          LMS
        </span>
      </div>
    </div>
  );
}
