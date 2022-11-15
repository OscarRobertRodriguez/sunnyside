import React from "react";
import styled from "styled-components";




function LinkButton({textColor, children}) {
  return (
    <Wrapper style={{
      '--color': textColor
    }}>
     {children}
    </Wrapper>
  );
}

export default LinkButton;



const Wrapper = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    font-family: "Fraunces";
    font-weight: var(--font-weight-heavy);
    letter-spacing: 1px;
    font-size: 15px;
    display: block;
    position: relative;
    cursor: pointer;

    
    


    &::after {
          content: ''; 
          width: 137px; 
          height: 10px;
          border-radius: 5px;
          background: var(--color);
          position: absolute;
          z-index: -1;
          bottom: 0px;
          left: -10px;
          right: 0;
          opacity: .3;
          transition: .2s all;
          
    }

    &:hover::after  {
      opacity:1;
    }
`; 