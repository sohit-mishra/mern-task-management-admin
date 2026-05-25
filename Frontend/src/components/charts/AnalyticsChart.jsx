import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const defaultData = [
  { label: "Users", value: 70 },
  { label: "Tasks", value: 88 },
  { label: "Done", value: 54 },
  { label: "Logs", value: 42 },
];

export default function AnalyticsChart({ data = defaultData, title = "Overview" }) {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {data.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>{item.label}</span>
              <span className="text-muted-foreground">{item.value}</span>
            </div>
            <div className="h-2 rounded-full bg-muted">
              <div className="h-2 rounded-full bg-primary" style={{ width: `${Math.min(item.value, 100)}%` }} />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
