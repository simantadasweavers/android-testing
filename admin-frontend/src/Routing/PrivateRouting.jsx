import { Outlet } from "react-router";
import { Login } from "../pages/Login";

export const PrivateRouting = () => {
    const isAuth = localStorage.getItem('access_token');
    return isAuth ? <Outlet /> : <Login /> 
}
