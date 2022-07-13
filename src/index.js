import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import Homepage from "./pages/HomePages";
import "flowbite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);
