import React from "react";
import { CardData } from "../../startAIData/Data";

function Analytics() {
  return (
    <div className="analytics_container">
      <h1 className="analytics_heading">
        All your resources in <strong>one place</strong>
      </h1>
      <div className="analytic_card">
        <div className="analytic_card-img">
          <img src={CardData[1].cardimg} alt="img" />
        </div>
        <div className="analytic_body">
          <button className="analytic_btn">Analytics</button>
          <div className="analytic_card-content">
            <p className="analytic_card-content-title">
              What will website be like in 100 years?
            </p>
            <p>Dolerem laborum vero laudantim perpiciants iste</p>

            <div className="analytic_card-content-details">
              <img src={CardData[2].img} alt="" />
              <div>
                <p>{CardData[1].authorName}</p>
                <p>{CardData[1].date}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
