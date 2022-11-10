import { useState, useEffect } from "react";
import { Portal } from "react-portal";
import styled from "styled-components/macro";
import GlobalStyles from "../../constants";
// import DesktopHeader from '../DesktopHeader';
import Hero from "../Hero/Hero";
import LearnMoreCards from "../LearnMoreCards/LearnMoreCards";
import CategoryCards from "../CategoryCards/CategoryCards";
import Footer from "../Footer/Footer";
import ImageGallery from "../ImageGallery/ImageGallery";
import Testimonials from "../Testimonials/Testimonials";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Wrapper>
      <Hero windowSize={windowSize} setIsOpen={setIsOpen} />
      <LearnMoreCards />
      <CategoryCards />
      <Testimonials />
      <ImageGallery />
      <Footer />

      <GlobalStyles />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 0 24px;
  max-width: 1440px;
  width: 100%;
`;
