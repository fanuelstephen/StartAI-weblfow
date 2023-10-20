import React from "react";
import { HomeContent } from "../startAIData/Data";

const Home = () => {
  console.log(HomeContent);
  return (
    <div className="home">
      <div className="home_content">
        <h2>
          <span>
            <strong>Customer support </strong>
          </span>
          based on the AI technology
        </h2>
        <p>{HomeContent[0].homeDesc}</p>
        <div>
          <button className="btn1">{HomeContent[0].btnTex1}</button>
          <button className="btn2">Book a Demo</button>
        </div>
        <div className="specialist">
          <img src={HomeContent[0].userProfile} alt="" />
          <div className="specialist_info">
            <span>{HomeContent[0].imgdesc1}</span>
            <a href="#">
              Talk with a <strong>specialist</strong>
            </a>
          </div>
        </div>
      </div>
      <div className="home_img">
        <img src={HomeContent[0].homeImg} alt="homeIMge" />
      </div>
    </div>
  );
};

export default Home;
