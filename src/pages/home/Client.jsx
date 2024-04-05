import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { ClientData } from "../../startAIData/Data";

const Client = () => {
  return (
    <div className="section">
      <div className="client_content">
        <div>
          <span>
            Grow your<strong>customer base </strong>
            easier than before
          </span>
          <div>
            <ul>
              <li>
                <IoCheckmarkCircleSharp className="markIcon" />
                {ClientData[0].desc1}
              </li>
              <li>
                <IoCheckmarkCircleSharp className="markIcon" />
                {ClientData[0].desc2}
              </li>
              <li>
                <IoCheckmarkCircleSharp className="markIcon" />
                {ClientData[0].desc3}
              </li>
            </ul>
          </div>

          <div className="btn-group">
            <a href="/" className="btn">
              Start for free
            </a>
            <div className="btn_link">
              <div>
                <a href="/">Book a demo </a>
              </div>
              <div>
                <RiArrowRightSLine className="rightArrow" />
              </div>
            </div>
          </div>
        </div>
        <div className="client_img-box">
          <img src={ClientData[0].image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Client;
