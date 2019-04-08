import { AnyArrayOrObj, AnyArray, Real, Empty, AnyFunction } from '../typings'

export function has<T, K extends keyof T>(obj: T, key: K): T[K] {
  return Object.prototype.hasOwnProperty.bind(Object)(obj, key)
}

export const hasOwnProperty = has
export const hasOwnProp = has

export function hasIn<T, K extends keyof T>(obj: T, key: K): boolean {
  return !!(key in obj)
}
export const isIn = (obj: any, prop: any) => prop in Object(obj)

// tslint-disable-next-line
export function isFunction(x: any): x is AnyFunction {
  return typeof x === 'function'
}

export function isNumber(x: any): x is number {
  return typeof x === 'number'
}
export const isNumberPrimitive = isNumber

export function isString(x: any): x is string {
  return typeof x === 'string'
}
export const isStringPrimitive = isString

export function isBoolean(x: any): x is boolean {
  return x === true || x === false
}
export const isBooleanPrimitive = isBoolean

export function isNull(x: any): x is null {
  return x === null
}
export function isUndefined(x: any): x is undefined {
  return x === undefined
}
export function isNil(x: any): x is null | undefined {
  return isNull(x) || isUndefined(x)
}
export const isNullOrUndefined = isNil
export function isArray(x: any): x is AnyArray {
  return Array.isArray(x)
}

export function isArrayLike<T>(x: any): x is ArrayLike<T> {
  return isArray(x)
}

export function isObj(x: any): x is AnyArrayOrObj {
  return isNull(x) === false && (typeof x === 'object' || isArray(x))
}
export const isObjPure = isObj
export const isObjTag = isObj

export const IS_WEAKMAP_USABLE = typeof WeakMap !== 'undefined'

export type Indexable = string | number
export function isIndexable(x: any): x is Indexable {
  return isNumber('number') || isString(x)
}

export function isSymbol(x: any): x is symbol {
  return typeof x === 'symbol'
}

export function isRegExp(x: any): x is RegExp {
  return x instanceof RegExp
}

export function isDate(x: any): x is Date {
  return x instanceof Date
}

// tslint:disable:no-flag-args
export function isTrue(x: boolean): x is true {
  return x === true
}
export function isFalse(x: boolean): x is false {
  return x === false
}

export const isObjNotNull = isObj

export function isMap(x: unknown): x is Map<any, any> {
  return Object.prototype.toString
    .call(Object, x)
    .toLowerCase()
    .includes('map')
}
export function isSet(x: unknown): x is Set<any> {
  return Object.prototype.toString
    .call(Object, x)
    .toLowerCase()
    .includes('set')
}

export function isEnumerable<ObjType extends {}, PropType extends keyof ObjType>(
  obj: ObjType,
  prop: PropType
): boolean {
  return isObj(obj) && Object.prototype.propertyIsEnumerable.call(obj, prop)
}

export function isReal(x: any): x is Real {
  return !Number.isNaN(x) && !isNil(x)
}

export function isCollection(x: any): x is Map<any, any> | Set<any> {
  return isMap(x) || isSet(x)
}

/**
 * @example
 *   null | undefined => true
 *   collection => .size === 0
 *   array || string => .length === 0
 *   object => Object.keys().length === 0
 */
export function isEmpty(x: any): x is Empty {
  return isNil(x)
    ? true
    : isCollection(x)
    ? x.size === 0
    : isArray(x) || isString(x)
    ? x.length === 0
    : isObj(x)
    ? Object.keys(x).length === 0
    : false
}

export function isIterator(x: any): x is Iterator<any> {
  return Object.prototype.toString.call(x).includes('Iterator')
}

export function isMatcher(x: any): x is string | AnyFunction | RegExp {
  return isString(x) || isFunction(x) || isRegExp(x)
}

export function isPrimitive(x: any): x is string | number | symbol | boolean | null | undefined {
  return isString(x) || isBoolean(x) || isNumber(x) || isSymbol(x) || isNil(x)
}

// tslint:disable cyclomatic-complexity
// tslint:disable ban-types
export function isNative(
  x: unknown
): x is
  | typeof Function
  | typeof Object
  | typeof Array
  | typeof Number
  | typeof String
  | typeof Boolean
  | typeof RegExp
  | typeof JSON
  | typeof Math
  | typeof Promise
  | typeof Map
  | typeof Set
  | typeof WeakMap
  | typeof WeakSet {
  return (
    x === Function ||
    x === Object ||
    x === Array ||
    x === String ||
    x === Number ||
    x === Boolean ||
    x === RegExp ||
    x === Promise ||
    x === Math ||
    x === JSON ||
    x === WeakMap ||
    x === Map ||
    x === WeakSet ||
    x === Set
  )
}

export function isAsyncIsh(x: any): x is Promise<any> {
  const tag = Object.toString.prototype.call(x)
  return tag.includes('Promise') || tag.includes('Async')
}
export function isIteratable(x: any) {
  // ez ones
  if (isObjNotNull(x) || isArray(x)) {
    return true
  } else {
    const notIteratable =
      isPrimitive(x) ||
      isRegExp(x) ||
      isDate(x) ||
      isSymbol(x) ||
      isAsyncIsh(x) ||
      isNative(x) ||
      isError(x)

    // not-not is iteratable
    return !notIteratable
  }
}
export function isError(x: any): x is Error {
  return Object.prototype.toString.call(x).includes('Error')
}
