// tslint:disable typedef
// @lint: ^ this is because we have typings, no need to define for each
import { gql } from 'apollo-boost'
import { withClientState } from 'apollo-link-state'
import { cache } from './apolloCache'
import { logger } from './log'
import { Resolvers, ResumeType } from './typings'
import { addTypeName } from './utils/addTypeName'
import ResumeQuery from './queries/Resume.graphql'

const typeDefs = gql`
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

  type AddOrUpdateResumeResponse {
    responseMessage: string
  }

  type Query {
    resume(id: ID): [Resume]
  }
  type Mutation {
    setResume(basics: Basics, work: [Work]): AddOrUpdateResumeResponse!
    addWork(id: ID, time: Work): AddOrUpdateResumeResponse!
  }
`

const apolloState = {
  defaults: {
    resume: {
      __typename: 'Resume',
      basics: {
        __typename: 'Basics',
        name: 'eh',
        label: '?',
        picture: 'http://...',
        email: 'email@teainahat.com',
        telephone: '1250',
        website: 'https://eh.com',
        summary: 'summary',
        profiles: [
          {
            __typename: 'Profile',
            network: 'linkedin?',
            username: 'aretecode',
            url: 'https://www.linkedin.com/in/james-wiens/',
          },
        ],
        address: 'address',
        postalCode: 'v9j',
        city: 'vancouver',
        countryCode: 'CA',
        region: 'BC',
      },
      work: [
        {
          __typename: 'Work',
          company: 'Skava, an Infosys company',
          position: 'senior lead technical architect',
          website: 'https://skava.com',
          startDate: '01/02/2017',
          endDate: 'current',
          summary: 'eh',
          highlights: 'yay',
        },
      ],
    },
  },
  resolvers: {
    Query: {
      async resume(obj, args, context, info) {
        logger.info('[query] resume')

        const data = context.cache.read<{resume: ResumeType}>({
          query: ResumeQuery,
          optimistic: true,
        })

        logger.log({data})

        return {...data!.resume}
        // return {
        //   __typename: 'Resume',
        //   basics: {
        //     __typename: 'Basics',
        //     name: 'eh',
        //   },
        // }
      },
    },
    Mutation: {
      /**
       * @todo generate typings from graphql schema & import
       * @todo add schema for this
       */
      async addResume(obj, args: {id?: string; basic: {}; profiles: unknown[]}, context, info) {
        logger.info('[query] setTime')
        logger.dir(args)

        const updated = {
          __typename: 'Resume',
          basics: {
            __typename: 'Basics',
            ...args.basic,
            profiles: addTypeName('Profile', args.profiles),
          },
          work: addTypeName('Work', args.profiles),
        }

        context.cache.writeData({
          data: updated,
        })

        return {}
      },
    },
  } as Resolvers,
}

const stateLink = withClientState({
  cache,
  typeDefs,
  ...apolloState,
})

export { stateLink }
