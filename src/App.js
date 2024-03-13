import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
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
    setOpenMenu(!openMenu);
  };

  return (
    <div className="container">
      <Header openMenu={openMenu} handleMenu={handleMenu} />
      <Home />
      <Demo />
      <Integrate />
      <Minimize />
      <Business />
      <Client />
      <Resources />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
