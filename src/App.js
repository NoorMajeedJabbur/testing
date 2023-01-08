import logo from "./logo.svg";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Users from "./components/users";
import Login from "./components/login";
import ProtectedRoute from "./components/protectedRoute";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <div className="container">
          <Routes>
            <Route element={<ProtectedRoute />} />
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route />
            <Route path="/login" element={<Login />} />
          </Routes>

          <ToastContainer />
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
