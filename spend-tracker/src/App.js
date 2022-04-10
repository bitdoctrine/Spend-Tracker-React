import React from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal((prev) => !prev);
  }

  return (
      <div className="App">
        <header className="App-header">
          <Header text="Spend Tracker" />
        </header>
        <Link className="link" to="/previous">
          <Button text="Previous" />
        </Link>
        <Button text="Yesterday" />
        <Button text="Today So Far" />
        <Button text="Add" onClick={toggleModal} />
        {modal ? <Modal cancel={toggleModal} /> : null}
      </div>
  );
}

export default App;
