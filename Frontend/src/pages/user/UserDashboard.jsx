import { useEffect, useState } from "react";
import { CheckCircle2, ClipboardList, Clock } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/cards/StatsCard";
import DashboardTable from "@/components/tables/DashboardTable";
import { getMyTasks, deleteTask } from "@/services/taskService";
import { errorToast, successToast } from "@/utils/toast";

export default function UserDashboard() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getMyTasks().then((res) => setTasks(res.data || [])).catch((error) => errorToast(error.message));
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks((items) => items.filter((task) => task._id !== id));
    successToast("Task deleted");
  };

  const completed = tasks.filter((task) => task.status === "Completed").length;

  return (
    <DashboardLayout title="Dashboard" subtitle="Your task summary and recent work.">
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard title="Total Tasks" value={tasks.length} icon={ClipboardList} />
        <StatsCard title="Completed" value={completed} icon={CheckCircle2} />
        <StatsCard title="Pending" value={tasks.length - completed} icon={Clock} />
      </div>
      <div className="mt-6 rounded-lg border p-4">
        <h2 className="mb-4 font-semibold">Recent Tasks</h2>
        <DashboardTable tasks={tasks} onDelete={handleDelete} />
      </div>
    </DashboardLayout>
  );
}
