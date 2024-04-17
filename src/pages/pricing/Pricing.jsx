import React from "react";
import FrequentlyAQ from "./FrequentlyAQ";
import ComparePlans from "./ComparePlans";
import PricingDetails from "./PricingDetails";

function Pricing() {
  return (
    <div className="pricing_layout">
      <PricingDetails />
      <ComparePlans />
      <FrequentlyAQ />
    </div>
  );
}

export default Pricing;
