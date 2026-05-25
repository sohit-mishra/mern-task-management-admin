
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ActivityTable from "@/components/tables/ActivityTable";
import { getAllActivities } from "@/services/activityService";
import { errorToast } from "@/utils/toast";

export default function ActivityLogs() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getAllActivities().then((res) => setActivities(res.data?.activities || [])).catch((error) => errorToast(error.message));
  }, []);

  return (
    <DashboardLayout title="Activity Logs">
      <div className="rounded-lg border p-4">
        <ActivityTable activities={activities} />
      </div>
    </DashboardLayout>
  );
}
