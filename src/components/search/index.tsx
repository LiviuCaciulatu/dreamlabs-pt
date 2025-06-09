import React, { useState } from 'react';
import styles from './search.module.scss';

interface ProductSearchProps {
  onSearch: (id: number) => void;
  onClear?: () => void;
}

const Search: React.FC<ProductSearchProps> = ({ onSearch, onClear }) => {
  const [searchId, setSearchId] = useState('');

  return (
    <form className={styles.searchForm} onSubmit={e => {
      e.preventDefault();
      if (searchId) {
        onSearch(Number(searchId));
        setSearchId('');
      }
    }}>
      <input
        className={styles.searchInput}
        type="number"
        placeholder="Search by ID"
        value={searchId}
        onChange={e => setSearchId(e.target.value)}
      />
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
        <button className={styles.searchButton} type="submit">
          Search
        </button>
        <button
          className={styles.searchButton}
          type="button"
          onClick={() => {
            setSearchId('');
            if (onClear) onClear();
          }}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default Search;
