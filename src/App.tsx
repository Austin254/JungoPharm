import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import ProductGrid from './components/ProductGrid';
import Cart from './components/Cart';
import type { Medicine, CartItem } from './types';

// Sample data
const sampleProducts: Medicine[] = [
  {
    id: '1',
    name: 'Paracetamol 500mg',
    generic: 'Acetaminophen',
    stock: 150,
    price: 9.99,
    unit: 'tablets',
    packageSize: 20,
    prescription: false
  },
  {
    id: '2',
    name: 'Amoxicillin 250mg',
    generic: 'Amoxicillin',
    stock: 75,
    price: 24.99,
    unit: 'capsules',
    packageSize: 30,
    prescription: true
  },
  {
    id: '3',
    name: 'Ibuprofen 400mg',
    generic: 'Ibuprofen',
    stock: 200,
    price: 12.99,
    unit: 'tablets',
    packageSize: 24,
    prescription: false
  },
  {
    id: '4',
    name: 'Cetirizine 10mg',
    generic: 'Cetirizine Hydrochloride',
    stock: 100,
    price: 15.99,
    unit: 'tablets',
    packageSize: 30,
    prescription: false
  }
];

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Medicine) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1, isPartialPackage: false }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="pl-20 flex h-screen">
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">
              Jungopharm POS System
            </h1>
            
            <div className="mb-8">
              <SearchBar />
            </div>
            
            <ProductGrid 
              products={sampleProducts} 
              onAddToCart={handleAddToCart} 
            />
          </div>
        </div>
        
        <div className="w-96 p-8 border-l bg-gray-50">
          <Cart 
            items={cartItems} 
            onRemoveItem={handleRemoveFromCart} 
          />
        </div>
      </main>
    </div>
  );
}

export default App;