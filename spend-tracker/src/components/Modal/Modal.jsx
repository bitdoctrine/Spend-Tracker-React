import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Modal.css";


const expenditureArray = [];

function Modal(props) {
  const [expenditureObject, setExpenditureObject] = useState({});

  function handleInputChange(event) {
    const { name, value } = event.target;

    setExpenditureObject((previousValue) => {
      return { ...previousValue, [name]: value };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    if (
      expenditureObject.name.length === 0 ||
      expenditureObject.price.length === 0
    ) {
      alert("Fill both Inputs please");
    
    } else {
      const date = new Date();
      const timeStamp = date.toLocaleDateString();
      console.log(timeStamp);
      const expense = {
        name: expenditureObject.name,
        price: expenditureObject.price,
        time: timeStamp
      }
      expenditureArray.push(expense);
      console.log(expense)
      console.log(expenditureArray);
      setExpenditureObject({ name: "", price: "" });
    }



  }

  return (
    <div className="modal">
      <div className="modal-area">
        <form onSubmit={submitHandler}>
          <Button text="X" onClick={props.cancel} />
          <Input
            type="text"
            placeholder="Enter item name"
            onChange={handleInputChange}
            name="name"
            value={expenditureObject.name}
          />
          <Input
            type="number"
            placeholder="How much"
            onChange={handleInputChange}
            name="price"
            value={expenditureObject.price}
          />
          <Button text="+" type="submit" onClick={submitHandler}/>
        </form>
      </div>
    </div>
  );
}

export default Modal;
