import React from "react";
import "./inventory-item.styles.css";

const InventoryItem = props => {
  // console.log(props);
  const { country, gas, img, make, model, price, trans, type } = props;

  return (
    <div
      className={`col-10 mx-auto my-3 col-md-6 col-lg-4 single-car ${country}`}
    >
      <div className="card car-card">
        <img src={img} className="card-img-top car-img" alt={img} />

        <div className="card-body">
          <div className="car-info d-flex justify-content-between">
            <div className="car-text text-uppercase">
              <h6 className="font-weight-bold">{make}</h6>
              <h6 className="font-weight-bold">{model}</h6>
            </div>
            <h5 className="car-value aligh-self-center py-2 px-3">
              $<span className="car-price">{price}</span>
            </h5>
          </div>
        </div>

        <div className="card-footer text-capitalize d-flex justify-content-between">
          <p>
            <span>
              <i className="fas fa-car" />
            </span>{" "}
            {type}
          </p>
          <p>
            <span>
              <i className="fas fa-cogs" />
            </span>{" "}
            {trans}
          </p>
          <p>
            <span>
              <i className="fas fa-gas-pump" />
            </span>{" "}
            {gas}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
