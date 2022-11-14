import React from "react";
import styled from "styled-components";

function DesktopHeader() {
  return (
    <Wrapper>
      <Link href="0">About</Link>
      <Link href="0">Services</Link>
      <Link href="0">Projects</Link>
      <Link href="0">contact</Link>
    </Wrapper>
  );
}

export default DesktopHeader;

const Wrapper = styled.nav`
  display: flex;
  gap: 5px;
  justify-content: space-around;
`;

const Link = styled.a`
  text-transform: capitalize;
  color: var(--white);
  text-decoration: none;
  font-size: var(--18px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: var(--font-weight-med);
  width: 140px;
  height: 56px;
  position: relative;
  border-radius: 32px;
  transition: 0.2s all;

  &:hover {
    background-color: hsl(199, 86%, 72%);
  }
`;
