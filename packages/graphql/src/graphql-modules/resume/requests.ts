/**
 * @see https://www.apollographql.com/docs/apollo-server/features/data-sources
 * @see https://graphql-modules.com/docs/guides/data-sources
 */
import { RESTDataSource } from 'apollo-datasource-rest'
import { Injectable } from '@graphql-modules/di'

@Injectable()
export class ResumeAPI extends RESTDataSource {
  baseURL = 'http://localhost:5555/resumes'

  async createResume(id: string) {
    return this.get(`/${id}`)
  }

  async deleteResume(id: string) {
    return this.delete(`/${id}`)
  }

  async completeResume(id: string) {
    // patch?
    return this.post(`/${id}`)
  }

  async getResume(id: string) {
    return this.get(`/${id}`)
  }

  async getResumes() {
    return this.get('/')
  }
}
