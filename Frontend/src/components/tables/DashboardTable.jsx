import TaskTable from "./TaskTable";

export default function DashboardTable({ tasks = [], onDelete }) {
  return <TaskTable tasks={tasks.slice(0, 5)} onDelete={onDelete} />;
}
