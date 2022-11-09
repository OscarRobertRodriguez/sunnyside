import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Cone from "../../images/desktop/image-gallery-cone.jpg";
import MilkBottles from "../../images/desktop/image-gallery-milkbottles.jpg";
import Orange from "../../images/desktop/image-gallery-orange.jpg";
import Sugar from "../../images/desktop/image-gallery-sugarcubes.jpg";

function ImageGallery() {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={MilkBottles} alt="cone" />
      </ImgWrapper>
      <ImgWrapper>
        <img src={Orange} alt="cone" />
      </ImgWrapper>
      <ImgWrapper>
        <img src={Cone} alt="cone" />
      </ImgWrapper>
      <ImgWrapper>
        <img src={Sugar} alt="cone" />
      </ImgWrapper>
    </Wrapper>
  );
}

export default ImageGallery;

const Wrapper = styled.div`
  margin: 0 -24px;
  display: flex;
  flex-wrap: wrap;
 justify-content: center;

  img {
    width: 100%;
  }

`;

const ImgWrapper = styled.div`

  flex: 0 1 50%;


  @media ${QUERIES.tabletAndUp} {
  flex: 1 1 250px;
  max-width: 300px;

}

@media ${QUERIES.desktopAndUp} {
  flex: 1 0 25%;
  max-width: initial;
}

`;
