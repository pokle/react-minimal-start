import React from 'react'
import ReactDOM from 'react-dom'

import Hello from './samples/hello'
import Counter from './samples/counter'


class App extends React.Component {
  render() {
    return (
      <div>
        <Hello/>
        <Counter/>
      </div>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById("app"))
