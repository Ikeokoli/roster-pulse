export function EmptyState() {
  return (
    <section className="empty-state" aria-live="polite">
      <span aria-hidden="true">⌕</span>
      <h2>No shifts match</h2>
      <p>Adjust the team, status, or search filters to restore the roster.</p>
    </section>
  );
}
