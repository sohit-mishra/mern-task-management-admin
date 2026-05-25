import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const isAdmin = user?.role?.toLowerCase() === "admin";

  return {
    isAdmin,
    user,
  };
};

export default useAdmin;
