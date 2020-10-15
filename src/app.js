'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }
  render () {
    return (
      <div>
        <label>
          <input
            type="checkbox" name="" id=""
            checked={this.state.checked}
            onChange={() => {
              this.setState({
                checked: !this.state.checked
              }, () => {
                this.setState({ showContent: this.state.checked })
              })
            }}
          /> Mostrar conteúdo
        </label>
        {this.state.showContent && <div><h2>Olha eu aqui!</h2></div>}
      </div>
    )
  }
}

export default App
