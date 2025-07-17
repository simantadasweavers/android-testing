import { Navigate } from "react-router-dom"

export const Logout = () => {
   localStorage.removeItem('access_token');
   localStorage.removeItem('refresh_token');
   return <Navigate to="/" />
}
