import React, { useState } from 'react';
import { Product } from '../../types';
import styles from './list.module.scss';

interface ProductListProps {
  items: Product[];
  onDelete: (id: number) => void;
  onSelect: (id: number) => void;
}

const ITEMS_PER_PAGE = 4;

const List: React.FC<ProductListProps> = ({ items, onDelete, onSelect }) => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const handleSeeMore = () => {
    setVisibleCount(count => Math.min(count + ITEMS_PER_PAGE, items.length));
  };

  const visibleItems = items.slice(0, visibleCount);

  return (
    <>
      <ul className={styles.list}>
        {visibleItems.length === 0 ? (
          <li className={styles.listItem}>No products found.</li>
        ) : (
          visibleItems.map(item => (
            <li className={styles.listItem} key={item.id}>
              <span className={styles.listTitle}>{item.title}</span>
              <span className={styles.listDesc}>{item.description}</span>
              <img className={styles.listImage} src={item.image} alt={item.title} style={{ width: '100px' }} />
              <p className={styles.listCategory}>Category: {item.category}</p>
              <p className={styles.listPrice}>Price: ${item.price.toFixed(2)}</p>
              <button className={styles.listButton} onClick={() => onSelect(item.id)}>View</button>
              <button className={`${styles.listButton} ${styles.listButtonDelete}`} onClick={() => onDelete(item.id)} style={{ marginLeft: 8 }}>Delete</button>
            </li>
          ))
        )}
      </ul>
      {visibleCount < items.length && (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', margin: '24px 0' }}>
          <button className={styles.listButton} onClick={handleSeeMore}>See More</button>
        </div>
      )}
    </>
  );
};

export default List;
