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
    <div className="bg-primary w-full overflow-hidden">
      <div className="sm:px-32 px-6 pt-8 flex justify-center items-center">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>

      <div className="bg-primary sm:px-24 px-5 flex justify-center items-start">
          <div className="xl:max-w-[1280px] w-full">
            <Hero />
            <About />
          </div>
      </div>
    </div>
  );
};

export default App;
