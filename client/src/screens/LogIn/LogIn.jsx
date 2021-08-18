import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// import Layout from "../../components/Layout/Layout";
import { login } from "../../services/users";
import "./LogIn.css";

const LogIn = (props) => {
  const history = useHistory();
  const { setUser } = props;
  const [returnUser, setReturnUser] = useState({
    email: "",
    password: "", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReturnUser({ ...returnUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const logInUser = async () => {
      const signedInUser = await login(returnUser);
      setUser(signedInUser);
      setTimeout(() => {
        history.push("/");
      }, 500);
    };
    logInUser();
  };

  return (
    <div className="log-in-parent">
      <section className="sign-in-screen-text">
        <h2 className="login-message">Log In</h2>
      </section>
      <section className="sign-in-screen-form">
         <form onSubmit={handleSubmit}>
          <label htmlFor="email" className="email-label">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={returnUser.email}
            onChange={handleChange}
            className="login-email"
          />
          <label htmlFor="password" className="password-label">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={returnUser.password}
            onChange={handleChange}
            className="login-password"
          />
          <button type="log-in-submit" className="login-submit">
            <h3>Submit</h3>
          </button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/sign-up" className="sign-up-link">
            Sign up!
          </Link>
        </p>
      </section>
    </div>
  );
};

export default LogIn;