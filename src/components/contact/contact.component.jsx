import React from "react";
import "./contact.styles.css";

const Contact = () => {
  return (
    <section className="contact py-5" id="contact">
      <div className="container">
        <div className="row">
          <div className="col-8 mx-auto col-md-6">
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control contact-input p-3"
                  placeholder="Enter Email"
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-secondary btn-block contact-btn"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
