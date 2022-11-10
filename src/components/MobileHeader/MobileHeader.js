import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Logo from "../Logo/Logo";
import HamburgerIcon from "../HamburgerIcon/HamburgerIcon";
import DesktopHeader from "../DesktopHeader/DesktopHeader";

const Wrapper = styled.header`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function MobileHeader({ windowSize }) {
  return (
    <Wrapper>
      <Logo fill={"var(--white)"} />
      {windowSize.innerWidth >= 1100 ? (
        <DesktopHeader />
      ) : (
        <HamburgerIcon fill={"var(--white)"} />
      )}
    </Wrapper>
  );
}

export default MobileHeader;
