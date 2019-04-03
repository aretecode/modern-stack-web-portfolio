import { gql } from 'apollo-server'

export default gql`
  type Resume {
    id: ID!
    userId: Int
    title: String
    completed: Boolean
  }

  input ResumeInput {
    title: String
    completed: Boolean = false
  }

  type Query {
    todo(id: ID!): Resume
    todos: [Resume]
  }
  type Mutation {
    createResume(userId: Int!, input: ResumeInput!): Resume
    updateResume(id: ID!, input: ResumeInput!): Resume
    toggleResume(id: ID!): Resume
    deleteResume(id: ID!): String
  }
`
