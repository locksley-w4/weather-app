import React from "react";
import cl from "./MyButton.module.css";

const MyButton = (props) => {
  return (
    <button type="text" className={cl.myButton} {...props}>
      {props.children}
    </button>
  );
};

export default MyButton;
