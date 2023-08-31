import React from "react";
import Style from "./modal.module.css";

const Modal = ({ handleOk, message }) => {
  return (
    <div className={Style.modalOverlay}>
      <div className={Style.modalContent}>
        <img src="https://www.freeiconspng.com/thumbs/error-icon/error-icon-4.png" alt="iconError">
        </img>
        <h2 className={Style.modalTitle}>Error</h2>
        <p className={Style.modalMessage}>{message}</p>
        <button className={Style.modalButton} onClick={() => handleOk()}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;