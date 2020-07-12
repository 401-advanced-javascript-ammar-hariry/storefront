import React from 'react';

import Category from './components/category.js';
import Products from './components/products'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Category />
      <Products />
      </header>
    </div>
  );
}

export default App;
