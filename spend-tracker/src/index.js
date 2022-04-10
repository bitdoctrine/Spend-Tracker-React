import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Previous from "./components/Routes/Previous/Previous";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="previous" element={<Previous />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
