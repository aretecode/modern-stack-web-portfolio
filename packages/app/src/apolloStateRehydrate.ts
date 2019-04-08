/**
 * @file has side effects, can export and call in side effects setup file
 */
import { gql } from 'apollo-boost'
import { client } from './apolloClient'
import { resumeKeyValStore } from './storage'

/**
 * @todo move to queries
 */
const SetResume = gql`
  mutation SetResume($basics: Basics, $work: [Work]) {
    setResume(basics: $basics, work: $work) @client {
      __typename
      responseMessage
    }
  }
`

function rehydrate() {
  return resumeKeyValStore.get('resume').then(async resume => {
    if (resume !== undefined) {
      await client.mutate({
        mutation: SetResume,
        variables: resume,
      })
    }
  })
}

/**
 * @note - does not work by updating `defaults` in apolloState
 */
if (typeof window === 'object') {
  rehydrate()
}
