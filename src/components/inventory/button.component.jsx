import React from "react";

const Button = props => {
  const { onSelect, buttonTitle, checked } = props;

  const handleClick = () => {
    onSelect();
  };

  return (
    <button
      className="btn btn-outline-secondary text-uppercase mx-1"
      onClick={() => handleClick()}
    >
      {buttonTitle}
    </button>
  );
};

export default Button;
