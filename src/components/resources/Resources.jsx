import React from "react";
import { CardData } from "../startAIData/Data";
import Card from "../card/Card";

const Resources = () => {
  return (
    <div className="section">
      <div className="resourses-heading">
        <span>
          <strong>Useful</strong> Resources
        </span>
        <p>
          Discover our useful resources and read articles on different
          categories
        </p>
      </div>

      <div className="card_box">
        {CardData.map((value, i) =>(
          <div key={i}>
            <Card ResourcesCard={value} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
