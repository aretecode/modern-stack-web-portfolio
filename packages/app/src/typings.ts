/**
 * === basics ===
 */
export type Primitive = string | number | boolean | symbol | null | undefined | void

export type SafePrimitive = string | number | boolean | symbol

/**
 * === serialized ===
 */
export interface SerializedObj {
  [key: string]: Primitive | FrozenSerializedObj | FrozenSerializedArray
  [key: number]: Primitive | FrozenSerializedObj | FrozenSerializedArray
}

export type FrozenSerializedObj = Readonly<SerializedObj>

export interface FrozenSerializedArray extends Readonly<Serialized[]> {
  readonly(x: number): Serialized
}

export type Serialized = SerializedObj | Primitive | FrozenSerializedObj | FrozenSerializedArray

export type Real = AnyArrayOrObj | SafePrimitive

/**
 * === any ===
 */

export interface AnyObj extends Object {
  [key: string]: any
  [key: number]: any
}

export type AnyArray = any[]

export type AnyArrayOrObj = (AnyObj & AnyArray) | AnyObj | AnyArray

export type AnyFunction = (...args: any[]) => any

/**
 * === empty ===
 */

export type Empty = {[key: string]: never} | EmptyArray | '' | EmptySet | EmptyMap
export interface EmptyMap<Key = string, Value = any> extends Map<Key, Value> {
  size: 0
}
export interface EmptySet<Value = any> extends Set<Value> {
  size: 0
}
export interface EmptyArray<Value = any> extends Array<Value> {
  length: 0
}

/**
 * === apollo ===
 */
import { ApolloCache } from 'apollo-cache'
import { NormalizedCacheObject } from 'apollo-cache-inmemory'

export type ResolverContext<ContextType extends object = {}> = {
  [key: string]: unknown
  cache: ApolloCache<NormalizedCacheObject>
} & ContextType

export type Resolver<
  ArgsType extends object = AnyObj,
  ContextType extends object = {},
  ResponseType extends object = AnyObj
> = (
  obj: unknown,
  args: ArgsType,
  context: ResolverContext<ContextType>,
  info: unknown
) => ResponseType | Promise<ResponseType>

export interface Resolvers<
  ArgsType extends object = AnyObj,
  ContextType extends object = {},
  ResponseType extends object = AnyObj
> {
  Mutation?: {[key: string]: Resolver<ArgsType, ContextType, ResponseType>}
  Query?: {[key: string]: Resolver<ArgsType, ContextType, ResponseType>}
}

/**
 * === data ===
 */

export interface ProfileType {
  network: string
  username: string
  url: string
}
export interface BasicsType {
  name: string
  label: string
  picture: string
  email: string
  telephone: string
  website: string
  summary: string
  address: string
  postalCode: string
  city: string
  countryCode: string
  region: string
  profiles: [ProfileType]
}
export interface WorkType {
  company: string
  position: string
  website: string
  startDate: string
  endDate: string
  summary: string
  highlights: [string]
}
export interface ResumeType {
  id: string
  basics: BasicsType
  work: [WorkType]
}
