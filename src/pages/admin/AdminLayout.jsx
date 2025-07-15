import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

{
  /* <div className="min-h-screen flex">
  <aside className="w-64 bg-blue-900 text-white p-4">
    <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
    
  </aside>
  <main className="flex-1 p-6 bg-gray-100">
    <Outlet />
  </main>
</div> */
}
