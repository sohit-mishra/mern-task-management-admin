import AnalyticsChart from "./AnalyticsChart";

export default function ActivityChart({ activities = [] }) {
  const counts = activities.reduce((acc, item) => {
    acc[item.action || "ACTIVITY"] = (acc[item.action || "ACTIVITY"] || 0) + 1;
    return acc;
  }, {});

  const data = Object.entries(counts).map(([label, value]) => ({ label, value }));

  return <AnalyticsChart title="Activity Summary" data={data.length ? data : undefined} />;
}
