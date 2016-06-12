import React from 'react'

// Shows you how to integrate with plain old javascript events
// tldr; this.setState() is how you communicate from the outside world
export default class Counter extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {value: props.initialValue || 0}
  }

  componentDidMount() {
    const self = this
    tick()

    function tick() {
      const {step=1, interval=1000} = self.props
      self.setState({
        value: self.state.value + step,
        interval: setTimeout(tick, interval)
      })
    }
  }

  componentWillUnmount() {
    clearTimeout(this.state.interval)
  }

  render() {
    return (
      <p>
        Seconds you've spent staring at this page: 
        {this.state.value}
      </p>
    )
  }
}
