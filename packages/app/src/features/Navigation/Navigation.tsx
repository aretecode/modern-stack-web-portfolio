import * as React from 'react'
import { StyledLink } from '../Link'
import { StyledNav, StyledNavList } from './styled'

export default class Navigation extends React.PureComponent<{
  className?: string
}> {
  render() {
    return (
      <StyledNav {...this.props}>
        <StyledNavList>
          <li>
            <StyledLink to="#home" rel="me">
              home
            </StyledLink>
          </li>
          <li>
            <StyledLink to="#work" rel="me">
              work
            </StyledLink>
          </li>
          <li>
            <StyledLink to="#about" rel="me">
              about
            </StyledLink>
          </li>
        </StyledNavList>
      </StyledNav>
    )
  }
}