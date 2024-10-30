import React from "react";

export default function IconBox({ IconText , backgroundColor, children }) {
  return (
    <div className={`flex flex-col gap-4 p-4 font-medium text-[20px] justify-center items-center w-[300px] h-[200px] ${backgroundColor}`}>
      {children}
      <p className="text-center ">{IconText}</p>
    </div>
  );
}