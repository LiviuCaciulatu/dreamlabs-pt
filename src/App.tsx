import { useEffect, useState } from 'react';
import './App.scss';
import { Product } from './types';
import List from './components/list';
import Create from './components/create';
import Search from './components/search';
import Details from './components/details';

function App() {
  const [items, setItems] = useState<Product[]>([]);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [selectedItem, setSelectedItem] = useState<Product | null>(null);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setItems(data));
  }, []);

  const handleCreate = (product: Omit<Product, 'id'>) => {
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(newProduct => setItems(prev => [...prev, newProduct]));
  };

  const handleDelete = (id: number) => {
    fetch(`https://fakestoreapi.com/products/${id}`, { method: 'DELETE' })
      .then(() => setItems(prev => prev.filter(item => item.id !== id)));
    if (selectedId === id) {
      setSelectedId(null);
      setSelectedItem(null);
    }
  };

  const handleSelect = (id: number) => {
    setSelectedId(id);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setSelectedItem(data));
  };

  return (
    <div className="App">
      <h1>Dreamlabs PT</h1>
      <Create onCreate={handleCreate} />
      <Search onSearch={handleSelect} />
      <button onClick={() => setShowList(v => !v)}>
        {showList ? 'Hide Product List' : 'Show Product List'}
      </button>
      {showList && (
        <List
          items={items}
          onDelete={handleDelete}
          onSelect={handleSelect}
        />
      )}
      <Details product={selectedItem} />
    </div>
  );
}

export default App;
