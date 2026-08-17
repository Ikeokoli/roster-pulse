import { useState } from "react";
import type { Shift } from "../types/shift";
import { formatShiftTime } from "../utils/formatTime";
import { StatusBadge } from "./StatusBadge";

interface ShiftCardProps {
  shift: Shift;
  selected: boolean;
  onSelect: (id: string) => void;
}

export function ShiftCard({ shift, selected, onSelect }: ShiftCardProps) {
  const [draftNote, setDraftNote] = useState(shift.handoffNote);

  return (
    <article className={`shift-card${selected ? " shift-card--selected" : ""}`}>
      <button className="shift-card__select" type="button" onClick={() => onSelect(shift.id)}>
        <span className="shift-card__heading">
          <span>
            <span className="shift-card__role">{shift.role}</span>
            <span className="shift-card__meta">{shift.team} · {shift.location}</span>
          </span>
          <StatusBadge status={shift.status} />
        </span>
        <span className="shift-card__coverage">
          <span><small>Shift</small>{formatShiftTime(shift.start)}-{formatShiftTime(shift.end)}</span>
          <span><small>Primary</small>{shift.assignee ?? "Unassigned"}</span>
          <span><small>Backup</small>{shift.backup ?? "Not set"}</span>
        </span>
      </button>
      <label className="handoff-field">
        <span>Draft handoff note for {shift.role}</span>
        <textarea
          rows={2}
          value={draftNote}
          onChange={(event) => setDraftNote(event.target.value)}
        />
      </label>
    </article>
  );
}

