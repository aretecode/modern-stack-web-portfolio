import * as React from 'react'
import { ResumeContext, ResumeContextType } from '../../features/ResumeContext'

export default class Skills extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    const { profiles } = this.context.basics
    return (
      <aside>
        <header>skills</header>
        <ol>
          <li>skill 1</li>
        </ol>
        {profiles.map(x => (
          <span {...x} />
        ))}
      </aside>
    )
  }
}
