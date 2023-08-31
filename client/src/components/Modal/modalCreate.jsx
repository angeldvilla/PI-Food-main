import React from "react";
import Style from "./modalCreate.module.css";

const ModalCreate = ({ handleOk, message }) => {
  return (
    <div className={Style.modalOverlay}>
      <div className={Style.modalContent}>
        <img src="https://icons.veryicon.com/png/o/miscellaneous/8atour/success-35.png" alt="iconSuccess">
        </img>
        <h2 className={Style.modalTitle}>Success</h2>
        <p className={Style.modalMessage}>{message}</p>
        <button className={Style.modalButton} onClick={() => handleOk()}>
          Done
        </button>
      </div>
    </div>
  );
};

export default ModalCreate;