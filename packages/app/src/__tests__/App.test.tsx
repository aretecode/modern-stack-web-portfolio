import * as React from 'react'
import { render, waitForElement } from 'react-testing-library'
import App from '../App'

const sleep = async (time: number) => Promise.resolve(time)

describe('app', () => {
  it('should match snapshot', async () => {
    const view = <App />
    const { container, getByTestId, rerender } = render(view)
    rerender(view)
    console.log('[tests] App - waiting')
    await waitForElement(() => getByTestId('test-styled-card'))
    await sleep(5000)

    console.log('[tests] App - waited')
    expect(container).toMatchSnapshot()
  })
})
