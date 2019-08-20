import React, { Component } from "react";
import "./App.css";

import Preloader from "./components/preloader/preloader.component";
import Navbar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";
import Skills from "./components/skills/skills.component";
import Inventory from "./components/inventory/inventory.component";
import Question from "./components/question/question.component";
import Featured from "./components/featured/featured.component";
import Gallery from "./components/gallery/gallery.component";
import Modal from "./components/modal/modal.component";
import Contact from "./contact/contact.component";
import Services from "./components/services/services.component";
import Quotes from "./components/quotes/quotes.component";
import Footer from "./components/footer/footer.component";

import { cars } from "./components/data";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cars: cars
    };
    this.getFeaturedCars = this.getFeaturedCars.bind(this);
    this.getInventoryCars = this.getInventoryCars.bind(this);
  }

  getFeaturedCars = () => {
    const featuredCars = this.state.cars.filter(car => car.special === true);
    return featuredCars;
  };

  getInventoryCars = () => {
    const inventoryCars = this.state.cars;
    return inventoryCars;
  };

  render() {
    console.log(this.state.cars);
    console.log(this.getFeaturedCars());
    return (
      <div className="App">
        <Preloader />
        <Navbar />
        <Header />
        <Skills />
        <Inventory inventoryCars={this.getInventoryCars()} />
        <Question />
        <Featured featuredCars={this.getFeaturedCars()} />
        <Gallery />
        <Modal />
        <Contact />
        <Services />
        <Quotes />
        <Footer />
      </div>
    );
  }
}
