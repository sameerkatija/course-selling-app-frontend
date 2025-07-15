import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/student/Dashboard";
import Login from "./pages/Login";
import MainLayout from "./pages/MainLayout";
import StudentLayout from "./pages/student/StudentLayout";
import Profile from "./pages/student/Profile";
import Courses from "./pages/student/Courses";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminLayout from "./pages/admin/AdminLayout";
import StudentSetting from "./pages/student/Setting";
import NotFoundPage from "./pages/NotFound";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            {/* Redirect root to student dashboard */}
            <Route
              index
              exact
              element={<Navigate to="student/dashboard" replace />}
            />
            {/* Public routes */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* Public routes */}
            <Route path="student" element={<StudentLayout />}>
              <Route
                index
                exact
                element={<Navigate to="/student/dashboard" replace />}
              />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="courses" element={<Courses />} />
              <Route path="settings" element={<StudentSetting />} />
            </Route>
            {/* Admin protected routes */}
            <Route path="admin" element={<AdminLayout />}>
              <Route
                index
                exact
                element={<Navigate to="/admin/dashboard" replace />}
              />
              <Route path="dashboard" element={<AdminDashboard />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
