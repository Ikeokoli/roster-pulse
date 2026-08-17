import type { ShiftSummary } from "../utils/summariseShifts";

interface SummaryStripProps {
  summary: ShiftSummary;
}

export function SummaryStrip({ summary }: SummaryStripProps) {
  const items = [
    { label: "Shifts in view", value: summary.total, tone: "neutral" },
    { label: "Covered", value: summary.covered, tone: "good" },
    { label: "Needs attention", value: summary.attention, tone: "watch" },
    { label: "Open", value: summary.open, tone: "risk" },
    { label: "Tasks remaining", value: summary.remainingTasks, tone: "neutral" },
  ];

  return (
    <section className="summary-strip" aria-label="Coverage summary">
      {items.map((item) => (
        <article className={`summary-card summary-card--${item.tone}`} key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}

