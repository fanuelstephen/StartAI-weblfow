import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { MdMenu } from "react-icons/md";

const Header = ({ opneNavigation, oppenSidebar }) => {
  return (
    <div className="hero-section">
      <div className="header">
        <div className="navigation">
          <div className="nav_content">
            <img src="/assert/logo.svg" alt="logo" />
            <div className={oppenSidebar ? "nav_responsive" : "navbar_links"}>
              <ul>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="navigation-right">
            <button id="btn" className={oppenSidebar ? "nav_button" : ""}>
              <a href="#">Book a demo</a>
            </button>
            <HiShoppingCart className="icon shoping_cart" />
            <BsPerson className="icon customer_icon" />
            <MdMenu className="icon nav_menu" onClick={opneNavigation} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
