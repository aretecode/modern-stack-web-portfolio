/**
 * @todo can minimize component count by combining with App once testing is integrated
 */
import * as React from 'react'
import { BrowserRouter, StaticRouter } from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import { client } from './apolloClient'
import { ResumeProvider } from './features/ResumeContext'

const Router = ((typeof window === 'object'
  ? BrowserRouter
  : StaticRouter) as any) as React.ComponentType

export default class AppWrap extends React.PureComponent {
  render() {
    return (
      <React.StrictMode>
        <Router>
          <ApolloProvider client={client}>
            <ResumeProvider>{this.props.children}</ResumeProvider>
          </ApolloProvider>
        </Router>
      </React.StrictMode>
    )
  }
}
