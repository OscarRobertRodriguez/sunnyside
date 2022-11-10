import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import avatarImg1 from "../../images/image-emily.jpg";
import avatarImg2 from "../../images/image-jennie.jpg";
import avatarImg3 from "../../images/image-thomas.jpg";

function Testimonials() {
  return (
    <Wrapper>
      <h2>Client Testimonials</h2>
      <CardsWrapper>
        <TestimonialCard avatar={avatarImg1}>
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h4>Emily R.</h4>
          <p>Marketing Director</p>
        </TestimonialCard>
        <TestimonialCard avatar={avatarImg3}>
          <p>
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>
          <h4>Thomas S.</h4>
          <p>Chief Operating Officer</p>
        </TestimonialCard>
        <TestimonialCard avatar={avatarImg2}>
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h4>Jennie F.</h4>
          <p>Business Owner</p>
        </TestimonialCard>
      </CardsWrapper>
    </Wrapper>
  );
}

export default Testimonials;

const Wrapper = styled.div`
  margin: 0 -24px;
  padding-top: 64px;
  padding-bottom: 86px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${QUERIES.desktopAndUp} {
    padding-top: 160px;
    padding-bottom: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h2 {
    font-size: 16px;
    color: var(--grayish-blue);
    text-transform: uppercase;
    font-family: "Fraunces";
    letter-spacing: 4px;
    padding-bottom: 64px;

    @media ${QUERIES.desktopAndUp} {
      font-size: 20px;
      letter-spacing: 5px;
      padding-bottom: 80px;
    }
  }
`;

const CardsWrapper = styled.div`
  display: flex;
  gap: 64px;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 24px;

  @media ${QUERIES.desktopAndUp} {
    gap: 30px;
    justify-content: space-between;
  }
`;
