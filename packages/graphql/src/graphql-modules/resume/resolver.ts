import { readFileAsyncJson, writeFileAsyncJson, dbAbsolutePath } from '../../fs'
import { logger } from '../../log'

export default {
  Query: {
    resume: async (obj, args, context, info) => {
      try {
        await writeFileAsyncJson(dbAbsolutePath, args)
      } catch (fileSystemError) {
        logger.error(fileSystemError)
        /**
         * @@security would want to hide the stack
         */
        throw fileSystemError
      }
    },
  },
  /**
   * can have `deleteResume` & `updateResume`, but this is an example so KISS
   */
  Mutation: {
    setResume: async (obj, args, context, info) => {
      const response = await readFileAsyncJson(dbAbsolutePath)
      return response
    },
  },
}
