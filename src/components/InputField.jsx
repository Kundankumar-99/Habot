import React from "react";

export default function InputField({
  placeholder,
  icon: Icon,
  type = "text",
  className,
}) {
  return (
    <div className="relative min-w-[400px]">
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-12 py-4 font-light rounded-md text-black focus:text-black ${className}`}
      />
      {Icon && (
        <Icon className="absolute  top-1/2 transform -translate-y-1/2" />
      )}
    </div>
  );
}
