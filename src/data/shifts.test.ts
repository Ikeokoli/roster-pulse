import { shifts } from "./shifts";
import { describe, expect, it } from "vitest";

describe("shift fixtures", () => {
  it("uses stable, unique identifiers", () => {
    expect(new Set(shifts.map((shift) => shift.id))).toHaveLength(shifts.length);
  });

  it("contains coverage across every operating team", () => {
    expect(new Set(shifts.map((shift) => shift.team))).toEqual(
      new Set(["Dispatch", "Fulfilment", "Returns"]),
    );
  });
});
