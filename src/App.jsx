import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import Dashboard from "./pages/student/Dashboard";
import Login from "./pages/Login";
import MainLayout from "./pages/MainLayout";
import StudentLayout from "./pages/student/StudentLayout";
import Profile from "./pages/student/Profile";
import Courses from "./pages/student/Courses";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="student" element={<StudentLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route path="courses" element={<Courses />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
