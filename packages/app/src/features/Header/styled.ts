import styled from 'styled-components'
import { StyledLink } from '../Link'

export const StyledHeader = styled.header.attrs({
  role: 'banner',
})`
  background-color: var(--color-material-background-purple);
  position: absolute;
  background: rgba(0, 0, 0, 0.2);
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  width: 100%;
  height: 4rem;
  padding-left: 1.5rem;
  padding-right: 0.5rem;

  @media (max-width: 480px) {
    height: 7rem;
  }
`

/**
 * @todo image
 */
export const StyledLogo = styled.p.attrs({
  id: 'logo',
})`
  color: var(--color-text-body);
  @media (max-width: 480px) {
    flex-basis: 100%;
    text-align: center;
    margin-bottom: 0;
  }
`

export const StyledLogoLink = styled(StyledLink)``
