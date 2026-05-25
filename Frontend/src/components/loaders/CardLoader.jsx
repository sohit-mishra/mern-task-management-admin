import { Card, CardContent } from "@/components/ui/card";

export default function CardLoader() {
  return (
    <Card className="rounded-lg">
      <CardContent className="space-y-3">
        <div className="h-4 w-1/3 rounded bg-muted" />
        <div className="h-8 w-1/2 rounded bg-muted" />
        <div className="h-3 w-2/3 rounded bg-muted" />
      </CardContent>
    </Card>
  );
}
