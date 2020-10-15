'use strict'

import React, { Component } from 'react'
import AppContent from './components/app-content'

class App extends Component {
  constructor() {
    super()
    this.state = {
      userinfo: {
        username: 'Gabryel Soares',
        photo: 'https://avatars3.githubusercontent.com/u/55500531?v=4',
        login: 'GabryelSoares',
        repos: '5',
        followers: '0',
        following: '1'
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]
    }
  }
  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
    />
  }
}

export default App
