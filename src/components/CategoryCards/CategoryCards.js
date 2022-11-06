import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import CategoryCard from "../categoryCard/categoryCard";
import img3 from "../../images/desktop/image-photography.jpg";
import img4 from '../../images/desktop/image-graphic-design.jpg'; 

function CategoryCards() {
  return (
    <Wrapper>
      <CategoryCard back={img4}>
        <h3>Graphic Design</h3>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </CategoryCard>
      <CategoryCard back={img3}>
        <h3>Photography</h3>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </CategoryCard>
    </Wrapper>
  );
}

export default CategoryCards;

const Wrapper = styled.div`
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
