import { createGlobalStyle } from "styled-components/macro";

const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1440,
};
export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

const GlobalStyles = createGlobalStyle`


*, *::before, *::after {
  box-sizing: border-box;
}

html {
  font-family: 'Barlow', sans-serif;
  --14px: 0.875rem;
  --15px: 0.9375rem;
  --16px: 1rem;
  --17px: 1.0625rem;
  --18px: 1.125rem;
  --19px: 1.1875rem;
  --20px: 1.25rem;
  --21px: 1.3125rem;
  --28px: 1.75rem; 
  --32px: 2rem;
  --40px: 2.5rem;
  --56px: 3.5rem; 

  --font-weight-med: 600; 
  --font-weight-heavy: 900; 

  /* primary */

--soft-red: hsl(7, 99%, 70%);
--yellow: hsl(51, 100%, 49%);
/* (graphic design text) */
--dark-desaturated-cyan:  hsl(167, 40%, 24%); 
/* (photography text) */
--dark-blue : hsl(198, 62%, 26%); 
/* (footer) */
--dark-moderate-cyan: hsl(168, 44%, 70%); 
--footer-links: hsla(167, 34%, 41%, 1); 

  /* neutral */
--very-dark-desaturated-blue: hsl(212, 27%, 19%); 
--very-dark-grayish-blue: hsl(213, 9%, 39%);
--dark-grayish-blue: hsl(232, 10%, 55%); 
--grayish-blue: hsl(210, 4%, 67%); 
--white: hsl(0, 0%, 100%); 
}



/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  3. Allow percentage-based heights in the application
*/
#root {
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
}
html, body, #root {
  height: 100%;

}
/*
  Typographic tweaks!
  4. Add accessible line-height
  5. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;


}
/*
  6. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  7. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  8. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Fraunces', serif;
  text-transform: capitalize;
}
/*
  9. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
 
}


h1, h2, h3, h4 {
  font-weight: var(--font-weight-heavy); 
}

h1 {
   font-size: var(--40px); 
   letter-spacing: 6.25px;
   text-transform: uppercase;
   color: var(--white);

   @media ${QUERIES.tabletAndUp} {
     font-size:  var(--56px);
     letter-spacing: 8.75px;
   }
}

h2 {
  font-size:  var(--32px);
  letter-spacing: -.22px;

  @media ${QUERIES.desktopAndUp} {
    font-size: var(--40px); 
    letter-spacing: -.28px;
    line-height: 49px;
  }
}


h3 {
   font-size: var(--28px); 
   letter-spacing: -.2px;
}

h4 {
  font-size: var(--18px); 
  letter-spacing: -.12px;
}


p {
  font-size: var(--18px);
  color: var(--very-dark-desaturated-blue);
  font-weight: var(--font-weight-med);
  letter-spacing: -.12;
}

`;

export default GlobalStyles;
