import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --font-heading: 'Chewy', cursive;
    --font-body: 'Chewy', cursive;
    --padding-page: 24px;
  }



  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, center,
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


  

  h1{
  color: #167ef5;
  font-family: var(--font-heading);
  font-size: 40px;
  text-align: center;
  }

label {
  color: #167ef5;
  font-family: var(--font-heading);
  font-size: 20px;
  text-align: center;
  font-weight: bold;
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

p,
a,
li,
blockquote{
  font-family: var(--font-body);
  font-size: 20px;
  color: #808080;
}

  input {
    font-size: 18px;
    height: 30px;
    border: 2px solid #167ef5;
    border-radius: 10px;
    padding: 10px;
    margin: 10px
    
  }
`;