import * as React from 'react'
import { Query } from 'react-apollo'
import ResumeQuery from '../queries/Resume.graphql'
import { ResumeResponse, GraphqlProps, BasicsType, WorkType } from '../typings'

export interface ResumeContextType {
  isLoading?: boolean
  basics: BasicsType
  work: [WorkType]
}

export const ResumeContext = React.createContext<ResumeContextType>({})

export class ResumeProvider extends React.PureComponent {
  renderContext = (response: GraphqlProps<ResumeResponse>) => {
    /**
     * @todo add safety
     */
    const { resume } = response.data
    const value = { isLoading: !!response.loading, ...resume }
    return (
      <ResumeContext.Provider value={value}>
        {this.props.children}
      </ResumeContext.Provider>
    )
  }

  render() {
    return (
      <Query<ResumeResponse> query={ResumeQuery}>{this.renderContext}</Query>
    )
  }
}
