import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import "./Previous.css";

function Previous(props) {
  useEffect(() => {
    fetchRecords();
  }, []);

  const [records, setRecords] = useState([]);

  const fetchRecords = async () => {
    const data = await fetch("/previous");
    const items = await data.json();
    setRecords(items);
    console.log(records);
  };

  return (
    <div className="main">
      <header className="App-header">
        <Header text="Spend Tracker" />
        {records.map((record) => (
          <div className="entry">
            <h1>{record.Date}</h1>
            <h1>{record.name}</h1>
            <h1>{record.price}</h1>
          </div>
        ))}
      </header>
    </div>
  );
}
export default Previous;
