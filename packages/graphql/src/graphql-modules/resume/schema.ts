import { gql } from 'apollo-server'

/**
 * @todo simpler resume schema?
 * @see https://jsonresume.org/
 */
export default gql`
  type Profile {
    network: string
    username: string
    url: string
  }
  type Basics {
    name: string
    label: string
    picture: string
    email: string
    telephone: string
    website: string
    summary: string
    address: string
    postalCode: string
    city: string
    countryCode: string
    region: string
    profiles: [Profile]
  }
  type Work {
    company: string
    position: string
    website: string
    startDate: string
    endDate: string
    summary: string
    highlights: [string]
  }
  type Resume {
    id: ID
    basics: Basics
    work: [Work]
  }

  input ResumeInput {
    id: ID
    basics: Basics
    work: Work[]
  }

  type Query {
    resume(id: ID!): Resume
    resumes: [Resume]
  }
  type Mutation {
    createResume(userId: Int!, input: ResumeInput!): Resume
    updateResume(id: ID!, input: ResumeInput!): Resume
    toggleResume(id: ID!): Resume
    deleteResume(id: ID!): String
  }
`
