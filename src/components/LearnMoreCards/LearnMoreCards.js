import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import LearnMoreCard from "../learnMoreCard/learnMoreCard";
import img1 from "../../images/mobile/image-transform.jpg";
import img2 from "../../images/mobile/image-stand-out.jpg";

function LearnMoreCards() {
  return (
    <Wrapper>
      <LearnMoreCard img={img1}>
        <h2>transform your brand</h2>
        <p>
          We are full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
      </LearnMoreCard>
      <LearnMoreCard direction="row-reverse" img={img2}>
        <h2>transform your brand</h2>
        <p>
          We are full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
      </LearnMoreCard>
    </Wrapper>
  );
}

export default LearnMoreCards;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -24px;
`;
