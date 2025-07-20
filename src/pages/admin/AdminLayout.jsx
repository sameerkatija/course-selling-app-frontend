import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  X,
  Home,
  Users,
  GraduationCap,
  UserCheck,
  BookOpen,
  Menu,
  Settings,
  BarChart3,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

import useAuthStore from "../../store/auth";
export default function AdminLayout() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const currentActiveIndex = path[path.length - 1];
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else if (user) {
      const roles = user.roles.map(({ role }) => role.name);
      if (!roles.includes("admin")) {
        navigate("/student");
      }
    }
  });
  const sidebarItems = [
    {
      icon: Home,
      label: "Dashboard",
      key: "dashboard",
    },
    {
      icon: Users,
      label: "Users",
      key: "users",
    },
    {
      icon: GraduationCap,
      label: "Students",
      key: "students",
    },
    {
      icon: UserCheck,
      label: "Teachers",
      key: "teachers",
    },
    {
      icon: BookOpen,
      label: "Courses",
      key: "courses",
    },
    {
      icon: BarChart3,
      label: "Analytics",
      key: "analytics",
    },
    {
      icon: Settings,
      label: "Settings",
      key: "settings",
    },
  ];
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-xl font-bold text-white">Admin Panel</h2>
          <button
            onClick={() => console.log(false)}
            className="text-white hover:text-gray-200 cursor-pointer"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <nav className="flex-1 flex-col justify-between">
          <div className="h-4/6">
            {sidebarItems.map((item) => (
              <Link to={`/admin/${item.key}`} key={item.key}>
                <button
                  className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                    item.key === currentActiveIndex
                      ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                      : "text-white hover:bg-gray-50 hover:text-gray-900"
                  }`}
                >
                  <item.icon size={20} className="mr-3" />
                  <span className="font-medium">{item.label}</span>
                </button>
              </Link>
            ))}
          </div>

          {/* User Roles */}
          <div>
            {user?.roles?.map(({ role }) => (
              <div
                className={`cursor-pointer py-4 my-1 text-center ${
                  role.name === "admin"
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "hover:bg-gray-50 hover:text-gray-900"
                }`}
                key={role.name}
              >
                <h2
                  className="text-xl font-bold uppercase"
                  onClick={() => navigate(`/${role.name}`)}
                >
                  {role.name}
                </h2>
              </div>
            ))}
          </div>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
