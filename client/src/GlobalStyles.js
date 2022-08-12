import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-cadmium-red: #D80026;
    --color-alabama-crimson: #AA001E;
    --color-orange: #F79D00;
    --color-selective-yellow: #FDBB01;
    --color-desert-sand: #E3C4A6;
    --font-heading: 'Ibarra Real Nova', serif;
    --font-body: 'Ibarra Real Nova', serif;
    --padding-page: 24px;
  }



  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0px;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }

  h1,
h2,
label {
  color: #167ef5;
  font-family: var(--font-heading);
  font-size: 40px;
  text-align: center;
}
h2{
  color: #167ef5;
  font-family: var(--font-heading);
  font-size: 25px;
  text-align: center;
}
h3{
  color: #167ef5;
  font-family: var(--font-heading);
  font-size: 18px;
  text-align: center;
}
button {
  color: white;
  font-family: var(--font-heading);
  font-size: 18px;
  text-align: center;
  background-color: #167ef5;
  border-radius: 20px;
  cursor: pointer;
  border-style: none;
}
p,
a,
li,
blockquote,
input {
  font-family: var(--font-body);
}

  input {
    font-size: 24px;
    height: 42px;
    border: 2px solid var(--color-orange);
    border-radius: 4px;
    padding: 0 12px;
  }
`;