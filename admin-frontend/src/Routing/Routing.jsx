import { Routes, Route } from "react-router"
import { PrivateRouting } from "./PrivateRouting"
import { Dashboard } from "../pages/Dashboard"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { Apps } from "../pages/Apps"
import { AddUser } from "../pages/AddUser"
import { Error } from "../pages/Error"

export const Routing = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRouting />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/user/add-new" element={<AddUser />} />
          <Route path="/user/all" element={<Apps />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  )
}
