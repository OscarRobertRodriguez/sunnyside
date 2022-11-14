import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";


function learnMoreCard({ img, direction, children }) {
  return (
    <Wrapper
      style={{
        "--direction": direction,
        "--leftPadding": direction === "row-reverse" ? "0px" : "53px",
        "--rightPadding": direction === "row-reverse" ? "53px" : "0px",
      }}
    >
      <ContentWrapper>{children}</ContentWrapper>
      <ImgWrapper>
        <img src={img} alt="test" />
      </ImgWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;


  @media ${QUERIES.desktopAndUp} {
    padding: 0 -24px;
    flex-direction: var(--direction, "row-reverse");
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1 1 375px;

  gap: 24px;
  padding: 64px 24px;

  p {
    color: var(--dark-grayish-blue);
  }

  @media ${QUERIES.tabletAndUp} {
    flex: 1 1 425px;
    padding-left: 0px;
    padding-right: 0px;

    h2,
    p {
      width: 400px;
    }
  }

  @media ${QUERIES.desktopAndUp} {
    padding-left: var(--leftPadding);
    padding-right: var(--rightPadding);
    flex: 1 1 720px;
    gap: 32px;
    text-align: left;

    h2,
    p {
      width: 445px;
    }
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;

  img {
    height: 100%;

    @media ${QUERIES.tabletAndUp} {
      height: 500px;
    }

    @media ${QUERIES.desktopAndUp} {
      height: auto;
    }
  }

  @media ${QUERIES.tabletAndUp} {
    width: 100%;
    height: 100%;
  }

  @media ${QUERIES.desktopAndUp} {
    flex: 1 1 720px;
  }
`;

export default learnMoreCard;
