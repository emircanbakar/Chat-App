import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";
import { signup, login, resetPass } from "../../config/firebase";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currentState === "Sign Up") {
      signup(username, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2> {currentState} </h2>
        {currentState === "Sign Up" ? (
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            type="text"
            placeholder="username"
            required
            className="form-input"
          />
        ) : null}

        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          placeholder="email address"
          className="form-input"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="password"
          required
          className="form-input"
        />
        <button type="submit">
          {" "}
          {currentState === "Sign Up" ? "Create Account" : "Login"}{" "}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p> Agree to the terms of use & privacy policy. </p>
        </div>
        <div className="login-forgot">
          {currentState === "Sign Up" ? (
            <p className="login-toggle">
              Already have an account
              <span onClick={() => setCurrentState("Login")}> click here</span>
            </p>
          ) : (
            <p className="login-toggle">
              Create an account
              <span onClick={() => setCurrentState("Sign Up")}>click here</span>
            </p>
          )}
          {currentState === "Login" ? (
            <p className="login-toggle">
              Forgot password
              <span onClick={() => resetPass(email)}>
                reset password
              </span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
