import * as React from 'react'
import { render, waitForElement } from 'react-testing-library'
import { defaultApolloStateResume } from '../apolloState'
import App from '../App'

const sleep = async (time: number) => Promise.resolve(time)

describe('app', () => {
  it('should match snapshot', async () => {
    const view = <App />
    const { container, getByTestId, rerender, getByText } = render(view)
    rerender(view)
    console.log('[tests] App - waiting')
    await waitForElement(() =>
      getByText(defaultApolloStateResume.work[0].company)
    )
    await sleep(5000)

    console.log('[tests] App - waited')
    expect(container).toMatchSnapshot()
  })
})
