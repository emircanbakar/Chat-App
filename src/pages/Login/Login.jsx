import "./Login.css";
import assets from "../../assets/assets";
import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  return (
    <div className="login">
      <img src={assets.logo_big} alt="" className="logo" />
      <form className="login-form">
        <h2> {currentState} </h2>
        {currentState === "Sign Up" ? (
          <input
            type="text"
            placeholder="username"
            required
            className="form-input"
          />
        ) : null}

        <input
          type="email"
          placeholder="email address"
          className="form-input"
          required
        />
        <input
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
              <span onClick={() => setCurrentState("Sign Up")}> click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
