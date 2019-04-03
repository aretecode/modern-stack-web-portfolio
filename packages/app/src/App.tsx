import * as React from 'react'

class App extends React.PureComponent {
  public render() {
    return (
      <React.StrictMode>
        {this.props.children}
      </React.StrictMode>
    )
  }
}

export default App
