import React from 'react';
import type { Medicine } from '../types';

interface ProductGridProps {
  products: Medicine[];
  onAddToCart: (product: Medicine) => void;
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
        >
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.generic}</p>
            </div>
            {product.prescription && (
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                Rx
              </span>
            )}
          </div>

          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-2xl font-bold text-indigo-600">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-sm text-gray-500">
                per {product.packageSize} {product.unit}
              </p>
            </div>
            <div className="text-right">
              <p className={`text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
              </p>
              <p className="text-xs text-gray-500">{product.stock} units left</p>
            </div>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium
                     hover:bg-indigo-700 transition-colors disabled:bg-gray-300"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}