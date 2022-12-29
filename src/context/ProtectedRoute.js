import { Navigate } from "react-router-dom";
import { useAuth } from "./authContext"

export const ProtectedHome = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <h1>loading</h1>
    }
    if (!user) return <Navigate to='/login' />
    return <>{children}</>
}

export const ProtectedLogin = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return <h1>loading</h1>
    }
    if (user) return <Navigate to='/' />
    return <>{children}</>
}
