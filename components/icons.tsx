export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16m-6-6 6 6-6 6"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Apple() {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 20 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        d="M16.8 12.7c0-2.1 1.7-3.2 1.8-3.3-1-1.5-2.6-1.7-3.2-1.8-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.6 0-3.1.9-3.9 2.3-1.7 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3.1-.7s1.9.7 3.1.7c1.3 0 2.1-1.1 2.8-2.2.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.7-1-2.7-3.8ZM14.5 6c.6-.8 1.1-1.9 1-3-.9.1-2 .6-2.7 1.4-.6.7-1.2 1.8-1.1 2.9 1 .1 2.1-.5 2.8-1.3Z"
        transform="translate(-2 -1)"
      />
    </svg>
  );
}

export function PlayStore() {
  return (
    <svg
      width="17"
      height="18"
      viewBox="0 0 20 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="m2 2 10 9L2 20V2Zm10 9 3-3 4 3-4 3-3-3ZM2 2l13 6M2 20l13-6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
