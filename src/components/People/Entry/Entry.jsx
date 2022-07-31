import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PeopleContext } from "../../../context/peopleContext";
import TableButton from "../../utils/TableButton";

const Entry = ({ name, date, mail, id }) => {
  const { deletePerson, handleEdit } = useContext(PeopleContext);

  const navigate = useNavigate();

  const handleEditClick = () => {
    handleEdit(id, name, date, mail);
    navigate("/addperson");
  };

  return (
    <tr className="text-center odd:bg-violet-800 even:bg-violet-600">
      <td className="h-20 w-1/4">{name}</td>
      <td className="h-10 w-1/4">{date}</td>
      <td className="h-20 w-1/4">{mail}</td>
      <td>
        <TableButton action={handleEditClick}>Edit</TableButton>
        <TableButton action={() => deletePerson(id)}>Remove</TableButton>
      </td>
    </tr>
  );
};

export default Entry;
