import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  )
}
