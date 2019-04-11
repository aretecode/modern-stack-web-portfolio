import * as React from 'react'
import { render } from 'react-testing-library'
import { StyledLink } from '../Link'

describe('Link', () => {
  it('should render an <a> tag when using an absolute url', () => {
    const { container } = render(<StyledLink to="https://google.ca" />)
    expect(container).toContain('<a')
  })
  it.skip('should render a react-router-dom link (or next link) when using relative links', () => {
    const { container } = render(<StyledLink to="/eh" />)
    expect(container).toContain('<a')
  })
})
