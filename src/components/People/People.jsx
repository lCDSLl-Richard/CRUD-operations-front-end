import React, { useContext } from "react";
import { PeopleContext } from "../../context/peopleContext";
import Entry from "./Entry/Entry";

const People = () => {
  const { data } = useContext(PeopleContext);

  return (
    <div className="flex flex-col justify-start bg-violet-500 grow">
      <h1 className="text-7xl text-bold text-center my-12">The People</h1>
      <table className="w-4/5 self-center text-xl">
        <tbody>
          <tr className="text-2xl h-20">
            <th>Name</th>
            <th>Birthday</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
          {data.map((person) => {
            return (
              <Entry
                key={person._id}
                id={person._id}
                name={person.name}
                date={person.date.slice(0, 10)}
                mail={person.mail}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default People;
