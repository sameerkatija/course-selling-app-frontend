import React, { useState } from "react";
import {
  Users,
  GraduationCap,
  UserCheck,
  BookOpen,
  Menu,
  X,
  Home,
  Settings,
  BarChart3,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const dashboardData = {
    totalUsers: 3,
    studentsCount: 3,
    teachersCount: 0,
    adminsCount: 1,
    coursesCount: 0,
  };

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

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Users", active: false },
    { icon: GraduationCap, label: "Students", active: false },
    { icon: UserCheck, label: "Teachers", active: false },
    { icon: BookOpen, label: "Courses", active: false },
    { icon: BarChart3, label: "Analytics", active: false },
    { icon: Settings, label: "Settings", active: false },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 bg-gradient-to-r from-blue-600 to-blue-700">
          <h1 className="text-xl font-bold text-white">Admin Panel</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-gray-200"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="mt-8">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              className={`w-full flex items-center px-6 py-3 text-left transition-colors duration-200 ${
                item.active
                  ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <item.icon size={20} className="mr-3" />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden text-gray-500 hover:text-gray-700 mr-4"
              >
                <Menu size={24} />
              </button>
              <h2 className="text-2xl font-bold text-gray-800">
                Admin Dashboard
              </h2>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <button className="relative p-2 text-gray-500 hover:text-gray-700">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">A</span>
                </div>
                <span className="text-gray-700 font-medium">Admin</span>
                <ChevronDown size={16} className="text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
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
      </div>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default AdminDashboard;
