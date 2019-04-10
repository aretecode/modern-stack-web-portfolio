import { mergeTypeDefs } from 'graphql-toolkit'
import { GraphQLModule } from '@graphql-modules/core'
import Schema from './schema'
import resolver from './resolver'
import { ResumeAPI } from './requests'

export const resumeModule = new GraphQLModule<{}, {}, {}>({
  name: 'Resume',
  typeDefs: mergeTypeDefs([Schema]),
  resolvers: resolver,
  dataSources: () => ({
    resume: new ResumeAPI(),
  }),
})
