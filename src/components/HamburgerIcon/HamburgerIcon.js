import React from "react";
import styled from "styled-components";

function HamburgerIcon({fill}) {
  return (
    <Wrapper
    style={{
      "--fill-color": fill,
    }}
      width="24"
      height="18"
      viewBox="0 0 24 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
        fill-rule="evenodd"
      />
    </Wrapper>
  );
}

const Wrapper = styled.svg`
 fill: var(--fill-color, #fff) ; 

`;

export default HamburgerIcon;
