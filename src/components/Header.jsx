import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../pages/home/Heading";
import { FaArrowRight } from "react-icons/fa";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const closeMenu = () => {
    setOpenMenu(false);
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <Link to="/">
            <img src="/assert/logo.svg" alt="logo" />
          </Link>
          <nav className={openMenu ? "show" : "hide"}>
            <Link to="feature" onClick={closeMenu}>
              Features
            </Link>
            <Link to="pricing" onClick={closeMenu}>
              Pricing
            </Link>
            <Link to="about-us" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="blog" onClick={closeMenu}>
              Blog
            </Link>
            <Link to="contact-us" onClick={closeMenu}>
              Contact
            </Link>

            <div className="login_accounts">
              <Link to="sign-in">Sign In</Link>
              <Link to="sign-up">Sign Up</Link>
              <div className="bookdemo_btn">
                <Link
                  to="BookDemo"
                  className="bookdemo_btn"
                  onClick={closeMenu}
                >
                  Book a Demo
                  <span>
                    <FaArrowRight className="bookmode_icon" />
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <Heading openMenu={openMenu} handleMenu={handleMenu} />
      </header>
    </div>
  );
}

export default Header;
