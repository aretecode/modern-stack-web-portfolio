/**
 * @note - currently styling most of the things the pieces
 *         if this was scaled for reuse
 *         we would style parts of the pieces in presets & larger pieces
 */
import styled from 'styled-components'
import { StyledSeparator as Separator } from '../../src/features/Separator'
import { StyledLink as Link } from '../../src/features/Link'
import { StyledImage } from '../../src/features/Image'

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
  @media (min-width: 1024px) {
    margin-top: 6rem;
  }
  @media (max-width: 1024px) {
    flex-basis: 100%;
  }
`

export const StyledArrow = styled.i`
  font-style: unset;
  padding-right: 0.15rem;
  opacity: 0.3;
`

export const StyledSummary = styled.p`
  margin-top: 1rem;

  @media (min-width: 1024px) {
    flex-basis: 100%;
  }
  @media (max-width: 1024px) {
    flex-basis: 100%;
  }
`

export const StyledLabel = styled.h4`
  color: #344955;
  margin: 0;
  margin-top: -0.5rem;
  color: #344955;
  font-size: 1.2rem;

  @media (max-width: 1024px) {
    flex-basis: 100%;
  }
`

/**
 * @todo material-ui standard animation timings
 */
export const StyledAboutMeImg = styled(StyledImage)`
  display: flex;
  object-fit: cover;

  border-radius: 0.125rem;
  box-shadow: none;

  transition: margin-top 0.5s ease-in-out, max-width 0.24s ease-in-out,
    height 1s ease-in-out, object-position 0.8s ease-in-out,
    box-shadow 0.24s ease-in-out;

  @media (max-width: 500px) {
    object-position: left;
  }
  @media (max-width: 1023px) {
    width: 100%;
  }
  @media (min-width: 1024px) {
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    height: 120%;
    object-position: left;
    margin-top: -3rem;
    max-width: 21rem;
    flex-basis: 30%;
  }
`

export const StyledButtonWrap = styled.div`
  width: 100%;
  padding-top: 1rem;

  display: flex;
  justify-content: flex-end;
  transition: justify-content 500ms ease-in-out;

  @media (max-width: 1023px) {
    justify-content: unset;
    flex-basis: 50%;
    margin: auto;
  }
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
  margin: 9rem 1rem 9rem 1rem;
  display: flex;
  flex-wrap: wrap;
  border-radius: 0.125rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  height: 500px;
  width: 80%;

  > img {
    display: inline-flex;
    flex-basis: 75px;
    width: 75px;
    object-fit: contain;
    object-position: bottom;
  }

  @media (max-width: 1023px) {
    width: calc(100% - 2rem);
    height: unset;
  }

  address {
    color: var(--color-text-unimportant);
  }
`

export const StyledFigure = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;

  @media (max-width: 1023px) {
    flex-wrap: wrap;
  }
`

export const StyledFigCaption = styled.figcaption`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  word-break: break-word;

  @media (max-width: 1023px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const StyledNav = styled.nav`
  display: flex;
  padding: 2rem 0;
  transition: flex-direction 500ms ease-in-out;

  @media (max-width: 1023px) {
    flex-direction: column;
    padding: 0.5rem 0;
    flex-basis: 50%;
  }

  > section {
    flex-basis: 50%;

    > header {
      font-weight: bold;
    }
  }
`
