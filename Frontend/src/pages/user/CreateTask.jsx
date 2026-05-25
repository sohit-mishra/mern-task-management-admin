import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/layout/DashboardLayout";
import TaskForm from "@/components/forms/TaskForm";
import { Card, CardContent } from "@/components/ui/card";
import { createTask } from "@/services/taskService";
import { errorToast, successToast } from "@/utils/toast";

export default function CreateTask() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      setLoading(true);
      await createTask(data);
      successToast("Task created");
      navigate("/my-tasks");
    } catch (error) {
      errorToast(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout title="Create Task">
      <Card className="max-w-2xl rounded-lg">
        <CardContent>
          <TaskForm onSubmit={handleSubmit} loading={loading} />
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
