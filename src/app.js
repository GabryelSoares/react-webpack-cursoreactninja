'use strict'

import React from 'react'

const App = () => (
  <div className='app'>
    <div className='search'>
      <input
        type='search'
        placeholder='Digite o nome do usuário no GitHub'
      />
    </div>

    <div className='user-info'>
      <img src="https://avatars3.githubusercontent.com/u/55500531?v=4" alt="" />
      <h1>
        <a href="https://github.com/GabryelSoares">Gabryel Soares</a>
      </h1>

      <ul className='repos-info'>
        <li>Repositórios: 5</li>
        <li>Seguidores: 0</li>
        <li>Seguindo: 1</li>
      </ul>

      <div className='actions'>
        <button>Ver repositórios</button>
        <button>Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2>Repositórios: </h2>
        <ul>
          <li><a href="#">Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2>Favoritos: </h2>
        <ul>
          <li><a href="#">Nome do repositório</a></li>
        </ul>
      </div>

    </div>
  </div>
)

export default App