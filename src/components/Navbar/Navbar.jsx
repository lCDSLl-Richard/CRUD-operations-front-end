import React from "react";
import ListItem from "./ListItem/ListItem";

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center w-full bg-violet-600 h-20">
      <ul className="flex flex-row w-full justify-evenly items-center text-lg">
        <ListItem>People</ListItem>
        <ListItem>Home</ListItem>
        <ListItem>Add Person</ListItem>
      </ul>
    </nav>
  );
};

export default Navbar;
