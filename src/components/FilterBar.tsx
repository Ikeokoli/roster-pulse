import type { ShiftFilters, ShiftStatus, SortOrder, Team } from "../types/shift";

interface FilterBarProps {
  filters: ShiftFilters;
  sortOrder: SortOrder;
  onFiltersChange: (filters: ShiftFilters) => void;
  onSortChange: (sortOrder: SortOrder) => void;
}

const teams: Array<Team | "All"> = ["All", "Dispatch", "Fulfilment", "Returns"];
const statuses: Array<ShiftStatus | "All"> = ["All", "Open", "Watch", "Covered"];

export function FilterBar({ filters, sortOrder, onFiltersChange, onSortChange }: FilterBarProps) {
  return (
    <section className="filter-bar" aria-label="Shift filters">
      <label className="search-field">
        <span>Search roster</span>
        <input
          type="search"
          value={filters.query}
          placeholder="Role, person, or location"
          onChange={(event) => onFiltersChange({ ...filters, query: event.target.value })}
        />
      </label>
      <label>
        <span>Team</span>
        <select
          value={filters.team}
          onChange={(event) =>
            onFiltersChange({ ...filters, team: event.target.value as Team | "All" })
          }
        >
          {teams.map((team) => (
            <option value={team} key={team}>{team}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Status</span>
        <select
          value={filters.status}
          onChange={(event) =>
            onFiltersChange({ ...filters, status: event.target.value as ShiftStatus | "All" })
          }
        >
          {statuses.map((status) => (
            <option value={status} key={status}>{status}</option>
          ))}
        </select>
      </label>
      <button
        className="sort-button"
        type="button"
        aria-pressed={sortOrder === "risk"}
        onClick={() => onSortChange(sortOrder === "start" ? "risk" : "start")}
      >
        <span aria-hidden="true">↕</span>
        {sortOrder === "risk" ? "Risk first" : "Start time"}
      </button>
    </section>
  );
}

