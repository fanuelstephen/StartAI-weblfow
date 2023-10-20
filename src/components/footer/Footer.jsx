import React from "react";
import { footerData } from "../startAIData/Data";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillFire } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

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
            {/* {footerData.map((column, Index) => (
              <div key={Index} className="footer-column">
                <ul>
                  {Array.isArray(column) &&
                    column.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a href={`/${link.toLowerCase()}`}>{link}</a>
                      </li>
                    ))}
                </ul>
              </div>
            ))} */}

            <ul className="footer_item_links">
              <div>
                <li className="links-footer">
                  <a href="#">About us</a>
                  <a href="#">Book a demo</a>
                  <a href="#">Blog</a>
                  <a href="#">Pricing</a>
                  <a href="#">Contact</a>
                </li>
              </div>

              <div>
                <li className="links-footer">
                  <a href="#">Features</a>
                  <a href="#">Sign In</a>
                  <a href="#">Sign Up</a>
                  <a href="#">Forgot Password</a>
                </li>
              </div>

              <div>
                <li className="links-footer">
                  <a href="#">Style Guide</a>
                  <a href="#">Changelog</a>
                  <a href="#">Licenses</a>
                  <a href="#" className="footer-btn">
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
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookies Settings</a>
            </li>
          </ul>
        </div>
      </div>

      {/* <div className="extra">
        <div className="hire_us">
          <div className="hire-us-wrapper">
            <p className="hire-us-text ">
              Hire us to build a website using this template. Get unlimited
              design &amp;&nbsp;dev.
            </p>
            <div className="hire-us-btn">View pricing</div>
          </div>
          <RxCross2 className="cross-icon" />
        </div>
      </div> */}
    </div>
  );
};

export default Footer;
