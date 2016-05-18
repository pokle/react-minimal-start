import React from 'react'

export default class Hello extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { name: "there" }
    this.nameChanged = this.nameChanged.bind(this)
  }

  nameChanged(event) {
    this.setState({name: event.target.value})
  }

  render() {
    return (
      <div>
        <h2>Hello {this.state.name}</h2>
        And what's your name? <input value={this.state.name} onChange={this.nameChanged}/>
      </div>
    );
  }
}
