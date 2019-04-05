import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Query } from 'react-apollo'
import ResumeQuery from '../queries/Resume.graphql'
import { ResumeType } from '../typings'

/**
 * @todo now Provide `work` & `basics` ?
 */
export default class ResumePage extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>resume</title>
        </Helmet>
        <Query<ResumeType> query={ResumeQuery}>
          {response => {
            console.log({response})
            return <>eh</>
          }}
        </Query>
      </>
    )
  }
}
