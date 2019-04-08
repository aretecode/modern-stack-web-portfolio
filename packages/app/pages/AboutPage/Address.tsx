import * as React from 'react'
import {
  ResumeContext,
  ResumeContextType,
} from '../../src/features/ResumeContext'

export class Address extends React.PureComponent {
  static contextType = ResumeContext
  readonly context: ResumeContextType

  render() {
    const {
      address,
      postalCode,
      city,
      countryCode,
      region,
    } = this.context.basics

    return (
      <address>
        {address}, {postalCode}, {city}, {region}, {countryCode}
      </address>
    )
  }
}
