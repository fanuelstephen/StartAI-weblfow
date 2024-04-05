import React from "react";
import { ProductData } from "../../startAIData/Data";

function UniqueProduct() {
  return (
    <div className="product_contantainer">
      <div className="product-content">
        <div className="product-heading">
          <p className="product_title">
            Our <b>unique </b> product features, your win
          </p>
          <p className="product_subtitle">
            Scale faster and improve customer loyalty. No more back & forth.
          </p>
          <div className="product-btn-box">
            <button className="product-btn">Get started free</button>
          </div>
        </div>
        <div className="product-img">
          <img src={ProductData[0].productIMg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default UniqueProduct;
