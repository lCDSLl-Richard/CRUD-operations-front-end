import { createContext, useState, useEffect } from "react";
import axios from "axios";

const URL = "https://crud-operations-server-production.up.railway.app/";

export const PeopleContext = createContext();

export const PeopleContextProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const initialState = { name: "", date: "", mail: "" };
  const [form, setForm] = useState(initialState);

  const [edit, setEdit] = useState(false);

  const [editId, setEditId] = useState("");

  useEffect(() => {
    axios.get(`${URL}people`).then((response) => {
      setData(response.data);
    });
  }, [data]);

  const deletePerson = (id) => {
    axios
      .delete(`${URL}deletePerson`, { params: { id } })
      .then(setData(data.filter((entry) => entry._id != id)));
  };

  const handleEdit = (id, name, date, mail) => {
    setEdit(!edit);
    setEditId(id);

    setForm({ name, date, mail });
  };

  const handleCancel = () => {
    setEdit(!edit);
    setForm(initialState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, date, mail } = form;
    if (!name || !mail || !date) return;

    if (!edit) {
      axios.post(`${URL}addPerson`, form).then(setForm(initialState));
    } else {
      const edited = { ...form, id: editId };
      axios.patch(`${URL}editPerson`, edited).then(setForm(initialState));
      setEdit(!edit);
    }
  };

  return (
    <PeopleContext.Provider
      value={{
        edit,
        data,
        setData,
        form,
        setForm,
        handleSubmit,
        handleEdit,
        handleCancel,
        deletePerson,
      }}
    >
      {children}
    </PeopleContext.Provider>
  );
};
