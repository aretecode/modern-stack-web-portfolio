import 'jest'
import { toResumesBindings } from '../index'

describe('getResumes', () => {
  it('should work at least', async () => {
    const binding = await toResumesBindings()
    const response = await binding.getResumes()
    expect(response).toMatchSnapshot()
  })
})
