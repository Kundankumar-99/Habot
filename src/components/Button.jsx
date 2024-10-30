import React from "react";

export default function Button({ children, onClick, className, type = 'button' }) {
  return (
    <div>
      <button
      type={type}
      onClick={onClick}
      className={`px-8 py-2 rounded-md font-[500] text-[15px] ${className}`}
    >
      {children}
    </button>
    </div>
  );
}
