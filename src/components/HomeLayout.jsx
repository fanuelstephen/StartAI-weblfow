import React from "react";
import Demo from "../pages/home/Demo";
import Home from "../pages/home/Home";
import Minimize from "../pages/home/Minimize";
import Business from "../pages/home/Business";
import Client from "../pages/home/Client";
import Integrate from "../pages/home/Integrate";
import Support from "../pages/home/Support";
import Resources from "../pages/home/Resources";

function HomeLayout() {
  return (
    <div>
      <Home />
      <Demo />
      <Minimize />
      <Business />
      <Client />
      <Integrate />
      <Support />
      <Resources />
    </div>
  );
}

export default HomeLayout;
