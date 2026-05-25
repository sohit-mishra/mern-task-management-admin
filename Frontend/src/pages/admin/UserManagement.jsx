

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import UserTable from "@/components/tables/UserTable";
import { deleteUser, getAllUsers, updateUserStatus } from "@/services/adminService";
import { errorToast, successToast } from "@/utils/toast";

export default function UserManagement() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((res) => setUsers(res.data || [])).catch((error) => errorToast(error.message));
  }, []);

  const handleDelete = async (id) => {
    await deleteUser(id);
    setUsers((items) => items.filter((user) => user._id !== id));
    successToast("User deleted");
  };

  const handleStatus = async (id, status) => {
    await updateUserStatus(id, status);
    setUsers((items) => items.map((user) => user._id === id ? { ...user, status } : user));
    successToast("Status updated");
  };

  return (
    <DashboardLayout title="User Management">
      <div className="rounded-lg border p-4">
        <UserTable users={users} onDelete={handleDelete} onStatusChange={handleStatus} />
      </div>
    </DashboardLayout>
  );
}
