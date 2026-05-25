
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TaskTable from "@/components/tables/TaskTable";
import { deleteAnyTask, getAllTasks } from "@/services/adminService";
import { errorToast, successToast } from "@/utils/toast";

export default function TaskMonitoring() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((res) => setTasks(res.data || [])).catch((error) => errorToast(error.message));
  }, []);

  const handleDelete = async (id) => {
    await deleteAnyTask(id);
    setTasks((items) => items.filter((task) => task._id !== id));
    successToast("Task deleted");
  };

  return (
    <DashboardLayout title="Task Monitoring">
      <div className="rounded-lg border p-4">
        <TaskTable tasks={tasks} onDelete={handleDelete} />
      </div>
    </DashboardLayout>
  );
}
