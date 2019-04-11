import styled from 'styled-components'

/**
 * @see https://material.io/design/components/cards.html#anatomy
 */
export const StyledCard = styled.article.attrs({
  testid: process.env.NODE_ENV === 'test' ? 'desktop-nav-wrap' : undefined,
})`
  color: var(--color-text-body);
  background-color: var(--color-dark-background-main);

  margin: 0;
  padding: 0;

  position: relative;
  min-width: 0;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: normal;
  background-clip: border-box;
  border-radius: 0.125rem;

  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  /* padding here because of grid gap */
  @media (min-width: 1024px) {
    padding: 0 1rem 0 0;
  }
  @media (max-width: 1023px) {
    box-shadow: 0 1rem 0.75rem rgba(0, 0, 0, 0.19),
      0 0.5rem 0.5rem rgba(0, 0, 0, 0.23);
  }

  /* @todo @@styles split out */
  figcaption {
    padding: 1.25rem;
  }
  header {
    color: var(--color-text-secondary);
    font-size: 1.5rem;
    font-weight: 300;
  }
  div[role='separator'],
  time {
    font-size: 80%;
    font-weight: 400;
    color: var(--color-text-unimportant);
  }
  a {
    color: var(--color-text-unimportant);
    border-color: var(--color-text-unimportant);
    border-width: 1px;

    &:link,
    &:visited {
      color: var(--color-text-unimportant);
    }
    &::after {
      display: none;
    }
  }
`
