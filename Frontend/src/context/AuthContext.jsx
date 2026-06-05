import { createContext, useState } from "react";
import { setStorage, removeStorage, getStorage } from "@/utils/storage";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(getStorage("user") || null);
  const [token, setToken] = useState(getStorage("token") || null);
  const [loading] = useState(false);

  const login = (userData, userToken) => {
    console.log(userData.role);
    setUser(userData);
    setToken(userToken);
    setStorage("user", userData);
    setStorage(userData);
    setStorage("token", userToken);
    if (userData.role === "Admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    removeStorage("user");
    removeStorage("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        login,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
