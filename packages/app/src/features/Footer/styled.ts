import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background-color: var(--color-material-background-purple);
  padding: 2rem 1.25rem;

  > nav {
    > a {
      display: flex;
      flex-basis: 100%;
      width: max-content;
      margin-bottom: 1rem;
    }
  }
  p {
    color: var(--color-text-body);
  }
`
