import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function ForgotPassword() {
  return (
    <div>
      <div className="signIn_container">
        <div className="sighIn_content">
          <Link to="/" className="signIn_logo">
            <img src="/assert/logo.svg" alt="logo" />
          </Link>
          <div className="signIn_form_container">
            <h1>Forgot password</h1>
            <p>Enter your email below to reset your password</p>

            <form action="#" className="form_container">
              <div className="SignIn_form-content">
                <label htmlFor="email">Email*</label>
                <input type="text" name="Email" placeholder="Your work email" />
              </div>
              <div className="signIN_btns">
                <button className="Log_in-btn">Log in</button>
                <button className="sign_in_btn">
                  <FaGoogle className="google_icon" />
                  <span> Sign In with Google</span>
                </button>
              </div>
            </form>
          </div>

          <div className="sign-up-link">
            <p>Don't have an account? </p>
            <Link to="/account/sign-in">Sign in</Link>
          </div>
        </div>

        <div className="signIn_img">
          <img src="/assert/account_img.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
