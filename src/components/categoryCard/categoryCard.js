import React from "react";

import styled from "styled-components";
import { QUERIES } from "../../constants";


const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 32px;
  align-items: center;
  flex: 1 1 600px;
  background: var(--backgroundImage); 
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: 0 24px;
  padding-bottom: 59px;

h3 {
  color: var(--dark-blue);
}

  p {
    width: 100%;
    color: var(--dark-blue);
    font-size: 16px;

    @media ${QUERIES.tabletAndUp} {
      width: 339px;
  }
  
  }

  @media ${QUERIES.tabletAndUp} {
    flex: 1 1 500px;
    width: 600px;
  }

  @media ${QUERIES.desktopAndUp} {
    flex: 1 1 0px;
    height: 600px;
  }
`;

function categoryCard({back, children}) {
  return (
    <Wrapper style={{
      "--backgroundImage": `url(${back})`,
    }}>
        {children}
    </Wrapper>
  );
}

export default categoryCard;
