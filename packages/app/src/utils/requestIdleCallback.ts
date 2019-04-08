/**
 * @api @see https://developers.google.com/web/updates/2015/08/using-requestidlecallback
 * @see https://github.com/Microsoft/TypeScript/issues/21309
 */
import { EMPTY_OBJ } from './EMPTY'

export type RequestIdleCallbackHandle = any
export interface RequestIdleCallbackOptions {
  timeout: number
}
export interface RequestIdleCallbackDeadline {
  readonly didTimeout: boolean
  timeRemaining: () => number
}
export type RequestIdleCallbackFunctionArgType = (
  deadline: RequestIdleCallbackDeadline
) => void
export type RequestIdleCallbackFunctionType = (
  callback: RequestIdleCallbackFunctionArgType,
  opts?: RequestIdleCallbackOptions
) => RequestIdleCallbackHandle
export type CancelIdleCallbackFunctionType = (
  handle: RequestIdleCallbackHandle
) => void

const IS_BROWSER = typeof window === 'object'

/**
 * @todo add env for #compat builds
 *       so when we build with RESS
 *       the modern build does not include a polyfill
 */
export const requestIdleCallback: RequestIdleCallbackFunctionType =
  IS_BROWSER && 'requestIdleCallback' in window
    ? (window as any).requestIdleCallback
    : process.env.NODE_ENV === 'test'
    ? function(cb: RequestIdleCallbackFunctionArgType) {
        return cb(EMPTY_OBJ as any)
      }
    : function(cb: RequestIdleCallbackFunctionArgType) {
        const start = Date.now()
        const handleTimeout = () => {
          cb({
            didTimeout: false,
            timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
          })
        }
        return setTimeout(handleTimeout, 1)
      }

export const cancelIdleCallback: CancelIdleCallbackFunctionType = IS_BROWSER
  ? (window as any).cancelIdleCallback
  : clearTimeout
