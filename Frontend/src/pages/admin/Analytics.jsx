
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ActivityChart from "@/components/charts/ActivityChart";
import TaskStatusChart from "@/components/charts/TaskStatusChart";
import UserGrowthChart from "@/components/charts/UserGrowthChart";
import { getAllTasks, getAllUsers } from "@/services/adminService";
import { getAllActivities } from "@/services/activityService";

export default function Analytics() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllTasks().then((res) => setTasks(res.data || [])).catch(() => {});
    getAllUsers().then((res) => setUsers(res.data || [])).catch(() => {});
    getAllActivities().then((res) => setActivities(res.data?.activities || [])).catch(() => {});
  }, []);

  return (
    <DashboardLayout title="Analytics">
      <div className="grid gap-4 lg:grid-cols-3">
        <TaskStatusChart tasks={tasks} />
        <UserGrowthChart users={users} />
        <ActivityChart activities={activities} />
      </div>
    </DashboardLayout>
  );
}
