import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ children }) => {
  return (
    <Link
      to={`/${children.toLowerCase().replace(/\s+/g, "")}`}
      className="hover:cursor-pointer hover:text-black transition-all hover:text-xl w-28 text-center"
    >
      {children}
    </Link>
  );
};

export default ListItem;
