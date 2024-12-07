import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setShowLogin }) => {
  const [curreState, setCurreState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{curreState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {curreState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{curreState === "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Contiuing, i agree to the terms of use and privacy policy.</p>
        </div>
        {curreState === "Login" ? (
          <p>
            Create new account?{" "}
            <span onClick={() => setCurreState("Sign Up")}>Click Here</span>{" "}
          </p>
        ) : (
          <p>
            Already have an account.{" "}
            <span onClick={() => setCurreState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
