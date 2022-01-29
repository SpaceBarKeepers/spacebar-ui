import './App.css';
import ToggleSwitch from "./lib/components/ToggleSwitch";
import {useEffect, useState} from "react";
import {Avatar} from "./lib";

function App() {
  const [checked, setChecked] = useState(true)

  useEffect(() => {
    console.log(checked)
  }, [checked])

  return (
    <>
    <div className="App" style={{display: "flex", alignItems: "center"}}>
      {"CZ"}
      <ToggleSwitch checked={checked} setChecked={setChecked} switchImage={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/1024px-Circle-icons-image.svg.png"}  />
      {"EN"}
    </div>
    <Avatar variant={"circle"} size={150}><img src={"https://upload.wikimedia.org/wikipedia/commons/2/2d/160316-031_Bridge_near_Tatopani.jpg"} alt={"ahoj"} /></Avatar>
    <Avatar variant={"circle"}><p>Char</p></Avatar>
    <Avatar variant={"circle"}>D</Avatar></>
  );
}

export default App;
