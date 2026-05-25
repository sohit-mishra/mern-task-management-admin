import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TaskTable from "@/components/tables/TaskTable";
import { deleteTask, getMyTasks } from "@/services/taskService";
import { errorToast, successToast } from "@/utils/toast";

export default function MyTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getMyTasks().then((res) => setTasks(res.data || [])).catch((error) => errorToast(error.message));
  }, []);

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks((items) => items.filter((task) => task._id !== id));
    successToast("Task deleted");
  };

  return (
    <DashboardLayout title="My Tasks" actions={<Button asChild><Link to="/create-task"><Plus />Create Task</Link></Button>}>
      <div className="rounded-lg border p-4">
        <TaskTable tasks={tasks} onDelete={handleDelete} />
      </div>
    </DashboardLayout>
  );
}
