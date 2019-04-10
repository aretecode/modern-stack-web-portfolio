import * as React from 'react'
import styled from 'styled-components'
import { ProfileType } from '../../typings'
import { ResumeContext, ResumeContextType } from '../ResumeContext'
import { StyledLink } from '../Link'
import { SocialProfileIcon, IconNameType } from './SocialProfileIcon'

export const StyledSocialProfilesWrap = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  justify-content: space-between;
`

export const StyledSocialProfileIcon = styled(SocialProfileIcon)`
  width: 2rem;
  height: 2rem;
`

export function renderProfileItem(profile: ProfileType, index?: number) {
  return (
    <StyledLink
      rel="me"
      href={profile.url}
      title={profile.username}
      key={profile.url}
    >
      <StyledSocialProfileIcon icon={profile.network} />
    </StyledLink>
  )
}

/**
 * @poc
 *    <img src="https://user-images.githubusercontent.com/4022631/55691849-01c82e80-59c0-11e9-8c5b-69f64a055b1f.png" />
 */
export default class SocialProfiles extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    return (
      <StyledSocialProfilesWrap>
        {this.context.basics.profiles.map(renderProfileItem)}
        {renderProfileItem({
          url: this.context.basics.resumeWebsite,
          username: 'download resume',
          network: 'pdf',
        })}
      </StyledSocialProfilesWrap>
    )
  }
}
