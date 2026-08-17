import { shifts } from "../data/shifts";
import { describe, expect, it } from "vitest";
import { summariseShifts } from "./summariseShifts";

describe("summariseShifts", () => {
  it("counts coverage signals and remaining work", () => {
    expect(summariseShifts(shifts)).toEqual({
      total: 5,
      covered: 2,
      attention: 2,
      open: 1,
      remainingTasks: 22,
    });
  });

  it("returns zero values for an empty roster", () => {
    expect(summariseShifts([])).toEqual({
      total: 0,
      covered: 0,
      attention: 0,
      open: 0,
      remainingTasks: 0,
    });
  });
});
