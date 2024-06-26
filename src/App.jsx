import React from "react";
import TopNavigation from "./components/TopNavigation";
import HeroSection from "./components/HeroSection";
import Frame_1 from "./components/Frame_1";
import Frame_2 from "./components/Frame_2";
import FAQS from "./components/FAQS";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <TopNavigation />
      <HeroSection />
      <Frame_1 />
      <Frame_2 />
      <FAQS />
      <Footer />
    </div>
  );
};

export default App;
