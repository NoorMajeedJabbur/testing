import { Joi } from "joi-browser";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/authContext";

const Login = () => {
  // const schema = {
  //   username: Joi.string().min(10).max(20).required().label("Username"),
  //   password: Joi.string().min(5).max(20).required().label("Password"),
  // };
  const { user, login } = useContext(AuthContext);
  const [inputDissapled, setInputDissapled] = useState(false);
  const [values, setValues] = useState({ username: "", password: "" });
  // const [isLogged, setIsLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInput = (e) => {
    const newValues = { ...values };
    newValues[e.target.name] = e.target.value;
    setValues(newValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setInputDissapled(true);
    login(values, setLoading, setInputDissapled);
  };
  if (user) return navigate("/");

  return (
    <main className="form-signin w-100 m-auto">
      <fieldset disabled={inputDissapled}>
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
            disabled={
              loading || values.username === "" || values.password === ""
            }
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
