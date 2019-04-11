import * as React from 'react'
import { render } from 'react-testing-library'
import { Script } from '../Script'

describe('Script', () => {
  it('should render empty without an error (except for types)', () => {
    const { container } = render(<Script />)
    expect(container.innerHTML).toContain('<script')
  })
  it('should use "application/ld+json" when children is an object', () => {
    const children = { isTest: true }
    const { container } = render(<Script children={children} />)

    expect(container.firstChild.getAttribute('type')).toEqual(
      'application/ld+json'
    )
  })
  it('should have no type when children is not an object', () => {
    const children = { isTest: true }
    const { container } = render(<Script children={children} />)
    expect(container.firstChild.getAttribute('type')).toEqual(null)
  })
})
