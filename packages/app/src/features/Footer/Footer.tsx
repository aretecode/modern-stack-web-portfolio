import * as React from 'react'
import { StyledFooter } from './styled'
import { ResumeContext, ResumeContextType } from '../ResumeContext'

export default class Footer extends React.PureComponent<{
  className?: string
}> {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    return (
      <StyledFooter {...this.props}>
        <p>
          <span>©{new Date().getFullYear()}</span>{' '}
          <span>{this.context.basics.name}</span>
        </p>
      </StyledFooter>
    )
  }
}
