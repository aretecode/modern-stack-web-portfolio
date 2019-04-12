import * as React from 'react'
/**
 * since we are using next, this is not working
 */
// import { Link as BaseLink, LinkProps } from 'react-router-dom'
import { LinkProps } from 'react-router-dom'
/**
 * @todo @see https://raw.githubusercontent.com/zeit/next.js/canary/packages/next/client/link.js
 * ^ does not accept className
 * @see https://github.com/zeit/next.js/issues/1942#issuecomment-313925454
 */
import BaseLink from 'next/link'
import styled from 'styled-components'

export const StyledHref = styled.a``

export class DynamicLink extends React.PureComponent<
  LinkProps & { theme?: any }
> {
  render() {
    const { to, href, theme, ...remainingProps } = this.props
    const toHref = (to || href || '') as string

    if (toHref.includes('http')) {
      return <a {...remainingProps} href={toHref} />
    } else {
      const { children, ...remaining } = remainingProps
      return (
        <BaseLink {...remaining} href={toHref}>
          <StyledHref {...remaining} href={toHref}>
            {children}
          </StyledHref>
        </BaseLink>
      )
      // return <BaseLink {...remainingProps} to={toHref} />
    }
  }
}

/**
 * could use styled theme
 */
export const StyledLink = styled(DynamicLink)`
  text-decoration: none;
  position: relative;
  letter-spacing: 0.2em;

  color: var(--color-link);

  &:link,
  &:visited {
    color: var(--color-link);
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
