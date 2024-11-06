import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import type { CartItem } from '../types';

interface CartProps {
  items: CartItem[];
  onRemoveItem: (id: string) => void;
}

export default function Cart({ items, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <ShoppingCart size={24} className="text-indigo-600" />
          Current Transaction
        </h2>
        <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
          {items.length} items
        </span>
      </div>

      <div className="flex-1 overflow-auto">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 border-b">
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-gray-500">
                {item.quantity} x ${item.price.toFixed(2)}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold">
                ${(item.quantity * item.price).toFixed(2)}
              </span>
              <button
                onClick={() => onRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-6 border-t">
        <div className="flex justify-between mb-4">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors">
          Complete Sale (${total.toFixed(2)})
        </button>
      </div>
    </div>
  );
}