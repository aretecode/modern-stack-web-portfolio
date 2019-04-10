import fetch from 'node-fetch'

const resumeBaseUrl = `http://localhost:5555/resumes`

export default {
  Query: {
    resume: async (obj, args, context, info) => {
      const { id } = args
      const res = await fetch(`${resumeBaseUrl}/${id}`)
      const response = await res.json()

      console.log(response)

      return response
    },
    resumes: async (obj, args, context, info) => {
      const res = await fetch(`${resumeBaseUrl}`)
      const response = await res.json()

      console.log(response)
      return response
    },
  },
  Mutation: {
    createResume: async (obj, args, context, info) => {
      const { userId, input } = args
      const { title, completed } = input

      const res = await fetch(resumeBaseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: userId ? userId : 0,
          title,
          completed: false,
        }),
      })

      const response = await res.json()

      return response
    },
    updateResume: async (obj, args, context, info) => {
      const { id, input } = args

      const res = await fetch(`${resumeBaseUrl}/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...input,
        }),
      })

      const response = await res.json()

      return response
    },
    deleteResume: async (obj, args, context, info) => {
      const { id } = args

      const res = await fetch(`${resumeBaseUrl}/${id}`, {
        method: 'DELETE',
      })

      return res.statusText
    },
  },
}
