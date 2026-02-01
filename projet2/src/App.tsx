
import FeatureSection from "./composents/FeatureSection";
import Footer from "./composents/Footer";
import Herosection from "./composents/herosection";
import Navbar from "./composents/Navbar"
import Pricing from "./composents/Pricing";
import Testimonials from "./composents/Testimonials";
import Workflow from "./composents/Workflow";

const App = () => {

  return (
    <>
    <Navbar/>
    <div className="max-w-7xl mx-auto pt-20 px-6">
       <Herosection/>
       <FeatureSection/>
      <Workflow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
    </div>
   
    </>
  );
};

export default App
