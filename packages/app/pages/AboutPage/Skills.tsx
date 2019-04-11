import * as React from 'react'
import {
  ResumeContext,
  ResumeContextType,
} from '../../src/features/ResumeContext'

export default class Skills extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    const { skills } = this.context.basics
    return (
      <aside>
        <header>skills</header>
        <ol>
          {skills.map(x => (
            <li key={x}>{x}</li>
          ))}
        </ol>
      </aside>
    )
  }
}
