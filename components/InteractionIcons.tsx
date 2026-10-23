type IconProps = {
  className?: string;
};

export function ArrowIcon({ direction = "right", className = "" }: IconProps & { direction?: "left" | "right" }) {
  return (
    <svg className={`arrow-icon arrow-${direction} ${className}`} viewBox="0 0 22 22" aria-hidden="true" focusable="false">
      <path d="M5 11h12M11 5l6 6-6 6" />
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
