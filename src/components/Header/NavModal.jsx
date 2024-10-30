import React from "react";
import HamBurgerCloseIcon from "../../assets/svgIcon/HamBurgerCloseIcon";

const NavModal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-start transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } bg-black bg-opacity-50`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full h-full max-w-full  p-4  transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <HamBurgerCloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

export default NavModal;
