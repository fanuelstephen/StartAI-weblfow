import React from "react";

const Card = ({ ResourcesCard }) => {
  return (
    <div className="box">
      <img src={ResourcesCard.cardimg} alt="" className="cardImg" />
      <div className="box_content">
        <div>
          <span className="R-btn">{ResourcesCard.type}</span>
          <h1>{ResourcesCard.title}</h1>
          <p>{ResourcesCard.desc}</p>
        </div>

        <div className="author">
          <img src={ResourcesCard.img} alt="" />
          <div className="author-content">
            <span>{ResourcesCard.authorName}</span>
            <div className="date">
              <div>{ResourcesCard.date}</div>
              <strong> . </strong>
              <div className="real_time">{ResourcesCard.realTime}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
