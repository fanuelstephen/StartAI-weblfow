import React from "react";

import { TeamMemberCardDetails } from "../../startAIData/Data";

function TeamMember() {
  return (
    <div className="team_members">
      <div className="team_members-heading">
        <h1>
          The <strong>dream team</strong>
        </h1>
        <p>
          We have spent years scaling start-ups, building out digital
          experiences and working at big tech – including Google, Amazon,
          Fitbit, D2L, Typeform, Lazer, and Redbull.
        </p>
      </div>
      <div className="team_members-cards">
        <div className="team_members-cards-details">
          {TeamMemberCardDetails.map((data, index) => (
            <div className="team_members-card" key={index}>
              <div className="team_members-content">
                <img src={data.img} alt="img" />
                <h5>{data.name}</h5>
                <p>{data.proffesional}</p>
              </div>
              <div className="social_Media">
                <p>{data.facebook}</p>
                <p>{data.twitter}</p>
                <p>{data.instagram}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
