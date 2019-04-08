import { gql } from 'apollo-boost'

export default gql`
  mutation SetResume($basics: Basics, $work: [Work]) {
    setResume(basics: $basics, work: $work) @client {
      __typename
      responseMessage
    }
  }
`
