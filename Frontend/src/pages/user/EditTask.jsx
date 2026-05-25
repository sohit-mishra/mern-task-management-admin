import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TaskForm from "@/components/forms/TaskForm";
import { Card, CardContent } from "@/components/ui/card";
import { getMyTasks, updateTask } from "@/services/taskService";
import { errorToast, successToast } from "@/utils/toast";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    getMyTasks()
      .then((res) => setTask((res.data || []).find((item) => item._id === id) || null))
      .catch((error) => errorToast(error.message));
  }, [id]);

  const handleSubmit = async (data) => {
    try {
      await updateTask(id, data);
      successToast("Task updated");
      navigate("/my-tasks");
    } catch (error) {
      errorToast(error.message);
    }
  };

  return (
    <DashboardLayout title="Edit Task">
      <Card className="max-w-2xl rounded-lg">
        <CardContent>
          <TaskForm key={task?._id || "empty"} initialValues={task} onSubmit={handleSubmit} />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
