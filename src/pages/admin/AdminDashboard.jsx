import React, { useEffect, useState } from "react";
import {
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
import axios from "axios";
import useAuthStore from "../../store/auth";
import LoadingSpinner from "../../components/Loader";

const AdminDashboard = () => {
  const { token } = useAuthStore();
  const [dashboardData, setDashboardData] = useState({
    totalUsers: 0,
    studentsCount: 0,
    teachersCount: 0,
    adminsCount: 0,
    coursesCount: 0,
  });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const res = await axios({
        method: "get",
        url: "http://localhost:8010/api/admin/dashboard",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setDashboardData(res.data);
      setLoading(false);
    };
    getData();
  }, []);

  const stats = [
    {
      title: "Total Users",
      value: dashboardData.totalUsers,
      icon: Users,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Students",
      value: dashboardData.studentsCount,
      icon: GraduationCap,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Teachers",
      value: dashboardData.teachersCount,
      icon: UserCheck,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Courses",
      value: dashboardData.coursesCount,
      icon: BookOpen,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];
  return (
    <div className=" bg-gray-50">
      {/* Main Content */}
      <div className="">
        {/* Dashboard Content */}
        {loading ? (
          <LoadingSpinner />
        ) : (
          <main className="p-6">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Overview
              </h3>
              <p className="text-gray-600">
                Welcome back! Here's what's happening with your platform.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-500 mb-1">
                        {stat.title}
                      </p>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                    </div>
                    <div
                      className={`${stat.lightColor} ${stat.textColor} p-3 rounded-lg`}
                    >
                      <stat.icon size={24} />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div className={`w-full bg-gray-200 rounded-full h-2`}>
                      <div
                        className={`${stat.color} h-2 rounded-full transition-all duration-300`}
                        style={{
                          width: `${Math.min((stat.value / 10) * 100, 100)}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Content Areas */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Recent Activity
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <GraduationCap size={16} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        New student registered
                      </p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users size={16} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        User profile updated
                      </p>
                      <p className="text-xs text-gray-500">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <BookOpen size={16} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        Course content ready
                      </p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">
                  Quick Actions
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="flex flex-col items-center justify-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors duration-200">
                    <Users size={24} className="text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-blue-600">
                      Add User
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors duration-200">
                    <BookOpen size={24} className="text-green-600 mb-2" />
                    <span className="text-sm font-medium text-green-600">
                      Create Course
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors duration-200">
                    <BarChart3 size={24} className="text-purple-600 mb-2" />
                    <span className="text-sm font-medium text-purple-600">
                      View Reports
                    </span>
                  </button>
                  <button className="flex flex-col items-center justify-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors duration-200">
                    <Settings size={24} className="text-orange-600 mb-2" />
                    <span className="text-sm font-medium text-orange-600">
                      Settings
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </main>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
