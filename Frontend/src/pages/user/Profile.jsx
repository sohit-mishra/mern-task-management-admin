import DashboardLayout from "@/components/layout/DashboardLayout";
import UserCard from "@/components/cards/UserCard";
import useAuth from "@/hooks/useAuth";

export default function Profile() {
  const { user } = useAuth();

  return (
    <DashboardLayout title="Profile">
      <div className="max-w-xl">
        <UserCard user={user} />
      </div>
    </DashboardLayout>
  );
}
