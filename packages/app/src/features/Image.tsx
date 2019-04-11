import * as React from 'react'
import styled from 'styled-components'
import { AmpContextValueType, AmpContext } from './AmpContext'
import { keep } from '../utils/keep'

/**
 * @see https://amp.dev/documentation/components/amp-img
 * @see https://amp.dev/documentation/guides-and-tutorials/learn/common_attributes
 * @todo ^ add typings
 * @todo get image width & height on node side (which is rendered on server only anyway if in amp context)
 */
export const IMAGE_PROP_LIST_TO_KEEP_IN_AMP = Object.freeze([
  'src',
  'alt',
  'attribution',
  'height',
  'width',
  'fallback',
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
  | React.ImgHTMLAttributes<HTMLImageElement>
  | ({
      src: string
      width: number | string
      height: number | string
      layout?: 'responsive' | string
      attribution?: string
      heights?: string
      media?: string
      on?: string
      placeholder?: string
      sizes?: string
      fallback?: boolean
      noloading?: boolean
    } & React.ImgHTMLAttributes<HTMLImageElement>)
> {
  static contextType = AmpContext
  readonly context: AmpContextValueType

  render() {
    if (this.context.isAmp === false) {
      return <img {...this.props} />
    } else {
      const props = keep(this.props, IMAGE_PROP_LIST_TO_KEEP_IN_AMP)
      return <amp-img layout="responsive" {...props} />
    }
  }
}

export const StyledImage = styled(Image)``
