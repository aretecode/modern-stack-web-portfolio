import { gql } from 'apollo-boost'

export default gql`
  query Resume {
    resume @client {
      __typename
      basics {
        __typename
        name
        label
        picture
        email
        telephone
        website
        summary
        address
        postalCode
        city
        countryCode
        region
        profiles {
          __typename
          network
          username
          url
        }
      }
      work {
        __typename
        company
        position
        website
        startDate
        endDate
        summary
        highlights
        picture
      }
    }
  }
`
