import { shifts } from "../data/shifts";
import { describe, expect, it } from "vitest";
import { filterAndSortShifts } from "./filterShifts";

const defaults = { query: "", team: "All" as const, status: "All" as const };

describe("filterAndSortShifts", () => {
  it("matches roles and people without case sensitivity", () => {
    expect(filterAndSortShifts(shifts, { ...defaults, query: "MAYA" }, "start")).toHaveLength(1);
    expect(filterAndSortShifts(shifts, { ...defaults, query: "inventory" }, "start")[0].id).toBe("shift-407");
  });

  it("combines team and status filters", () => {
    const result = filterAndSortShifts(
      shifts,
      { ...defaults, team: "Dispatch", status: "Watch" },
      "start",
    );
    expect(result.map((shift) => shift.id)).toEqual(["shift-512"]);
  });

  it("orders open and watch shifts before covered shifts when risk is selected", () => {
    const result = filterAndSortShifts(shifts, defaults, "risk");
    expect(result.map((shift) => shift.status)).toEqual(["Open", "Watch", "Watch", "Covered", "Covered"]);
  });
});
