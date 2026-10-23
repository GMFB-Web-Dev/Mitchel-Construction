type IconProps = {
  className?: string;
};

export function ArrowIcon({ className = "" }: IconProps) {
  return (
    <svg className={`arrow-icon ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M5 12h13M13 7l5 5-5 5" />
    </svg>
  );
}

export function ChevronIcon({ direction = "right", className = "" }: IconProps & { direction?: "left" | "right" | "up" | "down" }) {
  return (
    <svg className={`chevron-icon chevron-${direction} ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="m9 6 6 6-6 6" />
    </svg>
  );
}
