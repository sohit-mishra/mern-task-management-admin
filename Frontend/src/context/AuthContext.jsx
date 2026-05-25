import { useState } from "react";
import AuthContext from '@/hooks/useAuth';
import { setStorage, removeStorage, getStorage } from "@/utils/storage";


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(getStorage("user") || null);
    const [token ,setToken] = useState(getStorage("token") || null);
    const [loading] = useState(true);


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