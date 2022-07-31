import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PeopleContextProvider } from "./context/peopleContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PeopleContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PeopleContextProvider>
  </React.StrictMode>
);
