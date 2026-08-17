import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("Roster Pulse", () => {
  it("shows the complete roster and summary", () => {
    render(<App />);
    expect(screen.getByRole("heading", { name: "5 shifts" })).toBeInTheDocument();
    expect(screen.getByText("Tasks remaining").nextElementSibling).toHaveTextContent("22");
  });

  it("filters the roster by a person's name", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.type(screen.getByRole("searchbox", { name: "Search roster" }), "Priya");
    expect(screen.getByRole("heading", { name: "1 shift" })).toBeInTheDocument();
    const roster = screen.getByRole("region", { name: "Shift roster" });
    expect(within(roster).getByText("Returns coordinator")).toBeInTheDocument();
    expect(within(roster).queryByText("Outbound lead")).not.toBeInTheDocument();
  });

  it("opens the selected shift detail", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /late dispatch marshal/i }));
    const panel = screen.getByRole("complementary", { name: /details for late dispatch marshal/i });
    expect(within(panel).getByText("Forklift cover ends two hours early")).toBeInTheDocument();
  });

  it("can prioritise risk in the visible roster", async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole("button", { name: /start time/i }));
    const roster = screen.getByRole("region", { name: "Shift roster" });
    const shiftButtons = within(roster).getAllByRole("button");
    expect(shiftButtons[0]).toHaveAccessibleName(/pick-floor supervisor/i);
  });
});
