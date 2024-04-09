import React, { useState } from "react";
import { cardData } from "../../startAIData/Data";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function PricingDetails() {
  const [selectedButton, setSelectedButton] = useState("monthly");

  const handleActiveButton = (buttonType) => {
    setSelectedButton(buttonType);
  };
  return (
    <div className="pd_container">
      <div className="pd_heading">
        <h2 className="pd-title">
          A <strong>perfect</strong> plan for every team
        </h2>
        <p>StartAI features that will help your company scale faster</p>
      </div>

      <div className="pd_card">
        <div className="pd_card-heading">
          <button
            className={`month_btn  ${
              selectedButton === "monthly" ? "active_btn" : ""
            }`}
            onClick={() => handleActiveButton("monthly")}
          >
            Monthly
          </button>
          <button
            className={`Year-btn  ${
              selectedButton === "yearly" ? "active_btn" : ""
            }`}
            onClick={() => handleActiveButton("yearly")}
          >
            Yearly
          </button>
        </div>
        <div className="card_content">
          {cardData.map((data, i) => (
            <div className="card" key={i}>
              <div>
                <div className="card_heading">
                  <img src={data.img} alt="base-img" className="card_img" />
                  <p className="card_titile">{data.title}</p>
                </div>
                <h3 className="card_description-1">
                  {selectedButton === "monthly"
                    ?  data.monthlyPrice
                    : data.yearlyPrice}
                </h3>
              </div>
              <button className="card_btn">{data.btn}</button>
              <div>
                <p className="card_description-2">{data.desc}</p>
                <div className="card_list">
                  {data.lists.map((list, j) => (
                    <ul key={j} className="list">
                      <li className="listItem">
                        <IoCheckmarkCircleSharp className="list_icon" />
                        {list}
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PricingDetails;
