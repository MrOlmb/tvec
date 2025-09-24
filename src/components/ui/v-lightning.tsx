interface VLightningProps {
  className?: string;
  size?: 'nav' | 'hero';
}

export function VLightning({ className = '', size = 'nav' }: VLightningProps) {
  // Adjust dimensions based on size
  const dimensions = size === 'hero' 
    ? { width: 56, height: 56, viewBox: "0 0 56 56" }
    : { width: 24, height: 24, viewBox: "0 0 56 56" };

  return (
    <svg
      {...dimensions}
      className={`inline-block ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* V-shaped lightning bolt - merges V form with electrical zigzag */}
      <path
        d="M8 8 L16 24 L20 18 L24 28 L28 22 L32 32 L36 26 L40 36 L48 8 L36 30 L32 24 L28 34 L24 28 L20 38 L16 32 L24 52 L8 8 Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={size === 'hero' ? "2" : "1"}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* Inner lightning detail */}
      <path
        d="M14 16 L18 12 L22 20 L26 16 L30 24 L34 20 L38 28 L42 24"
        stroke={size === 'hero' ? "rgba(251, 191, 36, 0.8)" : "rgba(251, 191, 36, 0.6)"}
        strokeWidth={size === 'hero' ? "2" : "1.5"}
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}