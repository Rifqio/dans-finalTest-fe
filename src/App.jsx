import { Route, Routes } from "react-router-dom";
// pages
import LoginPage from "./pages/auth/Login.page";
import RegisterPage from "./pages/auth/Register.page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
