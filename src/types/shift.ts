export type Team = "Dispatch" | "Fulfilment" | "Returns";
export type ShiftStatus = "Covered" | "Watch" | "Open";
export type SortOrder = "start" | "risk";

export interface Shift {
  id: string;
  role: string;
  team: Team;
  location: string;
  start: string;
  end: string;
  assignee: string | null;
  backup: string | null;
  status: ShiftStatus;
  riskReason: string;
  handoffNote: string;
  remainingTasks: number;
  requiredSkills: string[];
}

export interface ShiftFilters {
  query: string;
  team: Team | "All";
  status: ShiftStatus | "All";
}
