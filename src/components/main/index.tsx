import React, { useEffect, useState } from 'react';
import Create from '../create';
import List from '../list';
import Details from '../details';
import Search from '../search';
import { Product } from '../../types';
import styles from './main.module.scss';

const Main: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showList, setShowList] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleCreate = (product: Omit<Product, 'id'>) => {
    const newProduct = { ...product, id: Date.now() };
    setProducts([newProduct, ...products]);
    setShowList(true);
  };

  const handleDelete = (id: number) => {
    setProducts(products.filter(p => p.id !== id));
    if (selectedProduct && selectedProduct.id === id) setSelectedProduct(null);
  };

  const handleSelect = (id: number) => {
    const found = products.find(p => p.id === id) || null;
    setSelectedProduct(found);
  };

  const handleSearch = (id: number) => {
    handleSelect(id);
    setShowList(false);
  };

  const handleClearSearch = () => {
    setSelectedProduct(null);
  };

  return (
    <div className={styles.main}>
      <h1 className={styles.mainTitle}>Dreamlabs PT Fake Store CRUD</h1>
      <Search onSearch={handleSearch} onClear={handleClearSearch} />
      <button className={styles.mainToggle} onClick={() => setShowList(v => !v)}>
        {showList ? 'Hide' : 'Show'} Product List
      </button>
      <Create onCreate={handleCreate} />
      {showList && <List items={products} onDelete={handleDelete} onSelect={handleSelect} />}
      <Details product={selectedProduct} />
    </div>
  );
};

export default Main;
