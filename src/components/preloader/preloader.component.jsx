import React, { Component } from "react";
import "./preloader.styles.css";

export default class Preload extends Component {
  componentDidMount() {
    window.addEventListener("load", () =>
      document.querySelector(".preloader").classList.add("hidePreloader")
    );
  }
  render() {
    return (
      <div className="preloader d-flex justify-content-center align-items-center">
        <img src="img/preloader.gif" alt="preloader" />
      </div>
    );
  }
}
