
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatsCard({
  title = "Metric",
  value = "0",
  change,
  icon: Icon,
}) {
  const isPositive = String(change || "").startsWith("+");

  return (
    <Card className="rounded-lg">
      <CardContent className="flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="mt-2 text-2xl font-semibold">{value}</p>
          {change ? (
            <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
              {isPositive ? <ArrowUpRight /> : <ArrowDownRight />}
              {change}
            </p>
          ) : null}
        </div>
        {Icon ? (
          <div className="grid size-10 place-items-center rounded-lg bg-muted">
            <Icon className="size-5" />
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
