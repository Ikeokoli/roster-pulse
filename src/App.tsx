import { useMemo, useState } from "react";
import { AppHeader } from "./components/AppHeader";
import { FilterBar } from "./components/FilterBar";
import { FooterNote } from "./components/FooterNote";
import { ShiftDetails } from "./components/ShiftDetails";
import { ShiftList } from "./components/ShiftList";
import { SummaryStrip } from "./components/SummaryStrip";
import { shifts } from "./data/shifts";
import type { ShiftFilters, SortOrder } from "./types/shift";
import { filterAndSortShifts } from "./utils/filterShifts";
import { summariseShifts } from "./utils/summariseShifts";

const defaultFilters: ShiftFilters = { query: "", team: "All", status: "All" };

export function App() {
  const [filters, setFilters] = useState(defaultFilters);
  const [sortOrder, setSortOrder] = useState<SortOrder>("start");
  const [selectedId, setSelectedId] = useState(shifts[0].id);

  const visibleShifts = useMemo(
    () => filterAndSortShifts(shifts, filters, sortOrder),
    [filters, sortOrder],
  );
  const summary = useMemo(() => summariseShifts(visibleShifts), [visibleShifts]);
  const selectedShift = shifts.find((shift) => shift.id === selectedId);

  return (
    <div className="app-shell">
      <AppHeader />
      <main>
        <section className="hero-copy">
          <div>
            <p className="eyebrow">Sunday, 17 August · Late operation</p>
            <h2>Keep every critical shift covered.</h2>
          </div>
          <p>Review risk, confirm backups, and leave concise handoff context before the next team arrives.</p>
        </section>
        <SummaryStrip summary={summary} />
        <FilterBar
          filters={filters}
          sortOrder={sortOrder}
          onFiltersChange={setFilters}
          onSortChange={setSortOrder}
        />
        <div className="workspace-grid">
          <ShiftList shifts={visibleShifts} selectedId={selectedId} onSelect={setSelectedId} />
          <ShiftDetails shift={selectedShift} />
        </div>
      </main>
      <FooterNote />
    </div>
  );
}
