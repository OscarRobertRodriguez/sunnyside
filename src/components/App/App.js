import styled from "styled-components/macro";
import GlobalStyles, { QUERIES } from "../../constants";
import MobileHeader from "../MobileHeader";
// import DesktopHeader from '../DesktopHeader';
import Hero from "../Hero/Hero";

const Wrapper = styled.div`
  padding:  0 24px;            

  height: 100%;


  @media ${QUERIES.tabletAndUp} {

  }
`;



function App() {
  return (
    <Wrapper>
     <Hero />

       <h2>Hello</h2>
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
