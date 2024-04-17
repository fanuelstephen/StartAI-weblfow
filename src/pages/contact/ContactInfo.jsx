import React from "react";
import { contactData } from "../../startAIData/Data";

function ContactInfo() {
  return (
    <div className="contactInfo_container">
      <div className="contactInfo_content">
        <h1>
          <strong>Send</strong> us a message
        </h1>
        <p>We’re here to help you anytime 24/7.</p>
        <div className="contant_info-details">
          {contactData.map((item, index) => (
            <div className="contant_info-details-desc">
              <img src={item.img} alt="img" />
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="form">
        <form action="#">
          <div className="form_details">
            <div className="form_field">
              <div className="info">
                <label htmlFor="firsName">First name</label>
                <input type="text" name="name" placeholder="Your fist name" />
              </div>

              <div className="info">
                <label htmlFor="firsName">Last name</label>
                <input type="text" name="name" placeholder="Your last name" />
              </div>
            </div>

            <div className="form_field">
              <div className="info">
                <label htmlFor="firsName">Work email</label>
                <input type="text" name="name" placeholder="Your work email" />
              </div>

              <div className="info">
                <label htmlFor="firsName">Organization name</label>
                <input type="text" name="name" placeholder="Your work email" />
              </div>
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

export default ContactInfo;
