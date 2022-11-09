import styled from "styled-components/macro";
import GlobalStyles from "../../constants" ;
// import DesktopHeader from '../DesktopHeader';
import Hero from "../Hero/Hero";
import LearnMoreCards from "../LearnMoreCards/LearnMoreCards";
import CategoryCards from "../CategoryCards/CategoryCards";
import Footer from "../Footer/Footer";
import ImageGallery from "../ImageGallery/ImageGallery";

const Wrapper = styled.div`
  padding: 0 24px;
  max-width: 1440px;
  width: 100%;
`;

function App() {
  return (
    <Wrapper>
      <Hero />
      <LearnMoreCards />
      <CategoryCards />
      <ImageGallery />
      <Footer/>
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
