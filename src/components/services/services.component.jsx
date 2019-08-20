import React from "react";
import "./services.styles.css";
import SectionTitle from "../section-title/section-title.component";
import ServiceItem from "./service-item.component";

const Services = () => {
  return (
    <div className="pt-5" id="services-container">
      <div className="container">
        <SectionTitle title1="Our" title2="Services" />
      </div>
      <section id="services" className="services d-flex align-items-center">
        <div className="video-container">
          <video className="video-item" controls autoPlay loop muted>
            <source src="video/videoBcg.mp4" type="video/mp4" />
            Your browser does not support video tag
          </video>
        </div>

        <div className="video-overlay" />

        <div className="container">
          <div className="row my-3">
            <ServiceItem serviceTitle="vehicle" serviceDesc="repair">
              <i className="fas fa-car-battery" />
            </ServiceItem>

            <ServiceItem serviceTitle="battery" serviceDesc="replecement">
              <i className="fas fa-car-crash" />
            </ServiceItem>

            <ServiceItem serviceTitle="roadside" serviceDesc="assistance">
              <i className="fas fa-cogs" />
            </ServiceItem>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
