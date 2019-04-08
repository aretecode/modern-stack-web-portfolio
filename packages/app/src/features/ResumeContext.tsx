/**
 * can split ResumeContext & ResumeProvider
 */
import * as React from 'react'
import { Query } from 'react-apollo'
import { EMPTY_OBJ, EMPTY_ARRAY } from '../utils/EMPTY'
import ResumeQuery from '../graphql/Resume'
import { ResumeResponse, GraphqlProps, BasicsType, WorkType } from '../typings'

export interface ResumeContextType {
  isLoading?: boolean
  basics: BasicsType
  work: WorkType[]
}

export const EMPTY_RESUME_CONTEXT = Object.freeze({
  basics: EMPTY_OBJ,
  work: EMPTY_ARRAY,
}) as ResumeContextType

export const ResumeContext = React.createContext<ResumeContextType>(
  EMPTY_RESUME_CONTEXT
)

export class ResumeProvider extends React.PureComponent {
  renderContext = (response: GraphqlProps<ResumeResponse>) => {
    /**
     * @todo @@perf can simplify & improve
     */
    const data = { resume: EMPTY_ARRAY, ...response.data! }
    const { refetch, loading } = response
    const resume = {
      basics: data.resume.basics || {
        profiles: EMPTY_ARRAY,
      },
      work: data.resume.work || EMPTY_ARRAY,
    }
    const value = { isLoading: !!loading, refetch, ...resume }

    return (
      <ResumeContext.Provider value={value}>
        {this.props.children}
      </ResumeContext.Provider>
    )
  }

  render() {
    return (
      <Query<ResumeResponse> query={ResumeQuery} pollInterval={5000}>
        {this.renderContext}
      </Query>
    )
  }
}
