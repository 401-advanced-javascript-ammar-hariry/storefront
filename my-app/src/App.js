import React from 'react';

import Category from './components/category.js';
import Products from './components/products'
import SimpleCart from './components/cart.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Category />
      <Products />
      <SimpleCart />
      </header>
    </div>
  );
}

export default App;
