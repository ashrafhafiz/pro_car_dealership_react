import React from "react";
import "./modal.styles.css";

const Modal = () => {
  return (
    <div className="container">
      <div className="row showcase align-items-center">
        <div className="col-10 mx-auto col-md-6 text-right">
          <span className="showcase-close">
            <i className="fas fa-window-close" />
          </span>
          <img
            src="img/car-default.jpeg"
            alt="modal img"
            className="img-fluid showcase-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
