import { Outlet } from "react-router-dom";

export default function StudentLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-blue-900 text-white p-4">
        <h2 className="text-xl font-bold mb-4">Student Panel</h2>
        {/* Add NavLinks here if needed */}
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
