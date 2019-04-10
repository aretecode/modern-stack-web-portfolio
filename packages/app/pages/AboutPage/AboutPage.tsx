/**
 * @file @todo move out the `⇔` @@hack
 */
import * as React from 'react'
import {
  ResumeContext,
  ResumeContextType,
} from '../../src/features/ResumeContext'
import { SocialProfiles } from '../../src/features/SocialProfiles'
import { Address } from './Address'
import {
  StyledButtonWrap,
  StyledName,
  StyledSummary,
  StyledLabel,
  StyledAboutMeArticle,
  StyledAboutMeImg,
  StyledSeparator,
  StyledArrow,
  StyledButton,
  StyledLink,
  StyledNav,
  StyledFigCaption,
  StyledFigure,
} from './styled'

export default class AboutPage extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    const {
      profiles,
      name,
      label = '',
      picture,
      summary,
      telephone,
      email,
    } = this.context.basics

    return (
      <>
        <StyledAboutMeArticle>
          <SocialProfiles />
          <StyledFigure>
            <StyledAboutMeImg src={picture} alt="about me picture" />
            <StyledFigCaption>
              <StyledName>{name}</StyledName>
              <StyledLabel>
                {label.split('⇔').shift()}
                <StyledArrow>↔</StyledArrow>
                {label.split('⇔').pop()}
              </StyledLabel>
              <StyledSeparator />
              <StyledSummary>{summary}</StyledSummary>
              <StyledNav>
                <section>
                  <header>Phone</header>
                  <StyledLink to={`tel:${telephone}`}>+{telephone}</StyledLink>
                </section>
                <section>
                  <header>Email</header>
                  <StyledLink to={`mailto:${email}`}>{email}</StyledLink>
                </section>
              </StyledNav>
              <StyledButtonWrap>
                <StyledButton>Portfolio</StyledButton>
              </StyledButtonWrap>
            </StyledFigCaption>
          </StyledFigure>
        </StyledAboutMeArticle>
      </>
    )
  }
}
