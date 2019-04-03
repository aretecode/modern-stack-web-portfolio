import React, {StrictMode} from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const Styles = createGlobalStyle`
  [role='button'],
  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button {
    display: inline-flex;
  }
  /* Make 'a' like a button */
  [role='button'] {
    color: inherit;
    cursor: default;
    text-align: center;
    text-decoration: none;
    white-space: pre;
  }
  input::-moz-focus-inner,
  button::-moz-focus-inner {
    border: 0;
    padding: 0;
  }
  /* Reset 'button' and button-style 'input' default styles */
  input[type='submit'],
  input[type='reset'],
  input[type='button'],
  button {
    background: none;
    border: 0;
    color: inherit;
    font: inherit;
    line-height: normal;
    overflow: visible;
    padding: 0;
    /* for input */
    -webkit-appearance: button;
    -moz-appearance: none;
    /* for button */
    user-select: none;
  }
  button[type='submit'],
  input[type='submit'],
  button[type='reset'],
  input[type='reset'] {
    justify-content: center;
    align-items: center;
  }
`

// can style all stories here
const StyledStory = styled.div`
  * {
    font-family: 'Roboto';
    box-sizing: border-box;
  }
`

const toStyledStory = story => {
  class StoryApp extends React.PureComponent {
    render() {
      console.log('rendering: ' + story.name)
      return React.createElement(
        StyledStory,
        null,
        React.createElement(Styles, null),
        React.createElement(StrictMode, null, story())
      )
    }
  }
  return React.createElement(StoryApp, null)
}

export {StyledStory}
export {toStyledStory}
