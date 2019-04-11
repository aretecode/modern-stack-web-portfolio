import * as React from 'react'
import styled from 'styled-components'
import { AmpContextValueType, AmpContext } from './AmpContext'
import { keep } from '../utils/keep'

/**
 * @see https://amp.dev/documentation/components/amp-img
 * @see https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes
 */
export const IMAGE_PROP_LIST_TO_KEEP_IN_AMP = Object.freeze([
  'src',
  'alt',
  'attribution',
  'height',
  'width',
  // common
  'sizes',
  'children',
  'layout',
  'heights',
  'media',
  'noloading',
  'on',
  'id',
  'placeholder',
])

/**
 * can add `<noscript><img>` inside
 * @see https://amp.dev/documentation/examples/components/amp-img/?referrer=ampbyexample.com
 * @todo add `srcset` because they don't stretch
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
      const props = keep(this.props, IMAGE_PROP_LIST_TO_KEEP_IN_AMP)
      return <amp-img {...props} />
    }
  }
}

export const StyledImage = styled(Image)``
