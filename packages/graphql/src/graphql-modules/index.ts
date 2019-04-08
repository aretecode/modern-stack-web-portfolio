import { GraphQLModule } from '@graphql-modules/core'
import { resumeModule } from './resume'

export const appModules = new GraphQLModule({
  name: 'App',
  imports: [resumeModule],
})
