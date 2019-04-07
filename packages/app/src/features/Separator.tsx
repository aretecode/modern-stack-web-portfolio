import styled from 'styled-components'

export const StyledSeparator = styled.div.attrs({
  role: 'separator',
  children: '-',
})`
  color: var(--color-text-body);
  display: inline-flex;
  padding: 0 0.5rem;
`
