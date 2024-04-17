import React from "react";
import SpendLess from "./SpendLess";
import Support from "../home/Support.jsx";
import FrequenltyAQ from "../pricing/FrequentlyAQ.jsx";
import UniqueFeature from "./UniqueFeature.jsx";
import Marquee from "react-fast-marquee";

function BookDemo() {
  return (
    <div>
      <SpendLess />
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
      <UniqueFeature />
      <FrequenltyAQ />
      <Support />
    </div>
  );
}

export default BookDemo;
