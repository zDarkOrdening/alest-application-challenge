'use client';

import React from 'react';
import { useState } from 'react';
import './Searchbar.css';
import Button from '../Button/Button';

function Searchbar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        placeholder="  Pesquisar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="input-search"
       />
      <Button children={'Buscar'} className={'btn'} />
    </form>
  );
}

export default Searchbar;