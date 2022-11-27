import './App.css';
import BoxComponent from './components/BoxComponent';
import Table from './components/Table'
import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
  <Table data={data}/>
  <BoxComponent  data={data}/>
      </header>
    </div>
  );
}


export default App;
