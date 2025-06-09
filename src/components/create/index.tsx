import React, { useState } from 'react';
import { Product } from '../../types';
import './create.module.scss';

interface CreateProps {
  onCreate: (product: Omit<Product, 'id'>) => void;
}

const Create: React.FC<CreateProps> = ({ onCreate }) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

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
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input className="input" value={price} onChange={e => setPrice(e.target.value)} placeholder="Price" type="number" required />
      <input className="input" value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" required />
      <input className="input" value={category} onChange={e => setCategory(e.target.value)} placeholder="Category" required />
      <input className="input" value={image} onChange={e => setImage(e.target.value)} placeholder="Image URL" required />
      <button className="button" type="submit">Create Item</button>
    </form>
  );
};

export default Create;
