import { useState } from "react";
import "./App.css";

import Home from "./components/home/Home";
import Header from "./components/header/Header";


function App() {
  const [oppenSidebar, setOppenSidebar] = useState(false);

  const opneNavigation = () => {
    setOppenSidebar(!oppenSidebar);
  };
  return (
    <div className="container">
      <div className="hero_section">
        <Header opneNavigation={opneNavigation} oppenSidebar={oppenSidebar}/>
        <Home/>
      </div>
    </div>
  );
}
export default App;