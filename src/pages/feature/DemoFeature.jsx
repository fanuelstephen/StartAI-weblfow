import React from "react";
import { DemoData } from "../../startAIData/Data";

function DemoFeature() {
  return (
    <div>
      <div className="demo_section">
        <div className="demo_component">
          <video controls>
            <source src={DemoData[0].clip} type="video/mp4" />
          </video>
        </div>
        <div className="demo_content">
          <h1>
            <strong>Better </strong>
            <span>user </span>satisfaction
          </h1>
          <p>{DemoData[0].desc}</p>
        </div>
      </div>
    </div>
  );
}

export default DemoFeature;
