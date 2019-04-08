import styled from 'styled-components'
import { StyledSeparator as Separator } from '../../src/features/Separator'
import { StyledLink as Link } from '../../src/features/Link'

export const StyledLink = styled(Link)`
  &&& {
    color: unset;
    text-decoration: initial;
    letter-spacing: initial;
  }
`

export const StyledSeparator = styled(Separator).attrs({
  children: undefined,
  as: 'hr',
})`
  color: var(--color-text-secondary);
  border: none;
  border-top: 5px solid var(--color-text-secondary);
  margin: 0;
  padding: 0;
  height: 0.75rem;
  width: 8vw;
`

export const StyledName = styled.h3`
  font-size: 2rem;
  margin-bottom: 0;
  margin-top: 6rem;
`

export const StyledArrow = styled.i`
  font-style: unset;
  padding-right: 0.15rem;
  opacity: 0.3;
`

export const StyledSummary = styled.summary`
  margin-top: 1rem;
`

export const StyledLabel = styled.h4`
  color: #344955;
  margin: 0;
  margin-top: -0.5rem;
  color: #344955;
  font-size: 1.2rem;
`

export const StyledAboutMeImg = styled.img`
  display: flex;
  flex-basis: 30%;
  border-radius: 0.125rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);
`

export const StyledButtonWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-top: 1rem;
`

export const StyledButton = styled.button`
  padding: 0.5rem 1.5rem;
  border-color: unset;
  background: transparent;
  font-size: 1rem;
  font-weight: bold;
  border: 4px solid #222;
  color: #222;
`

/**
 * @todo split this out into pieces @@HACK
 */
export const StyledAboutMeArticle = styled.article`
  background-color: #fff;
  margin: 1rem;
  height: 500px;
  margin: 10rem 1rem;
  width: 80%;
  display: flex;
  border-radius: 0.125rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  > img {
    display: inline-flex;
    flex-basis: 75px;
    width: 75px;
    object-fit: contain;
    object-position: bottom;
  }

  address {
    color: var(--color-text-unimportant);
  }

  > figure {
    margin: 0;
    padding: 0;
    display: flex;

    > img {
      height: 120%;
      object-fit: cover;
      object-position: left;
      margin-top: -3rem;
      max-width: 21rem;
    }
    > figcaption {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      word-break: break-word;
    }
  }

  nav {
    display: flex;
    padding: 2rem 0;

    > section {
      flex-basis: 50%;

      > header {
        font-weight: bold;
      }
    }
  }
`
