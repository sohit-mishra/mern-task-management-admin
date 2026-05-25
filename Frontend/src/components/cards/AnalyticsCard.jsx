

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalyticsCard({ title = "Analytics", value = "0", children }) {
  return (
    <Card className="rounded-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-semibold">{value}</p>
        {children ? <div className="mt-4">{children}</div> : null}
      </CardContent>
    </Card>
  );
}
