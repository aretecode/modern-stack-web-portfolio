import styled from 'styled-components'

export const StyledHeader = styled.header.attrs({
  role: 'banner',
})`
  background-color: var(--color-material-background-purple);

  width: 100%;
  display: flex;
  height: 4rem;
  align-items: center;
`

/**
 * @todo image
 */
export const StyledLogo = styled.p.attrs({
  id: 'logo',
})`
  padding-left: 1rem;
  color: var(--color-text-body);
`
