import React from "react";

function SpendLess() {
  return (
    <div className="spnedless_container">
      <div className="spendless_content">
        <h1>
          <strong>Spend less</strong> on better candidates
        </h1>
        <div className="spendless_desc">
          <div className="spendless_details">
            ✅ <h3>Detailed analytics</h3>
          </div>
          <p>
            See the full picture of all your tickets in one place and take
            action immediately.
          </p>
        </div>

        <div className="spendless_desc">
          <div className="spendless_details">
            ✅ <h3>Clients overview</h3>
          </div>
          <p>
            Track and manage and manage all support very easy without back and
            forth.
          </p>
        </div>

        <div className="spendless_desc">
          <div className="spendless_details">
            ✅ <h3>Requests sources</h3>
          </div>
          <p>
            Discover where all your client requests are coming from and take
            action into the right direction.
          </p>
        </div>
      </div>

      <div className="form">
        <form action="#">
          <div className="form_details">
            <div className="info">
              <label htmlFor="firsName">First name</label>
              <input type="text" name="name" placeholder="Your fist name" />
            </div>

            <div className="info">
              <label htmlFor="firsName">Last name</label>
              <input type="text" name="name" placeholder="Your last name" />
            </div>

            <div className="info">
              <label htmlFor="firsName">Work email</label>
              <input type="text" name="name" placeholder="Your work email" />
            </div>

            <div className="info">
              <label htmlFor="firsName">Organization name</label>
              <input type="text" name="name" placeholder="Your work email" />
            </div>

            <div className="info">
              <label htmlFor="firsName">How can we help you</label>
              <textarea
                name="note"
                className="text_area"
                placeholder="Example text"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button className="form_btn">Submit form</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SpendLess;
