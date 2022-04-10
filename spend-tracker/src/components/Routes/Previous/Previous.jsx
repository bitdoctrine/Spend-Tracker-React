import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Previous.css";


function Previous(props) {

  const [records, setRecords] = useState([]);

  useEffect( () => {
    fetchRecords();
  }, []);


  const fetchRecords = async() => {
    const data = await fetch('/previous');
    const items = await data.json();
    setRecords(items);
    console.log(records)
  }

  


  return (
    <>
    <div className="main">
      <header className="App-header">
        <Header  text="Spend Tracker"/>
        {records.map(record => <div>{record.price}</div>)}
      </header>
      </div>
    </>
  );
}
export default Previous;
