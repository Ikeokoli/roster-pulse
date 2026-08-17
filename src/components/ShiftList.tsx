import type { Shift } from "../types/shift";
import { EmptyState } from "./EmptyState";
import { ShiftCard } from "./ShiftCard";

interface ShiftListProps {
  shifts: Shift[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ShiftList({ shifts, selectedId, onSelect }: ShiftListProps) {
  if (shifts.length === 0) return <EmptyState />;

  return (
    <section className="shift-list" aria-label="Shift roster">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Coverage queue</p>
          <h2>{shifts.length} {shifts.length === 1 ? "shift" : "shifts"}</h2>
        </div>
        <span>Local draft notes</span>
      </div>
      <div className="shift-list__items">
        {shifts.map((shift) => (
          <ShiftCard
            key={shift.id}
            shift={shift}
            selected={shift.id === selectedId}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}
