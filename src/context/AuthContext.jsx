import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [registerUser, setRegisterUser] = useState(JSON.parse(localStorage.getItem('register')) || []);
    const [logginedUser, setLogginedUser] = useState(JSON.parse(localStorage.getItem('login')) || null);

    const AddRegisterUser = (data) => {
        let newUser = [...registerUser, data];
        setRegisterUser(newUser);
        localStorage.setItem('register', JSON.stringify(newUser));
    }
    const LogoutUser = () => {
        setLogginedUser(null);
        localStorage.removeItem('login');
    };

    return (<AuthContext.Provider value={{
        registerUser,
        setRegisterUser,
        AddRegisterUser,
        logginedUser,
        setLogginedUser,
        LogoutUser
    }}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);