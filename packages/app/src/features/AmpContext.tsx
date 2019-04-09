/**
 * * @todo need an `AmpContext`
 *   - tweak which tag is used (_can change with `as=`_)
 *   - detect with query in req
 */
import { createContext } from 'react'

export interface AmpContextValueType {
  isAmp: boolean
}

export const AmpContext = createContext<AmpContextValueType>({
  isAmp:
    process.env.NODE_ENV !== 'test' && typeof window === 'object'
      ? window.location.href.includes('?amp')
      : false,
})
