import "./App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Main } from "./Pages";
import { Admin } from "./Pages/Admin";
import { Toaster } from "react-hot-toast";
import { Login } from "./Pages/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/admin" element={<Navigate to="/admin/home" replace />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
