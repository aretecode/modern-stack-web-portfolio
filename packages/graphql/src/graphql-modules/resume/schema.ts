import { gql } from 'apollo-server'

/**
 * @todo simpler resume schema?
 * @see https://jsonresume.org/
 */
export default gql`
  scalar string

  # response
  type ProfileType {
    network: string
    username: string
    url: string
  }
  type BasicsType {
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
    profiles: [ProfileType]
  }
  type WorkType {
    company: string
    position: string
    startDate: string
    endDate: string
    summary: string
    highlights: [string]
    website: string
    picture: string
  }
  type ResumeType {
    id: ID
    basics: BasicsType
    work: [WorkType]
  }

  # response
  type AddOrUpdateResumeResponse {
    responseMessage: string
  }

  # @todo extends type?
  input ProfileInputType {
    network: string
    username: string
    url: string
  }
  input BasicsInputType {
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
    profiles: [ProfileInputType]
  }
  input WorkInputType {
    company: string
    position: string
    startDate: string
    endDate: string
    summary: string
    highlights: [string]
    website: string
    picture: string
  }
  input ResumeInputType {
    id: ID
    basics: BasicsInputType
    work: [WorkInputType]
  }

  type Query {
    resume(id: ID!): ResumeType
    resumes: [ResumeType]
  }
  type Mutation {
    createResume(userId: Int!, input: ResumeInputType!): ResumeType
    updateResume(id: ID!, input: ResumeInputType!): ResumeType
    toggleResume(id: ID!): ResumeType
    deleteResume(id: ID!): String
  }
`
