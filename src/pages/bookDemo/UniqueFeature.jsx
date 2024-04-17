import React from "react";
import { MinimizeData } from "../../startAIData/Data";
import { BusinessData } from "../../startAIData/Data";
import { ClientData } from "../../startAIData/Data";

function UniqueFeature() {
  return (
    <div className="uniquefeature_container">
      <h3>Meet our unique features</h3>
      <div className="uniquefeature_content">
        <div className="uniquefeature_details">
          <h6>
            <strong>Minimize</strong> the costs and support your clients
            <strong> better</strong>
          </h6>
          <img src={MinimizeData[0].image} alt="" />
        </div>

        <div className="uniquefeature_details">
          <h6>
            Win <strong>more clients</strong> in the long term business
          </h6>
          <img src={ClientData[0].image} alt="" />
        </div>

        <div className="uniquefeature_details">
          <h6>
            Grow your <strong>customer base</strong> easier than before
          </h6>
          <img src={BusinessData[0].image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UniqueFeature;
