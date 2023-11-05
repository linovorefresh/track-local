import { useState, createContext, useContext, useEffect } from "react"; 

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ auth, setAuth ] = useState({
        user: null,
        token: '',
        refreshToken: ''
    });

    useEffect(() => {
        let fromLS = localStorage.get('aa');
        if (fromLS) setAuth(JSON.parse(fromLS))
    }, []);

    return (
        <AuthContext.Provider value={[auth, setAuth]} >
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider}