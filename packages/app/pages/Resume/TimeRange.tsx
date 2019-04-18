import * as React from 'react'
import { StyledSeparator } from '../../src/features/Separator'
import { StyledTime } from './styled'

export interface TimeRangeProps {
  endDate: string
  startDate: string
}

/**
 * could use date-fns here
 */
export class TimeRange extends React.PureComponent<TimeRangeProps> {
  render() {
    const { startDate, endDate } = this.props
    return (
      <>
        <StyledTime datetime={startDate}>{startDate}</StyledTime>
        <StyledSeparator />
        <StyledTime datetime={endDate}>{endDate}</StyledTime>
      </>
    )
  }
}
