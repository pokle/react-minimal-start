import React from "react"
import Counter from "./counter"
import {reddish} from "./styles"

const {Component} = React

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hejjjj</h1>

        <Counter
          initialValue={0}
          step={1}
          interval={1000} />
        <Counter
          initialValue={0}
          step={1}
          interval={100} />
      </div>
    )
  }
}

