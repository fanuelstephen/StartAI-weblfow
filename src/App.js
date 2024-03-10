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
import Support from "./components/support/Support";
import Footer from "./components/footer/Footer";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    console.log("clicked");
    setOpenMenu(!openMenu);
  };
  return (
    <div className="container">
      <div className="hero_section">
        <Header openMenu={openMenu} handleMenu={handleMenu} />
        <Home />
      </div>
      <div>
        <Demo />
        <Integrate />
        <Minimize />
        <Business />
        <Client />
        <Resources />
        <Support />
        <Footer />
      </div>
    </div>
  );
}
export default App;
