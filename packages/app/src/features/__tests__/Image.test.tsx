import * as React from 'react'
import { render } from 'react-testing-library'
import { Image } from '../Image'
import { AmpContext } from '../AmpContext'

describe('Image', () => {
  it('should render empty without an error (except for types)', () => {
    const { container } = render(<Image />)
    expect(container).toContain('<img')
  })
  it('should render an "amp-img" when providing an AmpContext', () => {
    const { container } = render(
      <AmpContext.Provider value={{ isAmp: true }}>
        <Image />
      </AmpContext.Provider>
    )
    expect(container).toContain('<amp-img')
  })
})
