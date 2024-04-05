import React from "react";

function ComparePlans() {
  return (
    <div className="CPS_container">
      <div>
        <div className="CPS_heading">
          <div>
            <h2>
              <strong>Compare</strong> all plans
            </h2>
          </div>
          <p>Learn more about each plan</p>
        </div>

        <div className="CPS_eachPlan">
          <div className="basic">
            <p className="basic_heading">Basic</p>
            <p className="basic_amount">Free</p>
            <p className="basic_discription">Good for small startups</p>
            <button className="Basic_btn">Get started free</button>
          </div>

          <div className="efficient">
            <p className="efficient_heading">Efficient</p>
            <p className="efficient_amount">
              $15<span>/mo</span>
            </p>
            <p className="efficient_discription">Good for small startups</p>
            <button className="efficient_btn">Get efficient plan</button>
          </div>

          <div className="team">
            <p className="team_heading">Team</p>
            <p className="team_amount">
              $25<span>/mo</span>
            </p>
            <p className="team_discription">Good for small startups</p>
            <button className="team_btn">Get team plan</button>
          </div>
        </div>
      </div>

      {/* core feature */}
      <div className="core_feature-container">
        <div className="CF_heading">
          <h3>Core Feature</h3>
          <div className="CF_content">
            <div className="pricing_feature">No of jobs</div>
            <div className="pricing_row">
              <div>10</div>
            </div>
            <div className="pricing_row">
              <div>25</div>
            </div>
            <div className="pricing_row">
              <div>Unlimited</div>
            </div>
          </div>

          <div className="CF_content">
            <div className="pricing_feature">Active contracts</div>
            <div className="pricing_row">
              <div>❌</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
          </div>

          <div className="CF_content">
            <div className="pricing_feature">Parallel conversations</div>
            <div className="pricing_row">
              <div>❌</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
          </div>
        </div>

        {/* email */}
        <div className="CF_heading">
          <h3>Email</h3>
          <div className="CF_content">
            <div className="pricing_feature">Predictive AI runs</div>
            <div className="pricing_row">
              <div>10</div>
            </div>
            <div className="pricing_row">
              <div>25</div>
            </div>
            <div className="pricing_row">
              <div>Unlimited</div>
            </div>
          </div>

          <div className="CF_content">
            <div className="pricing_feature">Shared group members</div>
            <div className="pricing_row">
              <div>❌</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
          </div>

          <div className="CF_content">
            <div className="pricing_feature">Automatic logs</div>
            <div className="pricing_row">
              <div>❌</div>
            </div>
            <div className="pricing_row">
              <div>❌</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
          </div>

          <div className="CF_content">
            <div className="pricing_feature">AI salary negotiation</div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
          </div>
        </div>

        {/* reporting */}
        <div className="CF_heading">
          <h3>Reporting</h3>
          <div className="CF_content">
            <div className="pricing_feature">No. of custom reports</div>
            <div className="pricing_row">
              <div>10</div>
            </div>
            <div className="pricing_row">
              <div>25</div>
            </div>
            <div className="pricing_row">
              <div>Unlimited</div>
            </div>
          </div>

          <div className="CF_content">
            <div className="pricing_feature">Active contracts</div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
            <div className="pricing_row">
              <div>✅</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComparePlans;
