import { useState, useEffect } from "react";
import styled from "styled-components/macro";
import GlobalStyles from "../../constants";
import Hero from "../Hero/Hero";
import LearnMoreCards from "../LearnMoreCards/LearnMoreCards";
import CategoryCards from "../CategoryCards/CategoryCards";
import Footer from "../Footer/Footer";
import ImageGallery from "../ImageGallery/ImageGallery";
import Testimonials from "../Testimonials/Testimonials";
import Modal from "../Modal/Modal";

function getWindowSize() {
  const { innerWidth } = window;
  return { innerWidth };
}

function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isOpen, setIsOpen] = useState(false);

  function changeIsOpenToFalse() {
    return windowSize.innerWidth >= 1100 ? setIsOpen(false) : null;
  }

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize, changeIsOpenToFalse);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Hero windowSize={windowSize} setIsOpen={setIsOpen} />
      <LearnMoreCards />
      <CategoryCards />
      <Testimonials />
      <ImageGallery />
      <Footer />
      {isOpen && windowSize.innerWidth <= 1100 && <Modal />}
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  padding: 0 24px;
  max-width: 1440px;
  width: 100%;
  position: relative;
`;
