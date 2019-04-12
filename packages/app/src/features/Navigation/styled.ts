import styled from 'styled-components'

export const StyledNav = styled.nav`
  @media (max-width: 480px) {
    width: 100%;
  }
`

export const StyledNavList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0;
  margin: 0;

  > li {
    display: inline-flex;
    > a {
      padding: 1rem;
      &:after {
        display: none;
      }
    }
  }
`
