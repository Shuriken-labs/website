import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Communities from "./sections/Communities";
import Partners from "./sections/Partners";
import Testimonial from "./sections/Testimonial";
import FirstLight from "./sections/FirstLight";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="bg-primary w-full min-h-screen pt-8">
      <Navbar />
      <Hero />
      <About />
      <Communities />
    </div>
  );
};

export default App;
