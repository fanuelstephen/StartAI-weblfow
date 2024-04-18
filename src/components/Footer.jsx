import React from "react";
import { footerData } from "../startAIData/Data";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <div className="left_side">
          <img src="/assert/logo.svg" alt="logo" />
          <div className="adressess">
            <div>
              <h6>{footerData[0].address}</h6>
              <span>{footerData[0].desc}</span>
            </div>
            <div>
              <h6>{footerData[0].contact}</h6>
              <p>{footerData[0].phone}</p>
              <p>{footerData[0].email}</p>
            </div>
          </div>
          <div className="socialMedia">
            <FaFacebookF className="socialIcon" />
            <BsInstagram className="socialIcon" />
            <AiOutlineTwitter className="socialIcon" />
            <FaLinkedin className="socialIcon" />
            <FaYoutube className="socialIcon" />
            <AiFillFire className="socialIcon" />
          </div>
        </div>

        <div className="right_side">
          <div className="footer-links">
            <ul className="footer_item_links">
              <div>
                <li className="links-footer">
                  <Link to="about-us">About us</Link>
                  <Link to="/BookDemo">Book a demo</Link>
                  <Link to="blog">Blog</Link>
                  <Link to="pricing">Pricing</Link>
                  <Link to="contact-us">Contact</Link>
                </li>
              </div>

              <div>
                <li className="links-footer">
                  <Link to="feature">Features</Link>
                  <Link to="/sign-in">Sign In</Link>
                  <Link to="/sign-up">Sign Up</Link>
                  <Link to="/forgot-password">Forgot Password</Link>
                </li>
              </div>

              <div>
                <li className="links-footer">
                  <a href="/">Style Guide</a>
                  <a href="/">Changelog</a>
                  <a href="/">Licenses</a>
                  <a href="/" className="footer-btn">
                    More Templates
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer_end">
        <p>©2023 StartAI All right reserved</p>
        <p>
          Designed by
          <span>
            <strong> DesignUp</strong>
          </span>
          - Powered by
          <span>
            <strong> Webflow</strong>
          </span>
        </p>
        <div>
          <ul>
            <li>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms of Service</a>
              <a href="/">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
