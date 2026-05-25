import { CheckCircle2, Clock } from "lucide-react";
import AnalyticsChart from "./AnalyticsChart";

export default function TaskStatusChart({ tasks = [] }) {
  const completed = tasks.filter((task) => task.status === "Completed").length;
  const pending = Math.max(tasks.length - completed, 0);

  return (
    <AnalyticsChart
      title="Task Status"
      data={[
        { label: "Completed", value: completed, icon: CheckCircle2 },
        { label: "Pending", value: pending, icon: Clock },
      ]}
    />
  );
}
