import { createGlobalStyle } from 'styled-components'

/**
 * @todo not above the fold...
 * @see https://codepen.io/addyosmani/pen/jlvoC
 * @see https://material-ui.com/style/color/
 * @see https://material.io/design/color/the-color-system.html#color-usage-palettes
 * @see https://css-tricks.com/dont-just-copy-the-font-face-out-of-google-fonts-urls/
 * @see https://fonts.google.com/specimen/Source+Sans+Pro?selection.family=Source+Sans+Pro:300,400,600
 * @see https://developers.google.com/web/updates/2016/02/font-display
 *
 * @todo https://fonts.google.com/specimen/Roboto
 */
export const AppStyles = createGlobalStyle`
  :root {
    --color-red: #711c1c;
    --color-pink: #ff4081;
    --color-soft-purple: #5c6bc0;
    --color-purple-blue: #3f51b5;
    --color-material-background-purple: #6200ee;

    --color-orange: #ff5722;
    --color-deep-blue: #3b50ce;
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
    font-display: optional;
    font-style: normal;
    font-weight: 300;
    src: local('Source Sans Pro Light'), local('SourceSansPro-Light'), url(https://fonts.gstatic.com/s/sourcesanspro/v12/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-display: optional;
    font-style: normal;
    font-weight: 400;
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v12/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Source Sans Pro';
    font-display: optional;
    font-style: normal;
    font-weight: 600;
    src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'), url(https://fonts.gstatic.com/s/sourcesanspro/v12/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }


  html {
    box-sizing: border-box;
    background-color: var(--color-material-background-purple);
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
    font-family: "Source Sans pro", "Roboto", "chaparral-pro", "Open Sans", "proxima-nova", "HelveticaNeue", "Helvetica Neue", "Helvetica", "Arial", sans-serif, serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
  }
  #__next {
    min-height: inherit;
    background-color: var(--color-dark-background-dark);
    display: flex;
    flex-direction: column;
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
