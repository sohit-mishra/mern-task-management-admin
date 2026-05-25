import useAuth from "./useAuth";

const useAdmin = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === "admin";

  return {
    isAdmin,
    user,
  };
};

export default useAdmin;