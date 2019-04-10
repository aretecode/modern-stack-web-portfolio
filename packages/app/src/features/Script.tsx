import * as React from 'react'
import { isObj } from '../utils/is'

export type ScriptProps =
  | { src: string }
  | { type?: string; children: { [key: string]: unknown } }
export interface CombinedScriptProps {
  src: string
  type?: string
  children: { [key: string]: unknown }
}

function serializeScriptChildren(children: unknown) {
  return isObj(children)
    ? process.env.NODE_ENV === 'development'
      ? JSON.stringify(children, undefined, 2)
      : JSON.stringify(children)
    : children
}

/**
 * could have defaultProps for type
 * can split render to small fns
 */
export class Script extends React.PureComponent<ScriptProps> {
  render() {
    const { type, src, children, ...remainingProps } = this
      .props as CombinedScriptProps

    const json = serializeScriptChildren(children)
    const scriptType =
      type === undefined && isObj(children) ? 'application/ld+json' : type

    if (src === undefined) {
      // tslint:disable:comment-type
      /* eslint-disable react/jsx-curly-spacing */
      /* eslint-disable react/no-danger */
      return (
        <script
          type={scriptType}
          {...remainingProps}
          dangerouslySetInnerHTML={{ __html: json }}
        />
      )
    } else {
      return <script src={src} {...remainingProps} />
    }
  }
}
