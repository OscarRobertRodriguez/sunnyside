import React from "react";
import styled from "styled-components";
import HeaderImg from "../../images/mobile/image-header.jpg";
import HeaderImgDesk from "../../images/desktop/image-header.jpg";
import MobileHeader from "../MobileHeader";
import { QUERIES } from "../../constants";

const Outter = styled.div`
  position: relative;
  margin: 0 -24px;
  height: 538px;

  @media ${QUERIES.tabletAndUp} {
    height: 800px;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 800px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${HeaderImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  padding-top: 32px;
  padding-bottom: 120px;
  gap: 52px;
  background-size: cover;
  position: absolute;

  @media ${QUERIES.tabletAndUp} {
    background-image: url(${HeaderImgDesk});

    padding: 0 40px;
    padding-bottom: 250px;
    padding-top: 34px;
  }

  @media ${QUERIES.desktopAndUp} {
    background-image: url(${HeaderImgDesk});

    padding-bottom: 330px;
    justify-content: space-around;
    background-position: center 70%;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

function Hero({windowSize}) {
  return (
    <Outter>
      <Wrapper>
        <MobileHeader windowSize={windowSize} />
        <Title>We are creatives</Title>
        <svg width="36" height="114" xmlns="http://www.w3.org/2000/svg">
          <g
            stroke="#FFF"
            strokeWidth="6"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 3v100M3 95.484l15 15 15-15" />
          </g>
        </svg>
      </Wrapper>
    </Outter>
  );
}

export default Hero;
