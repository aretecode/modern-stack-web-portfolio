import * as React from 'react'
import { Link as BaseLink, LinkProps } from 'react-router-dom'
// import BaseLink from 'next/link'
import styled from 'styled-components'

export class DynamicLink extends React.PureComponent<LinkProps> {
  render() {
    const { to, href, theme, ...remainingProps } = this.props
    const toHref = to || href || ''

    if (toHref.includes('http')) {
      return <a {...remainingProps} href={toHref} />
    } else {
      return <BaseLink {...remainingProps} to={toHref} />
    }
  }
}

export const StyledLink = styled(DynamicLink)`
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
