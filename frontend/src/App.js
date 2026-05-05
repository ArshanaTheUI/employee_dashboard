import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import MainDashboard from "./pages/MainDashboard";
import TablePage from "./pages/TablePage";
import Settings from "./pages/Settings";
import Admin from "./pages/Admin";

import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import Employee from "./pages/Employee";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute><Layout /></ProtectedRoute>}>
          <Route index element={<MainDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="table" element={<TablePage />} />
          <Route path="settings" element={<Settings />} />
          <Route path="admin" element={<Admin />} />
<Route path="/employee" element={<Employee />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
