import React from "react";

const InputText = ({ children, action, value }) => {
  return (
    <input
      className="px-4 py-2 text-white bg-violet-600 rounded-md my-4"
      type="text"
      placeholder={children}
      onChange={(e) => action(e)}
      value={value || ""}
    />
  );
};

export default InputText;
