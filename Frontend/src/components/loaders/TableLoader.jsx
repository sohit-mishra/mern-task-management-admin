export default function TableLoader({ rows = 5 }) {
  return (
    <div className="space-y-2 rounded-lg border p-4">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="h-9 rounded bg-muted" />
      ))}
    </div>
  );
}
