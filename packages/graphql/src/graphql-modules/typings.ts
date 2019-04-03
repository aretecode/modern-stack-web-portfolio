import { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import { DataSources } from 'apollo-server-core/dist/graphqlOptions'
import { ApolloError } from 'apollo-server'
import {
  GraphQLRequest,
  GraphQLResponse as ApolloGraphQLResponse,
} from 'apollo-server-core/src/requestpipelineapi'

export type LogMapKeyType = 'info' | 'error' | 'debug' | 'warn'

export type LogMapType = Map<LogMapKeyType, Set<string | any>>

export interface PinoLogFn {
  (msg: string, ...args: any[]): void
  (obj: object, msg?: string, ...args: any[]): void
}

export type CompatibleLogger<Base = unknown> = (Base extends unknown
  ? {[key: string]: any}
  : Base) & {
  info: PinoLogFn
  error: PinoLogFn
  debug: PinoLogFn
  warn: PinoLogFn
}

export interface ResolverArgs<Args = any> {
  [key: string]: string | number | boolean | ResolverArgs<Args> | ResolverArgs[] | undefined | any
}

export interface ResolverInfo {
  cacheControl: any
  directives: any
}

export interface ResolverContext {
  req: ExpressRequest
  res: ExpressResponse
  dataSources: DataSources<ResolverContext>
}

export interface ResolverObj {
  self: any
}

export type ResolverFunction<Type = any> = (
  obj: ResolverObj,
  args: ResolverArgs,
  context: ResolverContext,
  info: ResolverInfo
) => Promise<Type> | Type

export interface ResolverType<Type = any> {
  [key: string]: ResolverFunction
}

export interface ResolverExport<Type = any> {
  Query?: ResolverType<Type>
  Mutation?: ResolverType<Type>
}

export interface FactoryArgs {
  query: any
  [key: string]: any
}

export type GraphQLResponse<Response extends object> = ApolloGraphQLResponse & {
  error?: ApolloError
  data?: Response
}

export type AsyncGraphQLResponse<Response extends object> = Promise<GraphQLResponse<Response>>
