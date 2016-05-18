import React from "react"
import ReactDOM from "react-dom"

import Counter from "./counter"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>hi</h1>

        <Counter
          initialValue={0}
          step={1}
          interval={1000} />
        <Counter
          initialValue={0}
          step={1}
          interval={1000} />
        <Counter
          initialValue={0}
          step={1}
          interval={500} />
      </div>
    )
  }
}


ReactDOM.render(<p><App/></p>, document.getElementById("app"))
