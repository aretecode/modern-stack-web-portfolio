/**
 * @todo @@amp this will be in Amp
 */
import { Link as ReactRouterLink } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(ReactRouterLink)`
  text-decoration: none;
  position: relative;
  display: inline-flex;
  letter-spacing: 0.2em;
  color: var(--color-link);
  border-bottom: 3px solid var(--color-link);
  padding-bottom: 2px;
  transition: 0.3s;

  &:link,
  &:visited {
    color: var(--color-link);
  }
  &:after {
    display: block;
    position: absolute;
    content: '\\0020';
    z-index: 2;
    border-bottom: 3px solid;
    border-bottom-color: inherit;
    right: 0;
    bottom: -3px;
    left: 0;
    transition: border-bottom-width 0.3s;
  }
  &:hover:after {
    border-bottom-width: 5px;
  }
  &:focus {
    outline: thin dotted;
  }
  &:hover {
    color: #aaa;
  }
  &:link {
    -webkit-tap-highlight-color: rgba(102, 102, 102, 0.5);
  }
`