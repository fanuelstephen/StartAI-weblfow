import React from "react";
import DemoFeature from "../feature/DemoFeature";
import Integrate from "../home/Integrate";
import Minimize from "../home/Minimize";
import Business from "../home/Business";
import Client from "../home/Client";
import UniqueProduct from "./UniqueProduct";

function Feature() {
  return (
    <div>
      <UniqueProduct />
      <DemoFeature />
      <Integrate />
      <Minimize />
      <Business />
      <Client />
    </div>
  );
}

export default Feature;
