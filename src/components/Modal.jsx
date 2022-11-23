import React from "react";
import "./modal.css";

const Modal = ({ selectedImg, modal, setModal }) => {
  const handleClick = (event) => {
    if (event.target.classList.contains("modal")) {
      setModal((prevValue) => !prevValue);
    }
  };

  return (
    <div className={modal ? "modal" : ""} onClick={handleClick}>
      {modal && <img src={selectedImg} alt="pic" />}
    </div>
  );
};

export default Modal;
