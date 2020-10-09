'use strict'

import React, { Component } from 'react'
import Square from './square'

class App extends Component {
  render () {
    return (
      <div className='container'>
        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}

// const App = React.createClass({
//   render: function () {
//     return (
//       <div className='container'>
//         <Title name='Gabryel' lastname='Soares' />
//       </div>
//     )
//   }
// })

export default App
