import React, { useState } from "react";
import { fqaData } from "../../startAIData/Data";

function FrequentlyAQ() {
  const [selected, setSelected] = useState(null);

  const handleSelected = (i) => {
    setSelected(selected === i ? null : i);
  };

  return (
    <div className="FQA_container">
      <p className="FQA_heading">
        <span>Frequently</span> asked questions
      </p>
      <div className="FQA_content">
        {fqaData.map((data, i) => (
          <div onClick={() => handleSelected(i)} key={i}>
            <div className="FQA_question">
              <p>{data.question}</p>
              <span>{selected === i ? " - " : " + "}</span>
            </div>
            <div className="content-fqa">
              <p className={selected === i ? "showContent" : "hideContent"}>
                {data.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FrequentlyAQ;
