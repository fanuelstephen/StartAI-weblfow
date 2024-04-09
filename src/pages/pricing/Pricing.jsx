import React from "react";
import FrequentlyAQ from "./FrequentlyAQ";
import ComparePlans from "./ComparePlans";
import PricingDetails from "./PricingDetails";

function Pricing() {
  return (
    <div>
      <PricingDetails />
      <ComparePlans />
      <FrequentlyAQ />
    </div>
  );
}

export default Pricing;
