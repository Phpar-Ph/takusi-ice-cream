import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Flavor from "./pages/Flavor";
import Price from "./pages/Price";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Flavor />
      {/* <Price /> */}
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
