import './App.css';
import ToggleSwitch from "./lib/components/ToggleSwitch";
import {useEffect, useState} from "react";

function App() {
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    console.log(checked)
  }, [checked])

  return (
    <div className="App" style={{display: "flex", alignItems: "center"}}>
      {"CZ"}
      <ToggleSwitch checked={checked} setChecked={setChecked} switchImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/1024px-Circle-icons-image.svg.png"}  />
      {"EN"}
    </div>
  );
}

export default App;
