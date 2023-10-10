import { useState } from "react";
import "./App.css";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import Demo from "./components/demo/Demo";
import Integrate from "./components/integrate/Integrate";
import Minimize from "./components/minimize/Minimize";
import Business from "./components/business/Business";
import Client from "./components/client/Client";
import Resources from "./components/resources/Resources";


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
      <Demo />
      <Integrate />
      <Minimize />
      <Business />
      <Client />
      <Resources/>
    </div>
  );
}
export default App;