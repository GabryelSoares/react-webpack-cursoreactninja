'use strict'

import React, { Component } from 'react'
class App extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Gabryel'
    }
  }
  render () {
    return (
      <div className='container' onClick={() => (this.setState({
        text: 'Soares'
      }))}>
        {this.state.text}
      </div>
    )
  }
}

export default App
