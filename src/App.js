import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./pages/Users";
import Login from "./pages/Login";
import MainDashboard from "./pages/MainDashboard";
        import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
           <ProtectedRoute>   <MainDashboard /></ProtectedRoute>
       } />
        <Route path="/users" element={  <ProtectedRoute><Users /></ProtectedRoute>} />
        <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;