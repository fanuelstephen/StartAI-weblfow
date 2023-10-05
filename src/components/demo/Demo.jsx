import React from "react";
import { DemoData } from "../startAIData/Data";

const Demo = () => {
  return (
    <div className="demo grid">
      <div className="demo_clip">
        <video controls>
          <source src={DemoData[0].clip} type="video/mp4" />
        </video>
      </div>
      <div className="demo_content">
        <h1>{DemoData[0].title}</h1>
        <p>{DemoData[0].desc}</p>
      </div>
    </div>
  );
};

export default Demo;