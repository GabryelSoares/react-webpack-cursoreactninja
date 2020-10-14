'use strict'

import React, { Component } from 'react'
import Button from './button'
import Square from './square'
import Timer from './timer'
class App extends Component {
  constructor() {
    console.log('constructor')
    super()
    this.state = {
      showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  render () {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          console.log(this.state.showTimer)
          this.setState({ showTimer: !this.state.showTimer })
          console.log(this.state.showTimer)
        }}>Show / hide timer</button>
      </div>
    )
  }
}

export default App
