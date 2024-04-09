import React from "react";
import WorkSmatter from "./WorkSmatter";
import TeamMember from "./TeamMember";
import Currently from "./Currently";
import Support from "../home/Support";
import BetterProduct from "./BetterProduct";

function About() {
  return (
    <div>
      <WorkSmatter />
      <BetterProduct />
      <TeamMember />
      <Currently />
      <Support />
    </div>
  );
}

export default About;
