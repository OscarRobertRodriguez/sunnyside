import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Avatar1 from '../../images/image-emily.jpg';

function TestimonialCard({avatar, children}) {
  return (
    <Wrapper>
     <Avatar src={avatar}  />
     {children}
    </Wrapper>
  );
}

export default TestimonialCard;



const Wrapper = styled.div` 
display: flex;
flex-direction: column;
align-items: center;
flex: 1 1 350px;
max-width: 350px;
text-align: center;


& p:first-of-type {
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--dark-grayish-blue);

  @media ${QUERIES.desktopAndUp} {
    padding-top: 60px;
  padding-bottom: 69px;
}
}


  & p:last-of-type {
    color: var(--dark-grayish-blue);
    padding-top: 15px;
    font-size: 14px;
  }
`;

const Avatar = styled.img`
  display: block;
  border-radius: 50%;
  width: 72px;
`; 