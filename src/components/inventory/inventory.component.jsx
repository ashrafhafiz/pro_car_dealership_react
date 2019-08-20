import React, { Component } from "react";
import "./inventory.styles.css";
import SectionTitle from "../section-title/section-title.component";
import InventoryItem from "./inventory-item.component";
import Button from "./button.component";

export default class Inventory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInventory: this.props.inventoryCars
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect = filterType => {
    console.log(filterType);
    switch (filterType) {
      case "all":
        this.setState({
          displayInventory: this.props.inventoryCars
        });
        break;
      case "german":
        this.setState({
          displayInventory: this.props.inventoryCars.filter(
            car => car.country === "German"
          )
        });
        break;
      case "american":
        this.setState({
          displayInventory: this.props.inventoryCars.filter(
            car => car.country === "American"
          )
        });
        break;

      default:
        break;
    }
  };

  render() {
    const { displayInventory } = this.state;
    return (
      <section className="inventory py-5" id="inventory">
        <div className="container">
          <SectionTitle title1="Our" title2="Inventory" />

          <div className="row mb-5">
            <div className="col-10 mx-auto col-md-12 d-flex justify-content-end">
              <Button
                buttonTitle="All"
                onSelect={() => this.handleSelect("all")}
              />
              <Button
                buttonTitle="American"
                onSelect={() => this.handleSelect("american")}
              />
              <Button
                buttonTitle="German"
                onSelect={() => this.handleSelect("german")}
              />
            </div>
          </div>

          <div className="row">
            {displayInventory.map((car, index) => (
              <InventoryItem key={index} {...car} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}
