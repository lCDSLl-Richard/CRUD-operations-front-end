import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PeopleContext } from "../../context/peopleContext";
import Button from "../utils/Button";
import InputText from "../utils/InputText";
import TableButton from "../utils/TableButton";

const AddPerson = () => {
  const navigate = useNavigate();

  const { form, setForm, handleSubmit, handleCancel, edit } =
    useContext(PeopleContext);

  const handleCancelClick = () => {
    handleCancel();
    navigate("/people");
  };

  const handleNameChange = (e) => {
    setForm({ ...form, name: e.target.value });
  };

  const handleDateChange = (e) => {
    setForm({ ...form, date: e.target.value });
  };

  const handleMailChange = (e) => {
    setForm({ ...form, mail: e.target.value });
  };

  return (
    <div className="flex flex-col justify-start items-center bg-violet-500 grow">
      <h1 className="text-7xl text-bold text-center my-12">
        Add a Person to the list!
      </h1>
      <form className="w-4/5 flex flex-col items-center justify-center min-h-fit">
        <InputText action={handleNameChange} value={form.name}>
          Name
        </InputText>
        <div className="flex flex-col my-4 items-center bg-violet-600 rounded-md">
          <label className="h-10 flex flex-col items-center justify-center">
            Date of birth
          </label>
          <input
            className="bg-violet-700 px-4 py-2 rounded-md h-10"
            type="date"
            onChange={(e) => handleDateChange(e)}
            value={form.date || ""}
          />
        </div>
        <InputText action={handleMailChange} value={form.mail}>
          Mail
        </InputText>
        {edit && <TableButton action={handleCancelClick}>Cancel</TableButton>}
        <TableButton
          action={(e) => {
            handleSubmit(e);
            navigate("/people");
          }}
        >
          Submit
        </TableButton>
      </form>
    </div>
  );
};

export default AddPerson;
