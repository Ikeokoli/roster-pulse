import type { Shift } from "../types/shift";
import { formatShiftTime } from "../utils/formatTime";
import { StatusBadge } from "./StatusBadge";

interface ShiftDetailsProps {
  shift: Shift | undefined;
}

export function ShiftDetails({ shift }: ShiftDetailsProps) {
  if (!shift) {
    return (
      <aside className="details-panel details-panel--empty">
        <p>Select a shift to review its coverage risk and required skills.</p>
      </aside>
    );
  }

  return (
    <aside className="details-panel" aria-label={`Details for ${shift.role}`}>
      <div className="details-panel__topline">
        <p className="eyebrow">Shift detail</p>
        <StatusBadge status={shift.status} />
      </div>
      <h2>{shift.role}</h2>
      <p className="details-panel__location">{shift.team} · {shift.location}</p>
      <dl className="details-grid">
        <div><dt>Window</dt><dd>{formatShiftTime(shift.start)}-{formatShiftTime(shift.end)} UTC</dd></div>
        <div><dt>Primary</dt><dd>{shift.assignee ?? "Unassigned"}</dd></div>
        <div><dt>Backup</dt><dd>{shift.backup ?? "Not set"}</dd></div>
        <div><dt>Tasks left</dt><dd>{shift.remainingTasks}</dd></div>
      </dl>
      <section className="risk-callout">
        <span>Coverage signal</span>
        <p>{shift.riskReason}</p>
      </section>
      <section className="skill-list">
        <h3>Required skills</h3>
        <div>{shift.requiredSkills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>
    </aside>
  );
}

