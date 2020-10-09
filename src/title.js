'use strict'

import React from 'react'

const Title = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Anônimo',
      lastname: 'sem sobrenome'
    }
  },
  render: function () {
    return (
      <h1>Olá {this.props.name + ' ' + this.props.lastname}!</h1>
    )
  }
})

export default Title
