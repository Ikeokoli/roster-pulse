import { formatShiftTime } from "./formatTime";
import { describe, expect, it } from "vitest";

describe("formatShiftTime", () => {
  it("uses the fixed UTC operating clock", () => {
    expect(formatShiftTime("2026-08-17T18:30:00Z")).toBe("18:30");
  });
});
