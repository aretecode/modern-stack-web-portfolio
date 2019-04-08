/**
 * not sure if having any here is best
 */
export const EMPTY_OBJ = Object.freeze({}) as
  | Readonly<{ [key: string]: any }>
  | { [key: string]: any }
export const EMPTY_ARRAY = Object.freeze([]) as ReadonlyArray<any> | any[]
