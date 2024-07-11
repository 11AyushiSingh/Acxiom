import React from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';
import './main.css';

function Main() {
  const vendorName = "Ayushi"; 

  return (
    <div className="app">
      <header className="header">
        <h5>Welcome {vendorName}</h5>
        <div className="header-buttons">
          <button>Product status</button>
          <button>Request item</button>
          <button>View product</button>
          <button>Logout</button>
        </div>
      </header>
      <div className="content">
        <ProductForm />
        <ProductTable />
      </div>
    </div>
  );
}

export default Main;
