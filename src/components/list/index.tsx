import React from 'react';
import { Product } from '../../types';
import './list.module.scss';

interface ProductListProps {
  items: Product[];
  onDelete: (id: number) => void;
  onSelect: (id: number) => void;
}

const List: React.FC<ProductListProps> = ({ items, onDelete, onSelect }) => (
  <ul className="list">
    {items.map(item => (
      <li key={item.id}>
        {item.title}
        {item.description}
        <img src={item.image} alt={item.title} style={{ width: '100px' }} />
        <p>Category: {item.category}</p>
        <p>Price: ${item.price.toFixed(2)}</p>
        <button className="button" onClick={() => onSelect(item.id)}>View</button>
        <button className="button" onClick={() => onDelete(item.id)} style={{ marginLeft: 8 }}>Delete</button>
      </li>
    ))}
  </ul>
);

export default List;
