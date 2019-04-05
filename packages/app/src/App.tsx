import * as React from 'react'
import { Helmet } from 'react-helmet'
import ResumePage from './pages/ResumePage'
import AppWrap from './AppWrap'

export default class App extends React.PureComponent {
  public render() {
    return (
      <AppWrap>
        <Helmet>
          <title>app</title>
        </Helmet>
        <h1>Started from the</h1>
        {this.props.children}
        <ResumePage />
      </AppWrap>
    )
  }
}
