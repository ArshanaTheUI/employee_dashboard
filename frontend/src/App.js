import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Users from "./pages/Users";
import TablePage from "./pages/TablePage";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";

import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Employee from "./pages/Employee";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* Redirect */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />


        {/* Public Route */}
        <Route
          path="/login"
          element={<Login />}
        />

<Route
  path="/register"
  element={<Register />}
/>
        {/* Protected Routes */}
        <Route
          element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }
        >

          {/* Admin Dashboard */}
          <Route
            path="/admin-dashboard"
            element={<AdminDashboard />}
          />


          {/* Employee Dashboard */}
          <Route
            path="/employee-dashboard"
            element={<EmployeeDashboard />}
          />


          {/* Other Routes */}
          <Route
            path="/users"
            element={<Users />}
          />

          <Route
            path="/table"
            element={<TablePage />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

          <Route
            path="/add-emp"
            element={<Admin />}
          />
 <Route
            path="/view-emp"
            element={<Employee />}
          />
        </Route>

      </Routes>

    </BrowserRouter>

  );
}

export default App;