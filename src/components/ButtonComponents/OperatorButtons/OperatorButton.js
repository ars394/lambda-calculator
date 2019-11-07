import React from "react";

const OperatorButton = props => {
  console.log("OperatorButton props", props)
  return (
    <button className ="operator_button" onClick={()=> props.button.value}>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    {props.button.value}
    </button>
  );
};

export default OperatorButton;