import * as React from 'react'
import { render, fireEvent } from 'react-testing-library'
import App from '../App'

describe('example', () => {
  it('simple react test', () => {
    const handleSubmit = (serialized: {}) => 'submitted'
    const mockSubmit = jest.fn(handleSubmit)

    const {getByText} = render(
      <App>
        <button onClick={mockSubmit}>Continue</button>
      </App>
    )
    expect(mockSubmit.mock.calls.length).toEqual(0)

    fireEvent.click(getByText(/Continue/))
    expect(mockSubmit.mock.calls.length).toEqual(1)
  })
})
