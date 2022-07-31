import React from "react";
import Button from "../utils/Button";

const Home = () => {
  return (
    <div className="flex flex-col justify-start bg-violet-500 grow">
      <h1 className="text-7xl text-bold text-center mt-32">
        Welcome to the People API!
      </h1>
      <div className="flex flex-row justify-center mt-6">
        <Button url="/people">Meet the people</Button>
        <Button url="/addPerson">Add a person</Button>
      </div>
    </div>
  );
};

export default Home;
