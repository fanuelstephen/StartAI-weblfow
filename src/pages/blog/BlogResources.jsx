import React, { useState } from "react";
import { CardData } from "../../startAIData/Data";
import Card from "../home/Card";
import { useSearchParams } from "react-router-dom";

function BlogResources() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("All");

  const handleActiveFilter = (type) => {
    setSearchParams(type === "All" ? {} : { type });
    setActiveFilter(type);
  };
  const typeFilter = searchParams.get("type");

  const displayFilterResources = typeFilter
    ? CardData.filter((data) => data.type === typeFilter)
    : CardData;

  return (
    <div className="blogRecources_container ">
      <div className="blog_buttons">
        <button
          className={`blog_btn ${
            activeFilter === "All" ? "blog_btn_active" : ""
          }`}
          onClick={() => handleActiveFilter("All")}
        >
          All
        </button>
        <button
          className={`blog_btn ${
            activeFilter === "Resources" ? "blog_btn_active" : ""
          }`}
          onClick={() => handleActiveFilter("Resources")}
        >
          Resources
        </button>
        <button
          className={`blog_btn ${
            activeFilter === "Analytics" ? "blog_btn_active" : ""
          }`}
          onClick={() => handleActiveFilter("Analytics")}
        >
          Analytics
        </button>
        <button
          className={`blog_btn ${
            activeFilter === "Marketing" ? "blog_btn_active" : ""
          }`}
          onClick={() => handleActiveFilter("Marketing")}
        >
          Marketing
        </button>
        <button
          className={`blog_btn ${
            activeFilter === "Business" ? "blog_btn_active" : ""
          }`}
          onClick={() => handleActiveFilter("Business")}
        >
          Business
        </button>
      </div>
      <div className="card_box">
        {displayFilterResources.map((value, i) => (
          <div key={i}>
            <Card ResourcesCard={value} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogResources;
