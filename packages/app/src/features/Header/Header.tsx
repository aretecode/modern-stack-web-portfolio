import * as React from 'react'
import { Navigation } from '../Navigation'
import { StyledHeader, StyledLogo, StyledLogoLink } from './styled'

export default class Header extends React.PureComponent<{
  className?: string
}> {
  render() {
    return (
      <StyledHeader {...this.props}>
        <StyledLogoLink to="/">
          <StyledLogo>jameswiens</StyledLogo>
        </StyledLogoLink>
        <Navigation />
      </StyledHeader>
    )
  }
}
