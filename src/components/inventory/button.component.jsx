import React from "react";

const Button = props => {
  return (
    <button className="btn btn-outline-secondary text-uppercase mx-1">
      {props.buttonTitle}
    </button>
  );
};

export default Button;
