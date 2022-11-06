import styled from "styled-components/macro";
import GlobalStyles, { QUERIES } from "../../constants";
// import DesktopHeader from '../DesktopHeader';
import Hero from "../Hero/Hero";
import LearnMoreCards from "../LearnMoreCards/LearnMoreCards";
import CategoryCards from "../CategoryCards/CategoryCards";




const Wrapper = styled.div`
  padding: 0 24px;
  max-width: 1440px;
  width: 100%;
`;




function App() {
  return (
    <Wrapper>
      <Hero />
     <LearnMoreCards/>
     <CategoryCards />
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
