import { Routes, Route } from "react-router-dom";
import AddPerson from "./components/AddPerson/AddPerson";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import People from "./components/People/People";

function App() {
  return (
    <div className="App min-h-screen text-white w-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/people" element={<People />} />
        <Route path="/addperson" element={<AddPerson />} />
      </Routes>
    </div>
  );
}

export default App;
