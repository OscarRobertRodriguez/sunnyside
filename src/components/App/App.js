import styled from "styled-components/macro";
import GlobalStyles, { QUERIES } from "../../constants";
import MobileHeader from "../MobileHeader";
// import DesktopHeader from '../DesktopHeader';
import Hero from "../Hero/Hero";
import LearnMoreCard from "../learnMoreCard/learnMoreCard";
import img1 from "../../images/mobile/image-transform.jpg";
import img2 from '../../images/mobile/image-stand-out.jpg';

const Wrapper = styled.div`
  padding: 0 24px;
  max-width: 1440px;
  width: 100%;
`;


const CardWrapper =styled.div`
 display : flex;
 flex-direction: column;
 margin: 0 -24px;
 


  @media ${QUERIES.tabletAndUp} {


  }

  @media ${QUERIES.desktopAndUp} {

  }
`; 

function App() {
  return (
    <Wrapper>
      <Hero />
    <CardWrapper>

  
      <LearnMoreCard img={img1}>
        <h2>transform your brand</h2>
        <p>
          We are full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
      </LearnMoreCard>
      <LearnMoreCard direction='row-reverse' img={img2}>
        <h2>transform your brand</h2>
        <p>
          We are full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
      </LearnMoreCard>
      </CardWrapper>
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
