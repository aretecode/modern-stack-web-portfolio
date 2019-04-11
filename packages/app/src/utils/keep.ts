/**
 * @see https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
 */
import { AnyObj } from '../typings'

export type StringList = string[] | ReadonlyArray<string>

/**
 * @todo typings for return like omit
 */
export const keep = <Obj = AnyObj, List extends StringList = StringList>(
  obj: Obj,
  keys: List
) => {
  const result = {}
  Object.keys(obj)
    .filter(key => keys.includes(key))
    .forEach(key => {
      result[key] = obj[key]
    })
  return result as any
}
