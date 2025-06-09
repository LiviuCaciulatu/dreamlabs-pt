import React from 'react';
import { Product } from '../../types';
import styles from './details.module.scss';

interface ProductDetailsProps {
  product: Product | null;
}

const Details: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) return null;
  return (
    <div className={styles.detailsCard}>
      <h2 className={styles.detailsCardTitle}>Selected Item</h2>
      <p className={styles.detailsCardName}><strong>{product.title}</strong></p>
      <img className={styles.detailsCardImage} src={product.image} alt={product.title} style={{ width: '100px' }} />
      <p className={styles.detailsCardDesc}>{product.description}</p>
      <p className={styles.detailsCardCategory}>Category: {product.category}</p>
      <p className={styles.detailsCardPrice}>Price: ${product.price.toFixed(2)}</p>
    </div>
  );
};

export default Details;
