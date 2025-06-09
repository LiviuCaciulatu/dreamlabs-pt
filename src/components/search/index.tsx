import React, { useState } from 'react';
import './search.module.scss';

interface ProductSearchProps {
  onSearch: (id: number) => void;
}

const Search: React.FC<ProductSearchProps> = ({ onSearch }) => {
  const [searchId, setSearchId] = useState('');

  return (
    <form className="form" onSubmit={e => { e.preventDefault(); if (searchId) onSearch(Number(searchId)); }}>
      <input
        className="input"
        type="number"
        placeholder="Search by ID"
        value={searchId}
        onChange={e => setSearchId(e.target.value)}
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
