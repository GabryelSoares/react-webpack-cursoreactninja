import React from 'react';

const UserInfo = () => (
  <div className='user-info'>
    <img src="https://avatars3.githubusercontent.com/u/55500531?v=4" alt="" />
    <h1 className='username'>
      <a href="https://github.com/GabryelSoares">Gabryel Soares</a>
    </h1>

    <ul className='repos-info'>
      <li>Repositórios: 5</li>
      <li>Seguidores: 0</li>
      <li>Seguindo: 1</li>
    </ul>
  </div>
);

export default UserInfo;