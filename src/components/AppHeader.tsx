import { BrandMark } from "./BrandMark";

export function AppHeader() {
  return (
    <header className="app-header">
      <div className="brand-lockup">
        <BrandMark />
        <div>
          <p className="eyebrow">North hub operations</p>
          <h1>Roster Pulse</h1>
        </div>
      </div>
      <div className="header-status" aria-label="Roster synchronisation status">
        <span className="live-dot" aria-hidden="true" />
        <span>
          <strong>Roster live</strong>
          <small>Updated 13:42 UTC</small>
        </span>
      </div>
    </header>
  );
}

