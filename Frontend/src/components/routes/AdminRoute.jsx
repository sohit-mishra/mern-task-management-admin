import { Navigate, Outlet } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import PageLoader from "@/components/loaders/PageLoader";

const AdminRoute = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <PageLoader />;
    }

    if (!user) {
        return (
            <Navigate
                to="/login"
                replace
            />
        );
    }

    if (user?.role?.toLowerCase() !== "admin") {
        return (
            <Navigate
                to="/unauthorized"
                replace
            />
        );
    }

    return <Outlet />;
};

export default AdminRoute;
