import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  X,
  Home,
  Users,
  GraduationCap,
  UserCheck,
  BookOpen,
  Settings,
  BarChart3,
} from "lucide-react";
import useAuthStore from "../../store/auth";
import { useEffect } from "react";
export default function StudentLayout() {
  const { user } = useAuthStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const currentActiveIndex = path[path.length - 1];
  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
  });
  const sidebarItems = [
    { icon: Home, label: "Dashboard", key: "dashboard" },
    { icon: BookOpen, label: "Courses", key: "courses" },
    { icon: Users, label: "Profile", key: "profile" },
    { icon: Settings, label: "Settings", key: "settings" },
  ];
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
          <h2 className="text-xl font-bold text-white">Student Panel</h2>
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
              <Link to={`/student/${item.key}`} key={item.key}>
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
                  role.name === "student"
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
