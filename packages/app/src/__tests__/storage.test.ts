import { resumeKeyValStore } from '../storage'
import { defaultApolloStateResume } from '../apolloState'

describe('storage', () => {
  it('should work in node using a map', async () => {
    const initialValue = await resumeKeyValStore.get('resume')
    expect(initialValue).toEqual(undefined)

    await resumeKeyValStore.set('resume', defaultApolloStateResume as any)

    const valueGottenAfterSetting = await resumeKeyValStore.get('resume')
    expect(valueGottenAfterSetting).toEqual(defaultApolloStateResume)

    const keys = Array.from(await resumeKeyValStore.keys())
    expect(Array.isArray(keys)).toEqual(true)
    expect(keys.length).toEqual(1)

    await resumeKeyValStore.delete('resume')
    const valueGottenAfterDeleting = await resumeKeyValStore.get('resume')
    expect(valueGottenAfterDeleting).toEqual(undefined)

    await resumeKeyValStore.set('resume', defaultApolloStateResume as any)
    await resumeKeyValStore.clear()
    const valueGottenAfterClearing = await resumeKeyValStore.get('resume')
    expect(valueGottenAfterClearing).toEqual(undefined)
  })
})
