import styled from "styled-components/macro";
import GlobalStyles, { QUERIES } from "../../constants";
import MobileHeader from "../MobileHeader";
// import DesktopHeader from '../DesktopHeader';
import Hero from "../Hero/Hero";
import LearnMoreCard from "../learnMoreCard/learnMoreCard";
import CategoryCard from "../categoryCard/categoryCard";
import img1 from "../../images/mobile/image-transform.jpg";
import img2 from '../../images/mobile/image-stand-out.jpg';

import img3 from "../../images/desktop/image-photography.jpg";
import img4 from '../../images/desktop/image-graphic-design.jpg'; 

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

const CategoryContainer = styled.div`
 display: flex;
 margin: 0 -24px;
 flex-direction: column;

 @media ${QUERIES.tabletAndUp} {
 align-items: center;
 }

 @media ${QUERIES.desktopAndUp} {
  flex-direction: row;
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
    <CategoryContainer>
    <CategoryCard back={img4}>
    <h3>Graphic Design</h3>
      <p>
      Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
      </p>
      </CategoryCard>
    <CategoryCard back={img3}>
    <h3>Photography</h3>
      <p>
        Increase your credibility by getting the most stunning, high-quality
        photos that improve your business image.
      </p>
    </CategoryCard>
    </CategoryContainer>
  
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;
