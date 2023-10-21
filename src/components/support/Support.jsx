import React from "react";
import { SupportData } from "../startAIData/Data";

const Support = () => {
  return (
    <div className="section support_section">
      <div className="support_content">
        <span>
          Ready to <strong> save more </strong> on the customer support side?
        </span>
        <p>
          Automate routine tasks and provide fast, accurate responses & reduce
          the need for <br />
          human staff and improve overall efficiency.
        </p>
        <button className="support-btn">{SupportData[0].btnDesc}</button>
      </div>
    </div>
  );
};

export default Support;
