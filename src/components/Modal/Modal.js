import React from "react";
import styled from "styled-components";

function Modal() {
  return (
    <Wrapper>
      <Link href="0">About</Link>

      <Link href="0">Services</Link>
      <Link href="0">Projects</Link>
      <Link href="0">contact</Link>
    </Wrapper>
  );
}

export default Modal;

const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 330px;
  height: 330px;
  position: fixed;
  margin: 0 auto;
  color: red;
  top: 150px;
  left: 0;
  right: 0;
  z-index: 9999;
  background: #fff;
  box-shadow: 13px 29px 20px rgba(0, 0, 0, .1);

  &:before {
    position: absolute;
    content: ''; 
    width: 0px;
   height: 0px;
   border-style: solid;
   border-width: 0 0px 28px 29px;
   border-color: transparent transparent #FFf transparent;
   transform: rotate(0deg);
    top: -28px;
    right: 0;
  }
`;

const Link = styled.a`
color: var(--dark-grayish-blue);
text-decoration: none;
font-size: var(--20px);
text-transform: capitalize;
width: 140px;
padding-left: 32px;
padding-right: 32px;
padding-top: 15px;
padding-bottom: 15px;
text-align: center;
border-radius: 28px;
transition: .2s all;

&:hover {
  background-color: var(--yellow);
}
`;
