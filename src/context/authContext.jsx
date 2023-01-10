import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AuthContext = createContext();

export default AuthContext;
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );
  const navigate = useNavigate();

  const login = (values, setLoading, setInputDissapled) => {
    setTimeout(() => {
      const loginUser = users.find(
        (u) => u.username === values.username && u.password === values.password
      );
      if (loginUser) {
        setUser(loginUser);
        localStorage.setItem("user", JSON.stringify(loginUser));
        navigate("/");
      } else {
        toast.error("userName or password  is in valid");

        setLoading(false);
        setInputDissapled(false);
      }
    }, 2000);
  };

  const Logout = () => {
    localStorage.removeItem("user");
    setUser(false);
    console.log(45475454);
    // navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
const users = [
  {
    username: "noor",
    password: "20142014",
  },
];
