import React from "react";
import { Link } from "react-router-dom";

const Button = ({ url, children }) => {
  return (
    <Link
      to={url}
      className="px-4 py-2 rounded-full bg-violet-700 mx-4 w-40 hover:cursor-pointer hover:bg-violet-900 active:ring-2 ring-violet-900 text-center transition-all shadow-lg shadow-violet-900"
    >
      {children}
    </Link>
  );
};

export default Button;
