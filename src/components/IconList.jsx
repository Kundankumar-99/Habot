import React from "react";
import CorrectIcon from "../assets/svgIcon/CorrectIcon";

export default function Iconlist({ text }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="flex items-flex-start justify-centergap-4 w-full">
        <span className="w-6 mt-[5px] ">
          <CorrectIcon/>
        </span>{" "}
        {text}{" "}
      </p>
    </div>
  );
}
