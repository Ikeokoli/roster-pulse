import type { Shift } from "../types/shift";

export interface ShiftSummary {
  total: number;
  covered: number;
  attention: number;
  open: number;
  remainingTasks: number;
}

export function summariseShifts(shifts: Shift[]): ShiftSummary {
  return shifts.reduce<ShiftSummary>(
    (summary, shift) => ({
      total: summary.total + 1,
      covered: summary.covered + Number(shift.status === "Covered"),
      attention: summary.attention + Number(shift.status === "Watch"),
      open: summary.open + Number(shift.status === "Open"),
      remainingTasks: summary.remainingTasks + shift.remainingTasks,
    }),
    { total: 0, covered: 0, attention: 0, open: 0, remainingTasks: 0 },
  );
}
