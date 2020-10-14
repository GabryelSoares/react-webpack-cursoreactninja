'use strict'

import React from 'react'
import Button from './button'

const SearchButton = ({ children }) => (
  <Button handleClick={() => alert('search')}>
    Search
  </Button>
);

export default SearchButton;