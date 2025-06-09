import React from 'react';
import { Product } from '../../types';
import './details.module.scss';

interface ProductDetailsProps {
  product: Product | null;
}

const Details: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) return null;
  return (
    <div className="card">
      <h2>Selected Item</h2>
      <p><strong>{product.title}</strong></p>
      <img src={product.image} alt={product.title} style={{ width: '100px' }} />
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Details;
