import { createGlobalStyle } from 'styled-components'

/**
 * @todo not above the fold...
 * @see https://codepen.io/addyosmani/pen/jlvoC
 * @see https://material-ui.com/style/color/
 * @see https://material.io/design/color/the-color-system.html#color-usage-palettes
 *
 *
 * @todo https://fonts.google.com/specimen/Roboto
 */
export const AppStyles = createGlobalStyle`
  :root {
    --color-red: #711c1c;
    --color-pink: #ff4081;
    --color-purple: #5c6bc0;
    --color-purple-blue: #3f51b5;
    --color-material-background-purple: #6200ee;

    --color-dark-background-main: #344955;
    --color-dark-background-dark: #232f34;
    --color-dark-background-light: #4a6572;
    --color-link: #fff;

    --color-background-secondary: #232f34;
    --color-background-main: #344955;
    --color-text-heading: #fff;
    --color-text-body: #fff;
    --color-text-secondary: #03dac6;
    --color-text-unimportant: #6c757d;
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-display: auto;
    font-style: normal;
    font-weight: 300;
    src: local("Source Sans Pro Light"), local("SourceSansPro-Light"), url(https://themes.googleusercontent.com/static/fonts/sourcesanspro/v6/toadOcfmlt9b38dHJxOBGNbE_oMaV8t2eFeISPpzbdE.woff) format("woff");
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-display: auto;
    font-style: normal;
    font-weight: 400;
    src: local("Source Sans Pro"), local("SourceSansPro-Regular"), url(https://themes.googleusercontent.com/static/fonts/sourcesanspro/v6/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format("woff");
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-display: auto;
    font-style: normal;
    font-weight: 600;
    src: local("Source Sans Pro Semibold"), local("SourceSansPro-Semibold"), url(https://themes.googleusercontent.com/static/fonts/sourcesanspro/v6/toadOcfmlt9b38dHJxOBGJ6-ys_j0H4QL65VLqzI3wI.woff) format("woff");
  }


  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  html, body {
    margin: 0;
    min-height: 100vh;
    overflow-x: hidden;
  }
  body {
    padding: 0;
    font-family: "Roboto", "Source Sans pro", "chaparral-pro", "Open Sans", "proxima-nova", "HelveticaNeue", "Helvetica Neue", "Helvetica", "Arial", sans-serif, serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
  #__next {
    min-height: inherit;
    background-color: var(--color-dark-background-dark);
  }
`

/**
 * could also style outlines here
 */
export const BelowTheFoldStyles = createGlobalStyle`
  ::-moz-selection {
    background: #e1523d;
    color: #fff;
    background: rgba(0,0,0,.5);
    text-shadow: none;
  }
  ::selection {
    background: #e1523d;
    color: #fff;
    background: rgba(0,0,0,.5);
    text-shadow: none;
  }
`
