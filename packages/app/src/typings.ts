/**
 * === basics ===
 */
export type Primitive =
  | string
  | number
  | boolean
  | symbol
  | null
  | undefined
  | void

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

export type Serialized =
  | SerializedObj
  | Primitive
  | FrozenSerializedObj
  | FrozenSerializedArray

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
 * === helpers ===
 */

/**
 * @see https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html
 */
export type RecursiveRequired<Type> = {
  [Key in keyof Type]-?: RecursiveRequired<Type[Key]>
}

/**
 * @description to add __typename
 * @todo this does not work if it is using a type union
 *    @example `Eh[] | string[]`
 */
export type WithTypeNameRecursive<Type extends {}> = {
  [Key in keyof Type]: Type[Key] extends Primitive | Primitive[]
    ? Type[Key]
    : Type[Key] extends any[]
    ? WithTypeNameRecursive<Type[Key]>
    : Type[Key] extends {}
    ? Type[Key] & { __typename: string }
    : Type[Key]
} & { __typename?: string }

/**
 * === empty ===
 */

export type Empty =
  | { [key: string]: never }
  | EmptyArray
  | ''
  | EmptySet
  | EmptyMap
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
  Mutation?: { [key: string]: Resolver<ArgsType, ContextType, ResponseType> }
  Query?: { [key: string]: Resolver<ArgsType, ContextType, ResponseType> }
}

/**
 * === graphql react ===
 */
import { QueryResult, OperationVariables } from 'react-apollo'

export interface GraphqlPropsLoading<ResponseDataType = any> {
  loading: true
  data?: undefined
}

export interface GraphqlPropsLoaded<ResponseDataType> {
  loading: false | boolean
  data: ResponseDataType
}

export type GraphqlPropsLoadingOrLoaded<ResponseDataType> =
  | GraphqlPropsLoaded<ResponseDataType>
  | GraphqlPropsLoading<ResponseDataType>

export type PartialReadonly<Type> = Partial<Readonly<Type>>

export type GraphqlProps<
  ResponseDataType extends object = AnyObj,
  VariablesType extends OperationVariables = OperationVariables
> = {
  /**
   * @see https://github.com/Microsoft/TypeScript/issues/24413
   * @description not sure how this override will affect the condition ^
   */
  loading: boolean
  error?: Error
} & Readonly<QueryResult<ResponseDataType, VariablesType>>

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
  profiles: ProfileType[]
}
export interface WorkType {
  company: string
  position: string
  website: string
  startDate: string
  endDate: string
  summary: string
  highlights: string[] | string
  picture: string
}
export interface ResumeType {
  /** currently optional */
  id?: string
  basics: BasicsType
  work: WorkType[]
}
export interface ResumeResponse {
  resume: ResumeType
}
