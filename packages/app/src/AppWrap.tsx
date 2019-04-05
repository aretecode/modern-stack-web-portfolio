/**
 * @todo can minimize component count by combining with App once testing is integrated
 */
import * as React from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './apolloClient'

// tslint:disable:variable-name
// @lint ^ need something along these lines to use router universally
// + pass typings
// + ComponentName is in StudlyCaps
const Router = ((typeof window === 'object'
  ? BrowserRouter
  : StaticRouter) as any) as React.ComponentType

export default class AppWrap extends React.PureComponent {
  public render() {
    return (
      <React.StrictMode>
        <Router>
          <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
        </Router>
      </React.StrictMode>
    )
  }
}
