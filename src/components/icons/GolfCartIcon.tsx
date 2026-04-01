export const GolfCartIcon = ({
  className,
  size,
  strokeWidth = 2,
  color = "currentColor",
  ...props
}: {
  className?: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <circle cx="7" cy="19" r="2" />
    <circle cx="17" cy="19" r="2" />
    <path d="M3 11h11" />
    <path d="M14 8V6a2 2 0 0 1 2-2h2" />
    <path d="M5 11v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6" />
    <path d="M6 6L3 11" />
    <path d="M14 11l4-5h3v5" />
  </svg>
);