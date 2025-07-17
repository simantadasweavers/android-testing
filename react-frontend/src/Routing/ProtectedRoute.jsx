import { Outlet } from "react-router-dom";
import { Login } from "../pages/Login";

export const ProtectedRoute = () => {
    const isAuth  = localStorage.getItem('access_token');
    return(
        isAuth ? <Outlet /> : <Login />
    )
}

