import { gql } from 'apollo-boost'

/**
 * @todo dynamically toggle `@client`
 * - could export as template string, but then we cannot optimize with babel
 * - could write a second query and compare perf on both
 * - apolloState is imported by apolloClient
 *   so how to do the circular dep if apolloState is supposed to fetch non-client?
 *   - could inject
 *   - could `require`
 *   - could `fetch`
 *   - could do a `link`
 *   - could search
 */
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

        resumeWebsite
        skills

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
