// tslint:disable typedef
// @lint: ^ this is because we have typings, no need to define for each
import { gql } from 'apollo-boost'
import { withClientState } from 'apollo-link-state'
import { cache } from './apolloCache'
import { logger } from './log'
import { Resolvers, ResumeType } from './typings'
import { addTypeName } from './utils/addTypeName'
import ResumeQuery from './graphql/Resume'

export const typeDefs = gql`
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
    resumeWebsite: string
    skills: [string]
  }
  type Work {
    company: string
    position: string
    startDate: string
    endDate: string
    summary: string
    highlights: [string]
    website: string
    picture: string
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
  }
`

export const apolloState = {
  defaults: {
    // @todo WithTypeNameStrings<ResumeType>
    resume: {
      __typename: 'Resume',
      basics: {
        __typename: 'Basics',
        name: '',
        label: '',
        picture: '',
        email: '',
        telephone: '',
        website: '',
        summary: '',
        profiles: [],
        address: '',
        postalCode: '',
        city: '',
        countryCode: '',
        region: '',
        resumeWebsite: '',
        skills: [],
      },
      work: [],
    } as any,
  },
  resolvers: {
    Query: {
      async resume(obj, args, context, info) {
        logger.info('[query] resume')

        const data = context.cache.read<{ resume: ResumeType }>({
          query: ResumeQuery,
          optimistic: true,
        })

        logger.log({ data })

        return { ...data!.resume }
      },
    },
    Mutation: {
      /**
       * @todo generate typings from graphql schema & import
       * could flatten it out
       */
      async setResume(
        obj,
        args: { id?: string; basics: { profiles?: {} }; work: unknown[] },
        context,
        info
      ) {
        logger.info('[mutation] setResume')
        logger.dir(args)

        const updated = {
          __typename: 'Resume',
          basics: {
            __typename: 'Basics',
            ...args.basics,
            profiles: addTypeName('Profile', args.basics.profiles),
          },
          work: addTypeName('Work', args.work),
        }
        logger.info('[mutation] updated')
        logger.info(updated)

        context.cache.writeData({
          data: {
            resume: { ...updated },
            ...updated,
          },
        })

        return {
          __typename: 'AddOrUpdateResumeResponse',
          responseMessage: 'Success if it does not throw?',
        }
      },
    },
  } as Resolvers,
}

export const stateLink = withClientState({
  cache,
  typeDefs,
  ...apolloState,
})
