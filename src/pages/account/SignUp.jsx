import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

function SignUp() {
  return (
    <div className="signIn_container">
      <div className="sighIn_content">
        <Link to="/" className="signIn_logo">
          <img src="/assert/logo.svg" alt="logo" />
        </Link>
        <div className="signIn_form_container">
          <h1>Create an account</h1>
          <p>Sign up and get 30 days free trial.</p>

          <form action="#" className="form_container">
            <div className="SignIn_form-content">
              <label htmlFor="email">Full Name*</label>
              <input
                type="text"
                name="Full name"
                placeholder="Enter your full name"
              />
            </div>

            <div className="SignIn_form-content">
              <label htmlFor="email">Email*</label>
              <input type="text" name="Email" placeholder="Your work email" />
            </div>

            <div className="SignIn_form-content">
              <div className="lable_link">
                <label htmlFor="email">Password*</label>
                <Link to="/account/forgot-password" className="signIn_link">
                  Forgort Your Password?
                </Link>
              </div>
              <input
                type="text"
                name="Password"
                placeholder="Your work Password"
              />
            </div>

            <div className="signIN_btns">
              <button className="Log_in-btn">Submit</button>
              <button className="sign_in_btn">
                <FaGoogle className="google_icon" />
                <span> Sign In with Google</span>
              </button>
            </div>
          </form>
        </div>

        <div className="sign-up-link">
          <p>Already have an account? </p>
          <Link to="/account/sign-in">Sign In</Link>
        </div>
      </div>

      <div className="signIn_img">
        <img src="/assert/account_img.png" alt="" />
      </div>
    </div>
  );
}

export default SignUp;
