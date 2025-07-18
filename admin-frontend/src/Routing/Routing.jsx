import { Routes, Route } from "react-router"
import { PrivateRouting } from "./PrivateRouting"
import { Home } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Apps } from "../pages/Apps"
import { AddUser } from "../pages/AddUser"
import { Error } from "../pages/Error"

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouting />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/user/add-new" element={<AddUser />} />
          <Route path="/user/all" element={<Apps />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
