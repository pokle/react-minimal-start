import React from "react"
import ReactDOM from "react-dom"

import Counter from "./counter"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi!</h1>
        Edit me in src/app.js
        <Counter
          initialValue={0}
          step={1}
          interval={1000} />
      </div>
    )
  }
}


ReactDOM.render(<p><App/></p>, document.getElementById("app"))
