import React from "react";

const TableButton = ({ children, action }) => {
  return (
    <button
      className="px-4 py-2 rounded-full bg-violet-700 mx-2 hover:cursor-pointer hover:bg-violet-900 active:ring-2 ring-violet-900 text-center transition-all w-28 my-2"
      onClick={action}
    >
      {children}
    </button>
  );
};

export default TableButton;
