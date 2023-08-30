import React from "react";
import Style from "./modal.module.css";

const Modal = ({ handleOk, handleCancel, message }) => {
  return (
    <div className={Style.container}>
      <div className={Style.containerAlert}>
        <h1>{message}</h1>
        <button onClick={() => handleOk()}>Ok</button>
        <button onClick={() => handleCancel()}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;