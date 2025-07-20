import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <Outlet />
    </div>
  );
}
