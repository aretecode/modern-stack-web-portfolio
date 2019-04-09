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
          <figure>
            <StyledAboutMeImg src={picture} alt="about me picture" />
            <figcaption>
              <StyledName>{name}</StyledName>
              <StyledLabel>
                {label.split('⇔').shift()}
                <StyledArrow>↔</StyledArrow>
                {label.split('⇔').pop()}
              </StyledLabel>
              <StyledSeparator />
              <StyledSummary>{summary}</StyledSummary>
              <nav>
                <section>
                  <header>Phone</header>
                  <StyledLink to={`tel:${telephone}`}>+{telephone}</StyledLink>
                </section>
                <section>
                  <header>Email</header>
                  <StyledLink to={`mailto:${email}`}>{email}</StyledLink>
                </section>
              </nav>
              <StyledButtonWrap>
                <StyledButton>Portfolio</StyledButton>
              </StyledButtonWrap>
            </figcaption>
          </figure>
        </StyledAboutMeArticle>
      </>
    )
  }
}
