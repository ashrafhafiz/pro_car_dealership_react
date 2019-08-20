import React from "react";
import "./service-item.styles.css";

const ServiceItem = props => {
  const { serviceTitle, serviceDesc, children } = props;
  return (
    <div className="col-8 mx-auto col-lg-6 col-md-4 my-3">
      <div className="service py-5 pl-4">
        <span className="service-icon">{children}</span>
        <h6 className="text-capitalize service-title">{serviceTitle}</h6>
        <h5 className="text-uppercase font-weight-bold">{serviceDesc}</h5>
      </div>
    </div>
  );
};

export default ServiceItem;
