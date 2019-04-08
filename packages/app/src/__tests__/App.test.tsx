import * as React from 'react'
import { render } from 'react-testing-library'
import App from '../App'

describe('app', () => {
  it('should match snapshot', () => {
    const { container } = render(<App />)
    expect(container.innerHTML).toMatchSnapshot()
  })
})
