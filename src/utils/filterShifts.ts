import type { Shift, ShiftFilters, SortOrder } from "../types/shift";

const riskRank: Record<Shift["status"], number> = {
  Open: 0,
  Watch: 1,
  Covered: 2,
};

export function filterAndSortShifts(
  shifts: Shift[],
  filters: ShiftFilters,
  sortOrder: SortOrder,
): Shift[] {
  const query = filters.query.trim().toLocaleLowerCase();

  return shifts
    .filter((shift) => filters.team === "All" || shift.team === filters.team)
    .filter((shift) => filters.status === "All" || shift.status === filters.status)
    .filter((shift) => {
      if (!query) return true;
      return [shift.role, shift.team, shift.location, shift.assignee ?? ""]
        .join(" ")
        .toLocaleLowerCase()
        .includes(query);
    })
    .sort((left, right) => {
      if (sortOrder === "risk") {
        return riskRank[left.status] - riskRank[right.status] || left.start.localeCompare(right.start);
      }
      return left.start.localeCompare(right.start);
    });
}
