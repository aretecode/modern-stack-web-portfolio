import { readFileAsyncJson, writeFileAsyncJson, dbAbsolutePath } from '../../fs'
import { logger } from '../../log'

export default {
  Query: {
    resume: async (obj, args, context, info) => {
      try {
        const response = await readFileAsyncJson(dbAbsolutePath)
        logger.info('[resume] read file', response)
        return response
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
      try {
        logger.info('[resume] writing file from args:', args)
        await writeFileAsyncJson(dbAbsolutePath, args)
        logger.info('[resume] wrote file')
      } catch (fileSystemError) {
        logger.error(fileSystemError)

        /**
         * @see @@security above
         */
        throw fileSystemError
      }
    },
  },
}
