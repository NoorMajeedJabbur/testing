import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const users = [
    {
      username: "noor",
      password: "20142014",
    },
  ];
  const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });

  const handleInput = (e) => {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const loginUser = users.find(
        (u) => u.username === values.username && u.password === values.password
      );
      if (loginUser) {
        setIsLogged(true);
        navigate("/");
      } else {
        toast.error("userName or password  is in valid");
        setLoading(false);
      }
    }, 2000);
  };

  return (
    <main className="form-signin w-100 m-auto">
      <fieldset>
        <form onSubmit={handleSubmit}>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              placeholder="username"
              name="username"
              value={values.username}
              id="username"
              onChange={handleInput}
            />
            <label htmlFor="username">UserName</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="password"
              name="password"
              value={values.password}
              id="password"
              onChange={handleInput}
            />
            <label htmlFor="password">Password</label>
          </div>

          <button
            className="w-100 btn btn-lg btn-primary"
            type="submit"
            disabled={loading}
          >
            {loading && (
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
        </form>
      </fieldset>
    </main>
  );
};

export default Login;
