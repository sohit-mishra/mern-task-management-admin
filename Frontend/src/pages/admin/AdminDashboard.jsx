
import { useEffect, useState } from "react";
import { ClipboardList, Users, Activity } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import StatsCard from "@/components/cards/StatsCard";
import AnalyticsChart from "@/components/charts/AnalyticsChart";
import { getAllTasks, getAllUsers } from "@/services/adminService";
import { getAllActivities } from "@/services/activityService";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => setUsers(res.data || [])).catch(() => {});
    getAllTasks().then((res) => setTasks(res.data || [])).catch(() => {});
    getAllActivities().then((res) => setActivities(res.data?.activities || [])).catch(() => {});
  }, []);

  return (
    <DashboardLayout title="Admin Dashboard" subtitle="System-wide overview.">
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard title="Users" value={users.length} icon={Users} />
        <StatsCard title="Tasks" value={tasks.length} icon={ClipboardList} />
        <StatsCard title="Activities" value={activities.length} icon={Activity} />
      </div>
      <div className="mt-6">
        <AnalyticsChart data={[{ label: "Users", value: users.length }, { label: "Tasks", value: tasks.length }, { label: "Logs", value: activities.length }]} />
      </div>
    </DashboardLayout>
  );
}
