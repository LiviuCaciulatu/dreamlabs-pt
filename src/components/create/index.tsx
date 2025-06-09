import React, { useState } from 'react';
import { Product } from '../../types';
import styles from './create.module.scss';

interface CreateProps {
  onCreate: (product: Omit<Product, 'id'>) => void;
}

const Create: React.FC<CreateProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      title,
      price: parseFloat(price),
      description,
      category,
      image,
    });
    setTitle('');
    setPrice('');
    setDescription('');
    setCategory('');
    setImage('');
    setShowForm(false);
  };

  return (
    <div className={styles.createWrapper}>
      {!showForm && (
        <button className={styles.createButton} onClick={() => setShowForm(true)}>
          Add Items
        </button>
      )}
      {showForm && (
        <form className={styles.createForm} onSubmit={handleSubmit}>
          <input className={styles.createInput} value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
          <input className={styles.createInput} value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" required />
          <input className={styles.createInput} value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
          <input className={styles.createInput} value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
          <input className={styles.createInput} value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" required />
          <div className={styles.createFormActions}>
            <button className={styles.createButton} type="submit">Create Item</button>
            <button className={styles.createButton} type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Create;
