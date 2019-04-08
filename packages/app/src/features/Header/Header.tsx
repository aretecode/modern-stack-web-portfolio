import * as React from 'react'
import { Navigation } from '../Navigation'
import { StyledHeader, StyledLogo } from './styled'

export default class Header extends React.PureComponent<{
  className?: string
}> {
  render() {
    return (
      <StyledHeader {...this.props}>
        <StyledLogo>jameswiens</StyledLogo>
        <Navigation />
      </StyledHeader>
    )
  }
}
