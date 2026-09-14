export function ServiceIcon({ name, className = "h-9 w-9" }: { name: string; className?: string }) {
  const props = {
    className,
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.25,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "key":
      return (
        <svg {...props}>
          <circle cx="18" cy="24" r="8" />
          <path d="M24 24 H40 M40 24 V30 M34 24 V28" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...props}>
          <path d="M24 8 L26 20 L38 24 L26 28 L24 40 L22 28 L10 24 L22 20 Z" />
          <path d="M36 10 L37 14 L41 15 L37 16 L36 20 L35 16 L31 15 L35 14 Z" />
        </svg>
      );
    case "compass":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="14" />
          <path d="M24 12 V16 M24 32 V36 M12 24 H16 M32 24 H36" />
          <path d="M20 28 L26 20 L28 22 L22 30 Z" fill="currentColor" stroke="none" opacity="0.5" />
        </svg>
      );
    case "wrench":
      return (
        <svg {...props}>
          <path d="M30 12 A8 8 0 0 1 38 22 L28 32 L20 24 L30 14" />
          <path d="M16 28 L12 36 L20 32" />
          <circle cx="34" cy="16" r="2" />
        </svg>
      );
    case "doc":
      return (
        <svg {...props}>
          <path d="M14 10 H28 L36 18 V38 H14 Z" />
          <path d="M28 10 V18 H36" />
          <path d="M20 24 H30 M20 30 H28" />
        </svg>
      );
    case "orbit":
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="5" />
          <ellipse cx="24" cy="24" rx="16" ry="8" transform="rotate(-30 24 24)" />
          <ellipse cx="24" cy="24" rx="16" ry="8" transform="rotate(50 24 24)" />
        </svg>
      );
    default:
      return (
        <svg {...props}>
          <circle cx="24" cy="24" r="12" />
        </svg>
      );
  }
}
