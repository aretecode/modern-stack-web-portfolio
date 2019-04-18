import * as React from 'react'
import { render } from 'react-testing-library'
import { ResumeContext } from '../../ResumeContext'
import { SocialProfileIcon } from '../SocialProfileIcon'
import SocialProfiles from '../SocialProfiles'
import { defaultApolloStateResume } from '../../../apolloState'

describe('SocialProfiles', () => {
  it('should render icon for name', () => {
    const { container } = render(<SocialProfileIcon icon="pdf" />)
    expect(container).toMatchSnapshot()
  })
  it('should render all for context', () => {
    const { container } = render(
      <ResumeContext.Provider value={defaultApolloStateResume}>
        <SocialProfiles />
      </ResumeContext.Provider>
    )
    expect(container).toMatchSnapshot()
  })
})
