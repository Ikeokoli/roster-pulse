import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FilterBar } from "./FilterBar";

describe("FilterBar", () => {
  it("emits query changes", async () => {
    const user = userEvent.setup();
    const onFiltersChange = vi.fn();
    render(
      <FilterBar
        filters={{ query: "", team: "All", status: "All" }}
        sortOrder="start"
        onFiltersChange={onFiltersChange}
        onSortChange={() => undefined}
      />,
    );

    await user.type(screen.getByRole("searchbox", { name: "Search roster" }), "yard");
    expect(onFiltersChange).toHaveBeenCalled();
  });

  it("requests risk sorting from the start-time view", async () => {
    const user = userEvent.setup();
    const onSortChange = vi.fn();
    render(
      <FilterBar
        filters={{ query: "", team: "All", status: "All" }}
        sortOrder="start"
        onFiltersChange={() => undefined}
        onSortChange={onSortChange}
      />,
    );

    await user.click(screen.getByRole("button", { name: /start time/i }));
    expect(onSortChange).toHaveBeenCalledWith("risk");
  });
});
