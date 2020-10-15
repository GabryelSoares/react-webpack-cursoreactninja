'use strict'

import React, { Component } from 'react'
import Button from './button'

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: '2'
    }
  }
  render () {
    return (
      <div>
        <form>
          <textarea
            defaultValue={'Olá, \nDigite um texto'}

          />
        </form>
      </div>
    )
  }
}

export default App
