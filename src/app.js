// This is the main entry point of the application

import React from 'react'
import ReactDOM  from 'react-dom'

const Norm = React.createClass({

  getInitialState() {
    return {clickCount: 0}
  },

  handleClick() {
    this.setState({clickCount: this.state.clickCount + 1})
  },


  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        <div>{this.state.clickCount}</div>
      </div>
    )
  }
})




class Who extends React.Component {
  
  constructor(props) {
    super(props)
    console.log("Hello hello.... just constructed")
    this.state = { name: "who" }
    this.nameChanged = this.nameChanged.bind(this)
  }

  nameChanged(e) {
    this.setState({name: e.target.value})
  }

  render() {
    return (
      <div>
        <p>Hello there <b>{this.state.name}</b>!</p>
        <input value={this.state.name} onChange={this.nameChanged}/>
      </div>
    );
  }
}


// Your first react component
// yes - it's just a pure function
function Hello({name}) {
  return (
    <div>
      <h1>Hello {name}!</h1>
      Edit mefff in src/app.js
      <Who/>
      <Norm/>
    </div>
  );
}

function render(state) {
  ReactDOM.render(
    <Hello name={state.name}/>,
    document.getElementById('app')
  );
}

// Hold all your app's state in a single object
const state = { name: "world blah" }

// Call render(state) every time your state changes
render(state)
