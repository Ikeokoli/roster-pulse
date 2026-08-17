import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SummaryStrip } from "./SummaryStrip";

describe("SummaryStrip", () => {
  it("announces the coverage summary as a labelled region", () => {
    render(
      <SummaryStrip summary={{ total: 5, covered: 2, attention: 2, open: 1, remainingTasks: 22 }} />,
    );

    expect(screen.getByRole("region", { name: "Coverage summary" })).toBeInTheDocument();
    expect(screen.getByText("Tasks remaining").nextElementSibling).toHaveTextContent("22");
  });
});
