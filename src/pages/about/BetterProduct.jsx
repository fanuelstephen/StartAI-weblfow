import React from "react";
import Marquee from "react-fast-marquee";
import { BetterPeoductData } from "../../startAIData/Data";

function BetterProduct() {
  return (
    <div className="BetterProduct_container">
      <div className="BetterPofuct_content">
        <div className="demo_logos">
          <Marquee>
            <p>Snowflake</p>
            <p>DEVWISE</p>
            <p>Invert</p>
            <p>ProLine</p>
            <p>Hitech</p>
            <p>FLash</p>
          </Marquee>
        </div>

        <div className="BetterPofuct_heading">
          <div>
            <h1>
              We build AI tools for
              <strong> better products</strong>
            </h1>
          </div>
          <p>AI is eating the world and simplify things as much as possible.</p>
        </div>

        <div className="company_features">
          {BetterPeoductData.map((data, i) => (
            <div className="company_feature" key={i}>
              <div className="company_feature-content">
                <h2>{data.amount}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BetterProduct;
