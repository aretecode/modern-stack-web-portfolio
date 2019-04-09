import * as React from 'react'
import styled from 'styled-components'
import { AmpContextValueType, AmpContext } from './AmpContext'

/**
 * can add `<noscript><img>` inside
 * @see https://amp.dev/documentation/examples/components/amp-img/?referrer=ampbyexample.com
 */

export class Image extends React.PureComponent<
  React.ImgHTMLAttributes<HTMLImageElement>
> {
  static contextType = AmpContext
  readonly context: AmpContextValueType

  render() {
    if (this.context.isAmp === false) {
      return <img {...this.props} />
    } else {
      const { className, ...remainingProps } = this.props
      return <amp-img {...remainingProps} />
    }
  }
}

export const StyledImage = styled(Image)``
