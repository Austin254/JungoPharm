export interface Medicine {
  id: string;
  name: string;
  generic: string;
  stock: number;
  price: number;
  unit: 'pills' | 'ml' | 'tablets' | 'capsules';
  packageSize: number;
  prescription: boolean;
}

export interface CartItem extends Medicine {
  quantity: number;
  isPartialPackage: boolean;
}

export interface Transaction {
  items: CartItem[];
  subtotal: number;
  discount: number;
  total: number;
  paymentMethod: 'cash' | 'card' | 'mobile';
}