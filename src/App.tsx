import * as React from 'react'

class App extends React.PureComponent {
  public render() {
    return (
      <React.StrictMode>
        <h1>Started from the</h1>
        {this.props.children}
      </React.StrictMode>
    )
  }
}

export default App
