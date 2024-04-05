import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../pages/home/Heading";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <header className="header">
        <div className="header-content">
          <Link to="/">
            <img src="/assert/logo.svg" alt="logo" />
          </Link>
          <nav className={openMenu ? "show" : "hide"}>
            <Link to="/feature">Features</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="about-us">About Us</Link>
            <Link to="blog">BLog</Link>
            <Link to="contact-us">Contact</Link>
          </nav>
        </div>
        <Heading openMenu={openMenu} handleMenu={handleMenu} />
        <p></p>
      </header>
    </div>
  );
}

export default Header;
