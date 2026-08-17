import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { shifts } from "../data/shifts";
import { ShiftCard } from "./ShiftCard";

describe("ShiftCard", () => {
  it("keeps a local editable handoff draft", async () => {
    const user = userEvent.setup();
    render(<ShiftCard shift={shifts[0]} selected={false} onSelect={() => undefined} />);

    const note = screen.getByRole("textbox", { name: /draft handoff note/i });
    await user.clear(note);
    await user.type(note, "Gate check complete");

    expect(note).toHaveValue("Gate check complete");
  });

  it("reports its stable shift identifier when selected", async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<ShiftCard shift={shifts[0]} selected={false} onSelect={onSelect} />);

    await user.click(screen.getByRole("button", { name: /outbound lead/i }));
    expect(onSelect).toHaveBeenCalledWith("shift-104");
  });
});
