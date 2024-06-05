import Navbar from "./components/Navbar/Navbar"
import Banner from "./components/Banner/Banner"
import Hero from "./components/Hero/Hero"
import WhyChoose from "./components/WhyChoose/WhyChoose"
import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Popup from "./components/Popup/Popup"
import { useState, useEffect } from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  const [showPopUp, setShowPopUp] = useState(false);

  useEffect(() => {
    if (showPopUp) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [showPopUp]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  } ,[]);

  return (
    <>
      <div className="overflow-x-hidden">
        <Navbar setShowPopUp={setShowPopUp}/>
        <Hero />
        <Banner />
        <WhyChoose />
        <About setShowPopUp={setShowPopUp}/>
        <Footer />
        <Popup showPopUp={showPopUp} setShowPopUp={setShowPopUp}/>
      </div>
    </>
  )
}

export default App
