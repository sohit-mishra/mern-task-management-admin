import AnalyticsChart from "./AnalyticsChart";

export default function UserGrowthChart({ users = [] }) {
  return (
    <AnalyticsChart
      title="User Growth"
      data={[
        { label: "Active users", value: users.filter((user) => user.status !== "Inactive").length },
        { label: "Inactive users", value: users.filter((user) => user.status === "Inactive").length },
        { label: "Total users", value: users.length },
      ]}
    />
  );
}
