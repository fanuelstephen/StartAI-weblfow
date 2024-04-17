import React, { useEffect, useRef, useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const Heading = ({ handleMenu, openMenu }) => {
  const [showHidden, setShowHidden] = useState("false");

  const handleIconHover = () => {
    setShowHidden(true);
  };

  const handleIconLeave = () => {
    setShowHidden(false);
  };
  const handleLinkBoxHover = () => {
    setShowHidden(true);
  };

  const handleLinkBoxLeave = () => {
    setShowHidden(false);
  };
  //select elements
  const modal = useRef(null);
  const overlay = useRef(null);

  const openModal = function () {
    modal.current.classList.remove("hidden");
    overlay.current.classList.remove("hidden");
  };

  const closeModal = function () {
    modal.current.classList.add("hidden");
    overlay.current.classList.add("hidden");
  };

  const handleOverlay = function () {
    closeModal();
  };

  useEffect(() => {
    const handleEscapeKey = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);
  return (
    <div className="navigation">
      <div className="navigation-right">
        <Link to="/BookDemo" id="btn" className={openMenu ? "nav_button" : ""}>
          Book a demo
        </Link>

        <HiShoppingCart className="icon shoping_cart" onClick={openModal} />

        <BsPerson
          className="icon customer_icon"
          onMouseEnter={handleIconHover}
          onMouseLeave={handleIconLeave}
        />

        <MdMenu
          className={`icon ${openMenu ? "nav_menu-green" : "nav_menu"}`}
          onClick={handleMenu}
        />
      </div>

      <div className="modal hidden" ref={modal}>
        <div className="modal--heading">
          <h4>Your cart</h4>
          <button className="btn--close-modal" onClick={closeModal}>
            &times;
          </button>
        </div>
        <p>No items found</p>
      </div>
      <div
        className="overlay hidden"
        ref={overlay}
        onClick={handleOverlay}
      ></div>
      {/* temporar */}
      <div
        className={`link_box  ${showHidden ? "" : "hidden"}`}
        onMouseEnter={handleLinkBoxHover}
        onMouseLeave={handleLinkBoxLeave}
      >
        <Link to="sign-in" className="sign_dec">
          Sign In
        </Link>
        <Link to="sign-up" className="sign_dec">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Heading;
