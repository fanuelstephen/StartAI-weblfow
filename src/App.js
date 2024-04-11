import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Feature from "./pages/feature/Feature";
import Pricing from "./pages/pricing/Pricing";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";
import BookDemo from "./pages/bookDemo/BookDemo";
import HomeLayout from "./components/HomeLayout";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomeLayout />} />
          <Route path="feature" element={<Feature />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="about-us" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="BookDemo" element={<BookDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
