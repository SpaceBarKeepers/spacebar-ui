import './App.css';
import ToggleSwitch from "./lib/components/ToggleSwitch";
import {useEffect, useState} from "react";

function App() {
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    console.log(checked)
  }, [checked])

  return (
    <div className="App" style={{display: "flex"}}>
      {"ahoj"}
      <ToggleSwitch checked={checked} setChecked={setChecked}  />
      {"ahoj"}
    </div>
  );
}

export default App;
