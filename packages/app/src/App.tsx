import * as React from 'react'
import { Helmet } from 'react-helmet'

class App extends React.PureComponent {
  public render() {
    return (
      <>
        <Helmet>
          <title>app</title>
        </Helmet>
        <h1>Started from the</h1>
        {this.props.children}
      </>
    )
  }
}

export default App
