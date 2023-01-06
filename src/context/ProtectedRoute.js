import { Navigate } from "react-router-dom";
import { Loading } from "../Components/Components/Loading";
import { useAuth } from "./authContext"

export const ProtectedHome = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <Loading />
        )
    }
    if (!user) return <Navigate to='/login' />
    return <>{children}</>
}

export const ProtectedLogin = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) {
        return (
            <Loading />
        )
    }
    if (user) return <Navigate to='/' />
    return <>{children}</>
}
