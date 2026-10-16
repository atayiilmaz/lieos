export function Mark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M5 5h12v18h18v12H5V5Z" fill="currentColor" />
      <path d="M25 5h10v10H25z" fill="currentColor" />
    </svg>
  );
}

export function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a
      className={`logo${footer ? " logo-footer" : ""}`}
      href="#home"
      aria-label="Lieos — back to top"
    >
      <Mark />
      <span>
        lieos<span className="logo-period">.</span>
      </span>
    </a>
  );
}
