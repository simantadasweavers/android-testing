import { Outlet } from "react-router";
import { Login } from "../pages/Login";

export const PrivateRouting = () => {
    const isAuth = true;
    return isAuth ? <Outlet /> : <Login /> 
}
