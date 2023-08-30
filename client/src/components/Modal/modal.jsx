import React from "react";
import Style from "./modal.module.css";

const Modal = ({ handleOk, handleCancel, h1 }) => {
  return (
    <div className={Style.container}>
      <div className={Style.containerAlert}>
        <h1>{h1}</h1>
        <button onClick={() => handleOk()}>ok</button>
        <button onClick={() => handleCancel()}>cancel</button>
      </div>
    </div>

/* <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
<div className="bg-white p-6 rounded-lg shadow-md">
  <h3 className="text-xl font-semibold mb-2">
    Confirmar Eliminación
  </h3>
  <p className="text-md text-gray-600">
    ¿Estás seguro de borrar este servicio? Esta acción es
    irreversible.
  </p>
  <div className="mt-4 flex justify-end">
    <Button
      color="gray"
      size="sm"
      onClick={() => setShowDeleteConfirmation(false)}
    >
      Cancelar
    </Button>
    <Button
      color="red"
      size="sm"
      onClick={() => handleDeleteService(_id)}
      className="ml-2"
    >
      Eliminar
    </Button>
  </div>
</div>
</div> */
  );
};

export default Modal;