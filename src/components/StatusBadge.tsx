import type { ShiftStatus } from "../types/shift";

interface StatusBadgeProps {
  status: ShiftStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return <span className={`status-badge status-badge--${status.toLowerCase()}`}>{status}</span>;
}
