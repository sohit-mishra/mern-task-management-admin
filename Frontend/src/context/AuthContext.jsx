import { createContext, useState } from "react";
import { setStorage, removeStorage, getStorage } from "@/utils/storage";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getStorage("user") || null);
    const [token ,setToken] = useState(getStorage("token") || null);
    const [loading] = useState(false);


    const login = (userData, userToken) => {
        setUser(userData);
        setToken(userToken);
        setStorage("user", userData);
        setStorage("token", userToken);

    };


    const logout = () => {
        setUser(null);
        setToken(null);
        removeStorage('user');
        removeStorage("token");
    }

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
