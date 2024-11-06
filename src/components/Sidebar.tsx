import React from 'react';
import { 
  LayoutGrid, 
  Pill, 
  Receipt, 
  Users, 
  Settings, 
  LogOut 
} from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="h-screen w-20 bg-indigo-900 fixed left-0 top-0 flex flex-col items-center py-6">
      <div className="mb-8">
        <Pill size={32} className="text-white" />
      </div>
      
      <nav className="flex-1 flex flex-col gap-4">
        <button className="p-3 text-white hover:bg-indigo-800 rounded-xl transition-colors">
          <LayoutGrid size={24} />
        </button>
        <button className="p-3 text-white hover:bg-indigo-800 rounded-xl transition-colors">
          <Receipt size={24} />
        </button>
        <button className="p-3 text-white hover:bg-indigo-800 rounded-xl transition-colors">
          <Users size={24} />
        </button>
      </nav>
      
      <div className="mt-auto flex flex-col gap-4">
        <button className="p-3 text-white hover:bg-indigo-800 rounded-xl transition-colors">
          <Settings size={24} />
        </button>
        <button className="p-3 text-white hover:bg-indigo-800 rounded-xl transition-colors">
          <LogOut size={24} />
        </button>
      </div>
    </div>
  );
}