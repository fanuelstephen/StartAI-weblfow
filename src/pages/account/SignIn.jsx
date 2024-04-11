import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function SignIn() {
  return (
    <div className="signIn_container">
      <div className="sighIn_content">
        <Link to="/" className="signIn_logo">
          <img src="/assert/logo.svg" alt="logo" />
        </Link>
        <div className="signIn_form_container">
          <h1>Sign in to your account</h1>
          <p>Enter your credentials to view all insights</p>

          <form action="#" className="form_container">
            <div className="SignIn_form-content">
              <label htmlFor="email">Email*</label>
              <input type="text" name="Email" placeholder="Your work email" />
            </div>

            <div className="SignIn_form-content">
              <div className="lable_link">
                <label htmlFor="email">Password*</label>
                <Link to="/account/forgot-password" className="signIn_link">Forgort Your Password?</Link>
              </div>
              <input
                type="text"
                name="Password"
                placeholder="Your work Password"
              />
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
          <Link to="/account/sign-up">Sign Up</Link>
        </div>
      </div>

      <div className="signIn_img">
        <img src="/assert/account_img.png" alt="" />
      </div>
    </div>
  );
}

export default SignIn;
