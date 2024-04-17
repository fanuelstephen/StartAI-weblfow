import React from "react";
import { currentlyData } from "../../startAIData/Data";

function Currently() {
  return (
    <div className="currently_container">
      <div className="currently_heading">
        <h1>
          <strong>Currently </strong>open positions
        </h1>
        <p>We're looking to hire new people</p>
      </div>

      <div className="currently_content">
        <div className="currenlty_wrappper">
          {currentlyData.map((data, i) => (
            <div key={i} className="currrent_details">
              <div>
                <h3>{data.title}</h3>
                <div className="location">
                  <div className="location_box">
                    <p className="currently_icons">{data.locationIcon}</p>
                    <span className="current_desc">{data.locaton}</span>
                  </div>
                  <div className="time_box">
                    <p className="currently_icons">{data.timeIcon}</p>
                    <span className="current_desc">{data.time}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carrenltly_roles">
        <h6>Looking for a different role?</h6>
        <p>
          Send us an email and let’s talk more. StartAI features that will help
          your company scale faster than any other product on the market
        </p>
      </div>
    </div>
  );
}

export default Currently;
