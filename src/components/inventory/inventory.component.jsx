import React from "react";
import "./inventory.styles.css";
import SectionTitle from "../section-title/section-title.component";
import InventoryItem from "./inventory-item.component";
import Button from "./button.component";

const Inventory = props => {
  return (
    <section className="inventory py-5" id="inventory">
      <div className="container">
        <SectionTitle title1="Our" title2="Inventory" />

        <div className="row mb-5">
          <div className="col-10 mx-auto col-md-12 d-flex justify-content-end">
            <Button buttonTitle="All" />
            <Button buttonTitle="American" />
            <Button buttonTitle="German" />
          </div>
        </div>

        <div className="row">
          {props.inventoryCars.map((car, index) => (
            <InventoryItem key={index} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
